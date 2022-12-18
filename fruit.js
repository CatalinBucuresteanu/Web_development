var play=false;
var score;
var trials=3;
var step;
var action;
var list=["cherry","apple","grapes"];

$(function(){
    $("#resetgame").click(function(){
        if(play==true){
    location.reload();
        }
        else{
            play=true;
            score=0;
            $("#score").html("<div class=textcenter>Score:" +score+"</div>")
            $("#hearts").css("visibility","visible");
            for(i=0;i<trials;i++){
            $("#hearts").append("<div class=textcenter style=float:left;>X</div>");
            }
            $("#resetgame").html("<div class=textcenter>Reset Game</div>");
            start();
        }
    });

function addheart(){
    $("#hearts").empty();
    for(i=0;i<trials;i++){
        $("#hearts").append("<div class=textcenter style=float:left;>X</div>");
        }
}
function stopaction(){
    clearInterval(action);{
        clearInterval(action);
        $("#fruits").css("visibility","visible");;
    }
}
$("#fruits").mouseover(function(){
    score++;
    $("#score").html("<div class=textcenter>Score:" +score+"</div>")
    stopaction();
    start();
})
function start(){
    $("#fruits").css("visibility","visible");
    choosefruit();}
    function choosefruit(){
        let ran=Math.floor(Math.random() * 3);
        $("#fruits").attr('src','C:\\Users\\Fane\\Desktop\\images\\'+list[ran]+'.png');
        $("#fruits").css({'left':Math.floor(550*Math.random()),'top':-50});
        step=1+Math.floor(5*Math.random());
        action=setInterval(function(){
            $("#fruits").css('top',$("#fruits").position().top+step);
            if($("#fruits").position().top>$("#playsurface").height()){
                if(trials>1){
                    $("#fruits").css("visibility","visible");
                    choosefruit();
                    function choosefruit(){
                        let ran=Math.floor(Math.random() * 3);
                        $("#fruits").attr('src','C:\\Users\\Fane\\Desktop\\images\\'+list[ran]+'.png');
                        $("#fruits").css({'left':Math.floor(550*Math.random()),'top':-50});
                        step=1+Math.floor(5*Math.random());
                }
                trials--;
            addheart();
            }   else{
                location.reload()
            } }
          
        },10);
    } })