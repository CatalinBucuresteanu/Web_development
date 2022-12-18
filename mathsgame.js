var start=document.getElementById("start");
var container=document.getElementById("container");
var scor=document.getElementById("score");
var control=0,contor=1,corect,wrong,raspuns;
var numar1,numar2,raspunsuri=[];
var equation=document.getElementById("text");
corect=document.getElementById("right");
wrong=document.getElementById("wrong");
function startgame(){
    start.style.display="none";
    container.style.display="block";
    playing=true;
}
function change(){
      
    contor++;
let location,k,ran,aux;
numar1=Math.floor(Math.random()*10);
numar2=Math.floor(Math.random()*10);
equation.innerHTML=numar1+"x"+numar2;
raspunsuri.push(numar1*numar2);
for(let i=0;i<3;i++){
    raspuns=Math.floor(Math.random()*100);
raspunsuri.push(raspuns);
}
for(let i=0;i<=3;i++){
    for(let j=i+1;j<=3;j++){
           if(raspunsuri[i]==raspunsuri[j]){
            raspunsuri[j]++;
           }
    }
}
ran=Math.floor(Math.random() * 4);
aux=raspunsuri[ran];
raspunsuri[ran]=raspunsuri[0];
raspunsuri[0]=aux;
for(let i=0;i<=3;i++){
    k=i;
    String(k);
    location=document.getElementById(k);
    location.innerHTML=raspunsuri[i];
    }

    raspunsuri.length=0;
    raspuns=numar1*numar2;
}
 
function score(btn){
    let result=document.getElementById(btn.id).textContent;
    result=parseInt(result);
   if(result==raspuns){
    corect.style.display="block"
    setTimeout(function(){corect.style.display="none"},1000);
    contor++;
    scor.style.textAlign="center";

    scor.innerHTML= "<div class=text_inside_coloured_shapes> Scor:"+contor+"</div>";
 
   }
   else{
    wrong.style.visibility="visible"
    setTimeout(function(){wrong.style.visibility="hidden"},1000);
    control++;
   }
   if(control==3){
     location.reload();
   }
}


