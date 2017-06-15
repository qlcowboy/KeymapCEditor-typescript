require("./App.scss");
import * as React from "react";
import { Keyboard } from "./Components/Keyboard";

const ergodoxKeyboardLayout = [
[{x:23,a:7,d:true},""],
[{y:-0.62,x:1.25,c:"#857eb1",a:4,f:6},"\n<img src='http://i.imgur.com/QtgaNKa.png' width='20'>",{c:"#b81b24",a:5,f:5,f2:3},"<img src=\"http://i.imgur.com/NSggfPa.png\" width=\"15\">\n ","<img src=\"http://i.imgur.com/NSggfPa.png\" width=\"15\">\n",{x:0.75,c:"#d9dae0",a:4,f:3},"\nF1 ","\nF2","\nF3","\nF4",{x:1},"\nF5","\nF6","\nF7","\nF8",{x:1},"\nF9","\nF10","\nF11","\nF12",{x:0.75,c:"#857eb1",t:"#000000\n\n\n\n\n\n\n#0000ff",f:5},"\n⎙\n\n\n\n\n\n",{c:"#c4c8c5",t:"#000000",f:3,f2:6},"\n<i class=\"fa fa-lock\"></i>⇳",{c:"#857eb1",t:"#000000\n\n\n\n\n\n\n#0000ff",fa:[0,0,6,6,6,6,6,6]},"\n\n\n\n\n\n\n"],
[{y:0.07,x:10,c:"#cccccc",t:"#B22222",a:5,d:true},"<i class=\"fa fa-circle\"></i>\n\n\n\n\n\n<img src=\"http://i.imgur.com/nUkQS0u.png\" width=\"15\">"],
[{y:-0.97,x:11,c:"#d9dae0",t:"#32CD32\n\n\n\n\n\n#fdd017",d:true},"<i class=\"fa fa-circle\"></i>\n\n\n\n\n\n<i class=\"fa fa-lock\"></i>",{t:"#ffffff\n\n\n\n\n\n#fdd017",fa:[0,0,6,6,6,6,4],d:true},"<i class=\"fa fa-circle\"></i>\n\n\n\n\n\n⇳",{t:"#0000CD\n\n\n\n\n\n#fdd017",d:true},"<i class=\"fa fa-circle\"></i>\n\n\n\n\n\n▮"],
[{y:-0.35,x:9.5,c:"#c7c3b4",t:"#000000",a:4,f2:5},"\n[",{c:"#95bfe8"},"\n7","\n8","\n9",{c:"#c7c3b4"},"\n]"],
[{x:9.5},"\n(",{c:"#95bfe8"},"\n4",{n:true},"\n5","\n6",{c:"#c7c3b4"},"\n)"],
[{x:9.5},"\n{",{c:"#95bfe8"},"\n1","\n2","\n3",{c:"#c7c3b4"},"\n}"],
[{x:9.5},"\n<",{c:"#95bfe8",t:"#7f007f\n#000",f:2,f2:3},"<i class=\"fa fa-volume-off\"></i>\n0","\n00","\n000",{c:"#c7c3b4",t:"#000000",f2:5},"\n>"],
[{x:9.5,c:"#95bfe8",t:"#7f007f\n#000\n\n\n#f00\n#f00",a:0,f:3,f2:5},"<i class=\"fa fa-volume-down\"></i>\n-\n\n\n-\n_",{t:"#7f007f\n#000",a:4},"<i class=\"fa fa-volume-up\"></i>\n+",{f:2,f2:5},"\n=","\n*","\n/"],
[{y:0.25,x:9.5,c:"#c4c8c5",t:"#000000"},"\n⇞","\n↶",{f2:4},"\n<i class=\"fa fa-file-o\"></i>",{f2:5},"\n↷",{f:3},"\n⌦"],
[{y:0,x:9.5,f2:5},"\n⇟","\n","\n","\n",{f:5},"\n⌶ ▮"],
[{x:9.5,a:7,w:5,h:0.5,d:true},""],
[{y:0.92,x:10.75,c:"#cccccc",a:4,f:3,d:true},"<img src='http://i.imgur.com/Xfg6T0f.png' width='100'>"],
[{r:15,y:-11.45,x:3,c:"#c7c3b4",f2:5},"0\n`"],
[{y:-1,x:4},"1\n!","2\n@",{t:"#000000\n\n\n\n\n\n\n#0000ff"},"3\n#\n\n\n\n\n\n₤","4\n$\n\n\n\n\n\n¥","5\n%\n\n\n\n\n\n€"],
[{x:2.5,c:"#c4c8c5",t:"#000000",f:3,w:1.5},"⌫\n⌦",{c:"#e5dbca",t:"#000000\n\n\n\n#f00",a:0,fa:[0,0,5,5,5]},"Q\nq\n\n\nQ","D\nd\n\n\nW","R\nr\n\n\nE","W\nw\n\n\nR","B\nb\n\n\nT",{c:"#c7c3b4",t:"#000000",a:4,f2:5},"\n'"],
[{x:2.5,c:"#c4c8c5",f:9,w:1.5},"←\n→",{c:"#e5dbca",t:"#000000\n\n\n\n#f00\n\n\n#0000ff",a:0,f:3},"A\na\n\n\nA\n\n\n<i class=\"fa fa-file-o\"></i>",{t:"#000000\n\n\n\n#f00"},"S\ns\n\n\nS","H\nh\n\n\nD",{n:true},"T\nt\n\n\nF","G\ng\n\n\nG",{c:"#c7c3b4",t:"#000000",a:4,f2:9},"\n,"],
[{x:2.5,c:"#c4c8c5",f2:6,w:1.5},"<i class=\"fa fa-lock\"></i> <i class=\"fa fa-unlock\"></i>\n⇧",{c:"#e5dbca",t:"#000000\n\n#0000ff\n\n#f00\n\n\n#0000ff",a:0,fa:[0,0,0,6,6]},"Z\nz\n↷\n\nZ\n\n\n↶",{t:"#000000\n\n\n\n#f00\n\n\n#0000ff"},"X\nx\n\n\nX\n\n\n",{t:"#000000\n\n\n\n#f00"},"M\nm\n\n\nC",{t:"#000000\n\n\n\n#f00\n\n\n#0000ff"},"C\nc\n\n\nV\n\n\n","V\nv\n\n\nB\n\n\n",{c:"#00833e",t:"#00000",a:4,f2:9,h:2},"\n⏎"],
[{x:2.5,c:"#c4c8c5",t:"#000000\n#0000ff",w:1.5},"\n⎈",{c:"#857eb1",t:"#000000",f2:5},"\n",{c:"#45b866"},"\n⇱",{c:"#857eb1",f:5,w:1.5},"☰\n",{c:"#c4c8c5",f:3,f2:7,w:1.5},"\n⎇"],
[{x:4,c:"#45b866",f2:5},"\n⇤","\n⇲","\n⇥",{x:0.25,c:"#e5dbca",a:7,w:2.75},""],
[{r:-15,y:0.18,x:14.15,c:"#c7c3b4",a:4},"6\n^","7\n&",{t:"#000000\n\n\n\n\n\n\n#0000ff"},"8\n\\\n\n\n\n\n\nɃ",{t:"#000000"},"9\n_","0\n~",{c:"#857eb1"},"\nf(x)"],
[{y:0,x:13.15,c:"#c7c3b4"},"\n\"",{c:"#e5dbca",t:"#000000\n\n\n\n#f00",a:0,fa:[0,0,5,5,5]},"J\nj\n\n\nY","F\nf\n\n\nU","U\nu\n\n\nI","P\np\n\n\nO",{c:"#c7c3b4"},"\n|\n\n\nP",{c:"#c4c8c5",t:"#000000",a:4,w:1.5},"⌦\n⌫"],
[{x:13.15,c:"#c7c3b4",f2:9},"\n.",{c:"#e5dbca",t:"#000000\n\n\n\n#f00",a:0,fa:[0,0,9,9,9]},"Y\ny\n\n\nH",{n:true},"N\nn\n\n\nJ","E\ne\n\n\nK","O\no\n\n\nL",{t:"#000000\n\n\n\n#f00\n#f00",fa:[0,0,9,9,9,9]},"I\ni\n\n\n;\n:",{c:"#c4c8c5",t:"#000000",a:4,f:9,w:1.5},"→\n←"],
[{x:13.15,c:"#00833e",f:5,f2:9,h:2},"\n⏎",{c:"#e5dbca",t:"#000000\n\n\n\n#f00",a:0,f:3},"K\nk\n\n\nN","L\nl\n\n\nM",{c:"#c7c3b4",t:"#000000\n\n\n\n#f00\n#f00",fa:[0,5,0,0,5,5]},"\n:\n\n\n,\n<","\n?\n\n\n.\n>","\n;\n\n\n/\n?",{c:"#c4c8c5",t:"#000000",a:4,f2:6,w:1.5},"<i class=\"fa fa-lock\"></i> <i class=\"fa fa-unlock\"></i>\n⇧"],
[{x:14.15,c:"#909596",f2:7,w:1.5},"\n⎇",{c:"#857eb1",f:5,w:1.5},"☰\n",{c:"#45b866",f:3,f2:6},"\n↑",{c:"#857eb1",f2:5},"\n",{c:"#c4c8c5",t:"#000000\n#0000ff",f2:9,w:1.5},"\n⎈"],
[{x:13.13,c:"#e5dbca",t:"#000000",a:7,w:2.75},"",{x:0.27,c:"#45b866",a:4,f2:6},"\n←","\n↓","\n→"]

];

const ansi104 = [
    ["Esc",{x:1},"F1","F2","F3","F4",{x:0.5},"F5","F6","F7","F8",{x:0.5},"F9","F10","F11","F12",{x:0.25},"PrtSc","Scroll Lock","Pause\nBreak"],
    [{y:0.5},"~\n`","!\n1","@\n2","#\n3","$\n4","%\n5","^\n6","&\n7","*\n8","(\n9",")\n0","_\n-","+\n=","|\n\\","Back Space",{x:0.25},"Insert","Home","PgUp",{x:0.25},"Num Lock","/","*","-"],
    [{w:1.5},"Tab","Q","W","E","R","T","Y","U","I","O","P","{\n[","}\n]",{w:1.5,h:2,w2:2.25,h2:1,x2:-0.75,y2:1},"Enter",{x:0.25},"Delete","End","PgDn",{x:0.25},"7\nHome","8\n↑","9\nPgUp",{h:2},"+"],
    [{w:1.75},"Caps Lock","A","S","D","F","G","H","J","K","L",":\n;","\"\n'",{x:5.75},"4\n←","5","6\n→"],
    [{w:2.25},"Shift","Z","X","C","V","B","N","M","<\n,",">\n.","?\n/",{w:2.75},"Shift",{x:1.25},"↑",{x:1.25},"1\nEnd","2\n↓","3\nPgDn",{h:2},"Enter"],
    [{w:1.25},"Ctrl",{w:1.25},"Win",{w:1.25},"Alt",{a:7,w:6.25},"",{a:4,w:1.25},"Alt",{w:1.25},"Win",{w:1.25},"Menu",{w:1.25},"Ctrl",{x:0.25},"←","↓","→",{x:0.25,w:2},"0\nIns",".\nDel"]
];

export const App = () => <div>
    <Keyboard layout={ergodoxKeyboardLayout} />
    <Keyboard layout={ansi104} />
</div>;