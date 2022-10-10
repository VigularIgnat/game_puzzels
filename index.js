

var $=function(id){
    return document.getElementById(id);
}

var W=600, // Ширина конейнера
    H=400,//
    a=100; //сторона пазла
    pic="img/cap2.jpg";
    var blocks;

function init() {
    var col=Math.floor(W/a);
    var row=Math.floor(H/a);


    $("puzzle").style.width = col*a +"px";
    $("puzzle").style.height = row*a +"px";

    for(var r=0; r<row; r++){
        for(var c=0; c<col; c++){
            var block= document.createElement("div");

            var st= block.style;
            st.width=a+"px";
            st.height= a+"px";
            st.border="1px solid black";
            st.position="absolute";
            st.top= r*a +"px";
            st.left=c*a +"px";
            st.background="url(" +  pic +")";
            st.backgroundPosition= -c*a  +"px -" + r*a + "px";
            var g=90* Math.round(3*Math.random());
            block.setAttribute("g", g);
            st.transform="rotate("+ g + "deg)";

            block.onclick=function() {
                var g= 1*this.getAttribute("g");
                g+=90;
                if (g==360) g=0;
                this.setAttribute("g", g);
                this.style.transform="rotate("+ g + "deg)";

                var flag= true;
                
                for(let i=0; i<blocks.length; i++){
                    if( blocks[i].getAttribute("g")!="0"){
                        flag=false;
                        break;
                    }
                }
                if(flag){
                    alert("You win");
                    
                }
            }
            $("puzzle").append(block);
        }
        

    }
    var blocks=$("puzzle").getElementsByTagName("div");
}
    init();


