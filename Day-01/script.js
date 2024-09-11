//declare  index  vari
let index = 0;
//declare fn to change color
function changeBackground()
{
    //color array
    let colors = ["#494E6B", "#a08f68", "#38764a" , "#f5822f", "	#2a4693", "	#513c59", "	#c82028", "	#6fc2db"];


    if ( index < colors.length - 1 ) 
    {
        //change color
        document.getElementsByTagName("section")[0].style.background = colors[index];
        index++;
    }
    else
    {
        index = 0;
    }

}