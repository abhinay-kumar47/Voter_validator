
function eligibleforvote() {

    const dobinput=document.getElementById('usrdob');
    const dob=dobinput.value;

    const usrdob = new Date(dob);
    const ecidob = new Date("2006-01-01");

    if (usrdob<=ecidob) {
        //alert("Yes you are eligible.")
        document.getElementById("result").innerHTML="YES! You are Eligible to Vote for LOK SABHA Election 2024.";
    }

    else{
        //alert("No you are not eligible.")
        document.getElementById("result").innerHTML="NO! You are not eligible to Vote for LOK SABHA Election 2024.";
    }
} 
