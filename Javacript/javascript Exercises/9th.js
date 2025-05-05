// traffic light system
var light = prompt("Enter the color of the traffic light");
if(light == 'red'  || light == 'Red' || light == 'RED'){
    console.log("Stop");
}
else if(light == 'green' || light == 'Green' || light == 'GREEN'){
    console.log("Go");
    
}
else if(light == 'yellow' || light == 'Yellow' || light == 'YELLOW'){
    console.log("Get ready");
}
else{
    console.log("Enter the valid color");
}