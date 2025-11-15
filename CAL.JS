let string="";
let buttons=document.querySelectorAll("button");
let button1=Array.from(buttons);
button1.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
             document.querySelector("input").value=string;

        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML == "%"){
            string = string + "/100";
            document.querySelector("input").value = string;
}
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
    })
})

