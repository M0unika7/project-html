function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);





function settime(){

    var a=document.getElementById('wakeup_time').value;
    var b= document.getElementById("lunch_time").value;
    var c= document.getElementById("nap_time").value;
    var d=documnet.getElementById("night_time").value;
    var hr = new Date().getHours();

    if(a==hr){

        document.getElementById('girl').src="./assessments/girl.svg";
        document.getElementById('container5').innerText='Grab Some Healthy Breakfast !!';
        document.getElementById("container6").innerText="Good Morning !! Wake up!!";
    }

    if(b==hr){
        document.getElementById("girl").src="./assessments/lun.svg";
        document.getElementById("container5").innerText="Let's Have Some Lunch !!";
        document.getElementById("container6").innerText="Good Afternoon !!";
    }

    if(c==hr){
        document.getElementById("girl").src="./assessments/eve.zip";
        document.getElementById("container5").innerText="Get Some Tea !!";
        document.getElementById("container6").innerText="Good Evening !!";
    }    
    if(d==hr){
        document.getElementById("girl").img.src="./assessments/ngt.svg";
        document.getElementById("container5").innerText="Go To Sleep !!";
        document.getElementById("container6").innerText="Good Night !!";
    }    
    
    function wakeup(){
        let afterW=parseInt(wake)+1;
        if(wake<12){
           if(wake<11)
            return wake+"AM - "+afterW+"AM"
           else return wake+"AM - "+afterW+"PM" 
        }
        else{
           afterW=afterW-12;
           wake=wake-12;
           if(wake<11)
           return wake+"PM - "+afterW+"PM";
           else return wake+"PM - "+afterW+"AM";
        }
     }
  
     function lunchup(){
        let afterL=parseInt(lunch)+1;
        if(lunch<12){
           if(lunch<11)
            return lunch+"AM - "+afterL+"AM"
           else return lunch+"AM - "+afterL+"PM" 
        }
        else{
           afterL=afterL-12;
           lunch=lunch-12;
           if(lunch<11)
           return lunch+"PM - "+afterL+"PM";
           else return lunch+"PM - "+afterL+"AM";
        }
     }
  
     function napup(){
        let afterN=parseInt(nap)+1;
        if(nap<12){
           if(nap<11)
            return nap+"AM - "+afterN+"AM";
           else return nap+"AM - "+afterN+"PM"; 
        }
        else{
           afterN=afterN-12;
           nap=nap-12;
           if(nap<11)
           return nap+"PM - "+afterN+"PM";
           else return nap+"PM - "+afterN+"AM";
        }
     }
  
     function nightup(){
        let afternT=parseInt(night)+1;
        if(night<12){
           if(night<11)
            return night+"AM - "+afternT+"AM"
           else return night+"AM - "+afternT+"PM" 
        }
        else{
           afternT=afternT-12;
           night=night-12;
           if(night<11)
           return night+"PM - "+afternT+"PM";
           else return night+"PM - "+afternT+"AM";
        }
     }
     document.getElementById("wake").innerText=wakeup();
     document.getElementById("noon").innerText=lunchup();
     document.getElementById("nap").innerText=napup();
     document.getElementById("night").innerText=nightup();
  





}