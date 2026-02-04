
alert("JS connected");
function convertToCGPA() {
    let percent=
    parseFloat(document.getElementById("percentage").value);
    if (isNaN(percent)) {
        document.getElementById("result").innerText=
        "please enter Percentage";
        return;
    }
    let cgpa = percent / 10;
    document.getElementById("result").innerText=
    "your CgPA is: " + cgpa.toFixed(2);
    }

