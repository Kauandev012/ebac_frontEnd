AOS.init();const e=new Date("nov 18, 2024 18:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime(),o=Math.floor(n/864e5),a=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),l=Math.floor((6e4&n)/1e3);document.getElementById("TimerEvent").innerHTML=`${o}d ${a}h ${r}m ${l}s`,n<0&&(clearInterval(t),document.getElementById("TimerEvent").innerHTML="Opss a festa ja rolou!")},1e3);
//# sourceMappingURL=index.e235a1df.js.map