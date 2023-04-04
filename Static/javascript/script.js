function updateDateTime() {
    let date=new Date();
    document.getElementById("time").innerHTML=`${date.toLocaleTimeString().substring(0,4)} <span>${date.toLocaleTimeString().substring(date.toLocaleTimeString().length-2)}</span>`;
    document.getElementById('date').innerHTML=`${date.toLocaleString("en-US", { "weekday": "long" })}, ${date.getDay()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][date. getMonth()]} ${date.getFullYear()}`;
    let hour=date.getHours()
    let quote=``
    if (hour>=6 && hour<12) {
        quote='Morning';
    }
    else if(hour>=12 && hour<16){
        quote='Afternoon';
    }
    else if(hour>=16 && hour<22){
        quote='Afternoon';
    }else{
        quote='Night';
    }
    document.getElementById('quote').innerText=`Hello, Good ${quote}`;
}
updateDateTime()
setInterval(updateDateTime,1000);