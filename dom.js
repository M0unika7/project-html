function forid(){
   var result=document.getElementById("a").innerText="HI";
}
function fortag(){
    let result=document.getElementsByTagName("h1");
    result[0].innerText="HI";
}
function forclass(){
    let result=document.getElementsByClassName("c");
    result[0].innerText="HI";
}
function changeheading(){
   let result=document.getElementById("d").innerText="Hello World";
}
function box(){
    document.getElementById("e").style.flexDirection="column";
}
function heading(){
    document.getElementById("f").style.color="red";
}
function replacecontent(){
    let result=document.getElementById("g").innerText="Welcome to Elevation academy";
 }
function getOption(){
    var result=document.getElementById("h");
    var result2=result.value
    document.getElementById("i").innerText=result2;
}