(function (root, factory) {
  const story = factory();
  if (typeof module === 'object' && module.exports) module.exports = story;
  else root.LoveStory = story;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const chapters = [
    {name:'列车初遇',sub:'刚刚好，是你',icon:'train',scene:'train',location:'开往春天的列车',time:'15:20 · 晴',quote:['同一趟列车，','不同的心跳。'],aside:'故事，从你们开始',memory:'一张双人车票',memoryDesc:'他明明可以坐在别处，却偏偏问了你身旁的位置。',steps:[
      {speaker:'b',line:'这里有人坐吗？如果没有……我想坐你旁边。',narration:'空座其实还有很多。他扶了扶眼镜，视线却只停在你这里。',choices:[
        {label:'拍了拍身边：“有，等你好一会儿了。”',reply:'“那我来晚了。”他坐下来，膝盖轻轻碰到你，又没有立刻挪开，“下次早点。”',note:'你们谁也没提，车厢里其实并不拥挤。',affection:10,trust:4,tone:'bold'},
        {label:'往窗边挪一点：“这边的风景，分你一半。”',reply:'他看了眼窗外，目光很快又落回来：“嗯，这个位置……确实很好。”',note:'你分不清，他说的是窗外，还是你身边。',affection:5,trust:9,tone:'soft'}
      ]},
      {speaker:'b',line:'能不能一起拍张照？不然回去以后，怕会想不起今天。',narration:'他举起手机，又悄悄把镜头往你这边偏了一点。',choices:[
        {label:'靠近镜头：“那拍近一点，免得你忘了我。”',reply:'他呼吸停了半拍，随后笑了：“放心，你这样的……挺难忘的。”快门按下时，你们的肩膀贴在一起。',note:'照片拍好了，他却没有急着坐回去。',affection:10,trust:6,tone:'bold'},
        {label:'“先加个联系方式，照片记得只发给我。”',reply:'“只发给你。”他把手机递过来，补了一句，“下次想见我，也可以直接发消息。”',note:'加上好友的第一秒，你们同时发来了一句“你好”。',affection:7,trust:9,tone:'soft'}
      ]}
    ]},
    {name:'樱花小路',sub:'把春天分你一半',icon:'flower',scene:'park',location:'春日河畔 · 樱花小路',time:'16:10 · 微风',quote:['春天很短，','想和你慢慢走。'],aside:'连风，都放轻了脚步',memory:'一枚春日花签',memoryDesc:'他替你摘下花瓣时，指尖在发梢多停了一秒。',steps:[
      {speaker:'b',line:'别动，头发上有花瓣……我可以帮你拿下来吗？',narration:'你点了点头。他靠近时，你闻到一点干净的洗衣液香气。',choices:[
        {label:'抬眼看他：“花瓣拿走了，你怎么还不退开？”',reply:'他指尖顿了顿，笑着低下头：“你一直这样看我，我有点……舍不得退。”',note:'花瓣早就摘下了，心跳却还没有恢复。',affection:10,trust:6,tone:'bold'},
        {label:'接住花瓣：“别丢，今天的我想留着。”',reply:'他把花瓣放进你掌心，指尖轻轻擦过：“那我也想，留在你今天的回忆里。”',note:'他认真说话的时候，比玩笑更让人心动。',affection:7,trust:9,tone:'soft'}
      ]},
      {speaker:'b',line:'这条路还很长。你……还想陪我走一会儿吗？',narration:'路口已经到了。他却把步子越放越慢，袖口偶尔擦过你的手。',choices:[
        {label:'勾住他的袖口：“走慢点，我还没看够你。”',reply:'“看路。”他耳尖有些红，却把袖口往你手边又送了一点，“……我不会跑。”',note:'你们又走了一段，明明没有人在认真看风景。',affection:10,trust:6,tone:'bold'},
        {label:'“不只一会儿，下次也陪你。”',reply:'他停下来看你：“那我当真了。”你说好，他才放心地笑起来。',note:'比起一句漂亮的话，他更喜欢你没有犹豫的回答。',affection:6,trust:10,tone:'soft'}
      ]}
    ]},
    {name:'两杯热饮',sub:'记住你的小习惯',icon:'cup',scene:'cafe',location:'转角咖啡馆 · 靠窗座',time:'17:00 · 暖',quote:['热饮七分甜，','喜欢刚刚好。'],aside:'日常，也可以很浪漫',memory:'一张手写杯套',memoryDesc:'杯套背面的小字：下次，也想坐你旁边。',steps:[
      {speaker:'b',line:'我不太能喝苦的，喜欢热可可。你呢，喜欢什么？',narration:'他说完，端着杯子等你回答。暖光映在镜片上，藏不住他的期待。',choices:[
        {label:'“记住了。你的口味，我想慢慢都记下来。”',reply:'“这也要记啊？”他把杯子往下放了放，终于让你看清了他的笑，“那我得多告诉你一点。”',note:'被认真记住的小习惯，会慢慢变成偏爱。',affection:7,trust:10,tone:'soft'},
        {label:'望着他笑：“可可挺甜，不过我现在更想看你。”',reply:'他差点忘了把杯子放稳：“你是不是……对谁都这么说？”你摇头，他低声补了一句，“那就好。”',note:'他问得像随口一提，听到答案却明显松了口气。',affection:10,trust:5,tone:'bold'}
      ]},
      {speaker:'b',line:'如果我哪天不开心了，可以给你打电话吗？可能也没什么要紧事。',narration:'他轻轻拨着杯套边缘。这次，你听出了玩笑下面的认真。',choices:[
        {label:'“可以。想我也可以，不用先找理由。”',reply:'他安静了一会儿，抬眼看你：“那……今天回去以后，我可能就会打了。”',note:'你说“我会接”，他才把一直捏着的杯套松开。',affection:9,trust:10,tone:'soft'},
        {label:'把手机递过去：“给你设个专属铃声，先试试？”',reply:'你们明明隔着一张小桌，他还是拨了过来。铃声响起，他笑着问：“现在可以想你了吗？”',note:'隔着很近的距离，你听见他在电话里说“喂”。',affection:8,trust:6,tone:'bold'}
      ]}
    ]},
    {name:'雨中同伞',sub:'向你偏一点点',icon:'umbrella',scene:'rain',location:'老街 · 一把伞的距离',time:'18:20 · 小雨',quote:['雨落下来，','你靠过来。'],aside:'这一小块晴天，分你一半',memory:'一把偏心的伞',memoryDesc:'你握住伞柄，也恰好握住了他不舍得收回的手。',steps:[
      {speaker:'b',line:'靠过来一点。再近一点也……没关系。',narration:'伞下的位置明明够用。他却把外侧的肩膀留在了雨里。',choices:[
        {label:'握住他撑伞的手：“你也要在伞里面。”',reply:'他低头看着你们叠在一起的手，慢慢收紧指尖：“那你别松开，不然我又要淋雨了。”',note:'你知道他在找借口，可你并不想拆穿。',affection:9,trust:10,tone:'soft'},
        {label:'轻轻靠上他的肩：“这样，够近了吗？”',reply:'他一下站得很直，过了几秒才轻声说：“嗯。”然后，又往你这里偏了一点。',note:'雨声很响，你却听清了他那一声很轻的笑。',affection:10,trust:4,tone:'bold'}
      ]},
      {speaker:'b',line:'日落看不到了，会不会有点可惜？',narration:'你们躲在同一处屋檐下。他伸手接了下雨水，又悄悄看你。',choices:[
        {label:'“我今天想看的，又不只是日落。”',reply:'他顺着你的目光看过来，愣了一下才懂。“那……还满意吗？”你点头，他笑得眼睛都弯了。',note:'你们谁也没再提回去的时间。',affection:10,trust:6,tone:'bold'},
        {label:'“留到明天吧，我想再约你一次。”',reply:'“不用等明天再问。”他看着你，“你约我，我就来。”',note:'日落没有等到，你却等到一个明确的偏爱。',affection:6,trust:10,tone:'soft'}
      ]}
    ]},
    {name:'下一站是你',sub:'把喜欢说给你听',icon:'heart',scene:'night',location:'星灯河岸 · 两个人的夜晚',time:'19:30 · 雨后',quote:['下一站，','想在你身边。'],aside:'这次，让心意先到站',memory:'一封双向的信',memoryDesc:'原来那些故意的靠近，都是一句没来得及说的喜欢。',steps:[
      {speaker:'b',line:'今天问你旁边有没有人的时候，其实……有点紧张。',narration:'灯光落进河里。他终于看着你，说起那句藏了一路的话。',choices:[
        {label:'伸出手：“那现在，可以换个身份坐我旁边吗？”',reply:'他先握住你的手，才笑着问：“什么身份？”可他的眼神分明在等那个答案。',note:'你们离得很近，谁都没有再用玩笑把真心藏起来。',affection:10,trust:5,tone:'bold'},
        {label:'“其实，我也一直在等你再靠近一点。”',reply:'“原来不是我一个人。”他低下头笑了，又认真看你，“那这次，我能牵你的手吗？”',note:'你把手递过去，他才小心地握住。',affection:6,trust:10,tone:'soft'}
      ]},
      {speaker:'b',line:'以后每一趟旅行，我都想和你一起。不是随口说说。你愿意吗？',narration:'他握着你的手，没有催促。这一刻，你可以把喜欢说清楚，也可以认真地慢慢来。',choices:[
        {label:'“愿意。男朋友，下次也要坐我旁边。”',reply:'“好，男朋友。”他把这三个字轻轻又念了一遍，像终于可以光明正大地偏爱你。',note:'那张没有终点的双人车票，终于写上了你们的名字。',affection:12,trust:8,confession:true,tone:'bold'},
        {label:'“愿意。我想慢一点，但每一步都认真向你走。”',reply:'“我等得起。”他轻轻回握你的手，“不用急着给我答案，你愿意靠近，就已经很好。”',note:'不赶着抵达的人，也可以坚定地走向彼此。',affection:6,trust:10,confession:false,tone:'soft'}
      ]}
    ]}
  ];
  const moments = [
    {near:'你挪近了一点。他没有躲，只把手机屏幕也往你这里偏。',hand:'手背轻轻碰了一下。他看了你一眼，笑着没有说话。',whisper:['“你刚刚，是不是也在看我？”','“其实我一上车，就看到你了。”']},
    {near:'你们的袖口挨在一起，他把步子放得和你一样慢。',hand:'你伸出小指，他迟疑了一瞬，便轻轻勾了回来。',whisper:['“别一直看花，也看看我。”','“下次花开的时候，还想和你一起。”']},
    {near:'你把椅子挪近一点。他笑着把菜单推到你们中间。',hand:'他的手放在桌沿，你碰了碰，他便摊开了掌心。',whisper:['“我没有在等可可变凉，我在等你看我。”','“今天的开心，有一大半都因为你。”']},
    {near:'肩膀轻轻挨上时，他把伞往你这边又偏了一点。',hand:'他很轻地握住你的手，问：“这样走，会不会好一点？”',whisper:['“雨再下久一点，好像也没什么不好。”','“你靠过来，我就不觉得冷了。”']},
    {near:'你靠近他。他低头笑了一下，随后安静地陪你看河面。',hand:'你把手递过去，他这次没有犹豫，温柔地握紧了。',whisper:['“别急着说再见，我还想多待一会儿。”','“我不是想看夜景，我是想多陪你一点。”']}
  ];
  return {chapters, moments};
});
