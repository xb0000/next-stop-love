(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./story.js'));
  else root.LoveCore = factory(root.LoveStory);
})(typeof globalThis !== 'undefined' ? globalThis : this, function (story) {
  'use strict';
  const {chapters} = story;
  const freshState = () => ({version:2,started:false,chapter:0,step:0,phase:'choice',history:[],lastChoice:null,affection:0,trust:0,memories:[],rhythm:{round:0,hits:0,results:[]},rhythmComplete:false,ended:false});
  const checkpoint = s => [s.chapter,s.step,s.phase,s.history.length,s.rhythm.round].join(':');
  const isPick = value => Number.isInteger(value) && (value === 0 || value === 1);
  function recalculate(s) {
    let affection=0, trust=0;
    for (const h of s.history) {
      const c=chapters[h.chapter].steps[h.step].choices[h.choice];
      affection+=c.affection; trust+=c.trust;
    }
    s.rhythm.round=s.rhythm.results.length;
    s.rhythm.hits=s.rhythm.results.filter(Boolean).length;
    if(s.rhythmComplete){affection+=s.rhythm.hits*2;trust+=s.rhythm.hits*2;}
    s.affection=Math.min(100,affection);s.trust=Math.min(100,trust);
    s.memories=Array.from({length:s.chapter},(_,i)=>i);
    if(s.phase==='chapter-end'||s.phase==='ending')s.memories.push(s.chapter);
    s.ended=s.phase==='ending';
    s.lastChoice=s.phase==='response'?s.history[s.history.length-1]?.choice??null:null;
    return s;
  }
  function normalizeSave(raw) {
    const s=freshState();
    if(!raw||typeof raw!=='object'||![1,2].includes(raw.version))return s;
    if(Array.isArray(raw.history)){
      for(let i=0;i<Math.min(raw.history.length,10);i++){
        const h=raw.history[i];
        if(!h||h.chapter!==Math.floor(i/2)||h.step!==i%2||!isPick(h.choice))break;
        s.history.push({chapter:h.chapter,step:h.step,choice:h.choice});
      }
    }
    const count=s.history.length;
    s.started=raw.started===true||count>0;
    if(!count)return s;
    const last=s.history[count-1];
    // If a checkpoint is inconsistent, return to the last earned reply without awarding it twice.
    s.chapter=last.chapter;s.step=last.step;s.phase='response';
    if(raw.phase==='choice'&&count<10&&raw.chapter===Math.floor(count/2)&&raw.step===count%2){
      s.chapter=raw.chapter;s.step=raw.step;s.phase='choice';
    }else if(count%2===0&&raw.chapter===last.chapter&&raw.step===1){
      if(raw.phase==='rhythm'&&last.chapter===1)s.phase='rhythm';
      if(raw.phase==='chapter-end')s.phase='chapter-end';
      if(raw.phase==='ending'&&last.chapter===4)s.phase='ending';
    }
    if(s.chapter>1||(s.chapter===1&&['rhythm','chapter-end'].includes(s.phase))){
      if(Array.isArray(raw.rhythm?.results))s.rhythm.results=raw.rhythm.results.slice(0,3).filter(v=>typeof v==='boolean');
      // Version 1 saves recorded the hit count before they always recorded individual rounds.
      const round=Number.isInteger(raw.rhythm?.round)?Math.max(0,Math.min(3,raw.rhythm.round)):0;
      const hits=Number.isInteger(raw.rhythm?.hits)?Math.max(0,Math.min(round,raw.rhythm.hits)):0;
      while(s.rhythm.results.length<round)s.rhythm.results.push(s.rhythm.results.filter(Boolean).length<hits);
    }
    s.rhythmComplete=s.chapter>1||(s.chapter===1&&s.phase==='chapter-end');
    if(s.phase==='rhythm'&&s.rhythm.results.length===3){s.phase='chapter-end';s.rhythmComplete=true;}
    return recalculate(s);
  }
  function transition(current, action) {
    if(!action||action.checkpoint&&action.checkpoint!==checkpoint(current))return current;
    const s={...current,history:current.history.map(h=>({...h})),rhythm:{...current.rhythm,results:[...current.rhythm.results]}};
    switch(action.type){
      case 'START':
        if(s.started)return current;
        s.started=true;break;
      case 'CHOOSE':
        if(!s.started||s.phase!=='choice'||!isPick(action.choice))return current;
        s.history.push({chapter:s.chapter,step:s.step,choice:action.choice});s.phase='response';break;
      case 'CONTINUE':
        if(s.phase!=='response')return current;
        if(s.step===0){s.step=1;s.phase='choice';}
        else if(s.chapter===1){s.phase='rhythm';s.rhythm={round:0,hits:0,results:[]};}
        else s.phase='chapter-end';
        break;
      case 'TAP_RHYTHM':
        if(s.phase!=='rhythm'||s.rhythm.round>=3||typeof action.hit!=='boolean')return current;
        s.rhythm.results.push(action.hit);
        if(s.rhythm.results.length===3){s.phase='chapter-end';s.rhythmComplete=true;}
        break;
      case 'SKIP_RHYTHM':
        if(s.phase!=='rhythm')return current;
        s.phase='chapter-end';s.rhythmComplete=true;break;
      case 'NEXT_CHAPTER':
        if(s.phase!=='chapter-end')return current;
        if(s.chapter===4)s.phase='ending';
        else{s.chapter++;s.step=0;s.phase='choice';}
        break;
      default:return current;
    }
    return recalculate(s);
  }
  function endingFor(s){
    const final=s.history[s.history.length-1];
    if(final?.chapter===4&&final.step===1&&final.choice===1)return {type:'gentle',tag:'ENDING 03 · 来日方长',title:'喜欢，慢慢来也很好。',line:'你们没有急着给喜欢一个定义，却认真地约好了明天。他把手递给你，等你以自己的速度走过来。',quote:'“不赶路，我想和你慢慢相爱。”'};
    if(s.affection>=85&&s.trust>=75)return {type:'perfect',tag:'ENDING 01 · 双向奔赴',title:'下一站，是我们的每一天。',line:'原来一整天那些小心的试探，都等着被你回应。他终于能牵着你的手，说“男朋友，我们回家吧”。',quote:'“男朋友，下次也请坐我旁边。”'};
    return {type:'sweet',tag:'ENDING 02 · 怦然心动',title:'这一站，我们恋爱了。',line:'说出喜欢之后，他反而变得有一点害羞。你晃了晃牵在一起的手，他便也笑着靠近了一点。',quote:'“这次，我想坐到你的人生里。”'};
  }
  function normalizeName(value,fallback){return typeof value==='string'?Array.from(value.replace(/[\u0000-\u001f\u007f]/g,'').trim()).slice(0,8).join('')||fallback:fallback;}
  return {freshState,checkpoint,normalizeSave,transition,endingFor,normalizeName};
});
