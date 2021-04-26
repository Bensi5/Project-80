
    
function getpara1(){
    var inputs =[];
    for(var i = 1; i <=6 ; i++){
        inputs.push(document.getElementById("paragraph1_" + i).value);
    }
    document.getElementById("showparagraph1").innerHTML = inputs.join(". ")
    
}

function getpara2(){
    var inputs =[];
    for(var i = 1; i <=6 ; i++){
        inputs.push(document.getElementById("paragraph2_" + i).value);
    }
    document.getElementById("showparagraph2").innerHTML = inputs.join(". ")
    
}
