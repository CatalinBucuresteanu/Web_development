
var text=document.getElementById("centrat");
var lista=document.getElementById("lista");
var contor=0;
function adauga(){
var nod=document.createElement("li");
var buton=document.createElement("button");
 nod.append(text.value);
 buton.append("sterge");
 lista.appendChild(buton);
lista.appendChild(nod);
nod.setAttribute("id",contor);
buton.setAttribute("class",contor);
buton.style.position="relative";
buton.style.left="150px"
var clasa,elimina;
buton.onclick = function() { 
    clasa=this.className;
    this.remove();
    elimina=document.getElementById(clasa);
    elimina.remove();
};
contor++;
} 




