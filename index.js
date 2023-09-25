let input = $("#inputBox");
let buttons = $("button");
let keyButton = $(document);
let result ="";

let arr=buttons.toArray();




for(let i=0;i< arr.length;i++){
    let button = $(arr[i]);

    button.on("click",buttonText);
    
}

keyButton.on("keypress",keyText);

function buttonText(){

    let buttonText = $(this).text();
    calWork(buttonText);
}

function keyText(event){
    let keyPressed = event.key;
    calWork(keyPressed);
}

function calWork(buttonText){
    if(buttonText==="="||buttonText==="Enter"){
        result = eval(result);
        input.val(result);
    }
    else if(buttonText=== "AC"||buttonText==="c"){
        result = "";
        input.val(result);
    }
    else if(buttonText==="DEL"||buttonText==="d"){
        result= result.slice(0,result.length-1);
        input.val(result);
    }
    else{
        result=result+buttonText;
        input.val(result);
    }

    updateButton();
}

function updateButton(){
    let screenWidth = $(window).width();

    if(screenWidth<=370){
        $("button:contains('AC')").text("A");
        $("button:contains('DEL')").text("D");
    }
    else{
        $("button:contains('A')").text("AC");
        $("button:contains('D')").text("DEL");
    }
}

updateButton();

$(window).on("resize",updateButton);