function mag() {
    card1 = new Array();
    card2 = new Array();
    card3 = new Array();

    var c1 = new Array(0);
    var c2 = new Array(0);
    var c3 = new Array(0);

    card1[c1++] = ['思想の自由に基づき',1,7,0];
    card1[c1++] = ['公共の福祉に反しない限り',2,4,5];
    card1[c1++] = ['教育の義務を',6,0,2];
    card1[c1++] = ['自由意志に基づいて',3,5,4];
    card1[c1++] = ['その総意により',4,1,0];
    card1[c1++] = ['別に定める場合を除き',4,9,2];
    card1[c1++] = ['その象徴として',2,3,4];
    card1[c1++] = ['国際的地位に基づき',4,0,0];
    card1[c1++] = ['個人を尊重され',3,3,3];
    card1[c1++] = ['南極条約に基づき',1,3,9];
    card1[c1++] = ['生命の危機において',2,0,0];
    card1[c1++] = ['考えられうるすべての状況で',2,'-8',8];

    card2[c2++] = ['投票に関する一切の権利は',5,5,3];
    card2[c2++] = ['表現の自由においては',1,0,9];
    card2[c2++] = ['互いに尊重され',3,4,2];
    card2[c2++] = ['一切の武力行使は',2,4,1];
    card2[c2++] = ['人権については',7,1,9];
    card2[c2++] = ['情報の開示は',2,1,3];
    card2[c2++] = ['基本的人権は',9,2,3];
    card2[c2++] = ['参政権については',0,2,0];
    card2[c2++] = ['いかなる場合においても',0,1,4];
    card2[c2++] = ['首長たる議員は',3,9,0];
    card2[c2++] = ['機能しない場合は',4,0,2];
    card2[c2++] = ['個人的な紛争が怒りうる場合は','-4',0,8];

    card3[c3++] = ['有する',3,1,9];
    card3[c3++] = ['これを認める',4,4,1];
    card3[c3++] = ['公共の福祉として有する',3,2,7];
    card3[c3++] = ['これを認めない',3,6,2];
    card3[c3++] = ['絶対的権利を有する',8,0,1];
    card3[c3++] = ['合意に基づいて定める',3,3,6];
    card3[c3++] = ['制限されうる',4,1,0];
    card3[c3++] = ['過半数の賛成を必要とする',0,1,0];
    card3[c3++] = ['これは認めない',6,1,1];
    card3[c3++] = ['三分の二の決議をもって認められる',3,3,2];
    card3[c3++] = ['無視する',9,1,0];
    card3[c3++] = ['すべてに優先する',3,1,'-9'];

    var ic1 = Math.floor(card1.length * Math.random());
    var ic2 = Math.floor(card2.length * Math.random());
    var ic3 = Math.floor(card3.length * Math.random());

    num1 = Number(card1[ic1][1]) + Number(card2[ic2][1]) + Number(card3[ic3][1]);
    num2 = Number(card1[ic1][2]) + Number(card2[ic2][2]) + Number(card3[ic3][2]);
    num3 = Number(card1[ic1][3]) + Number(card2[ic2][3]) + Number(card3[ic3][3]);

    document.myform.magna.value = card1[ic1][0] + card2[ic2][0]  + card3[ic3][0] + ',' + num1 + ',' + num2 + ',' + num3;
}