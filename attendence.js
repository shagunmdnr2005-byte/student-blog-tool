function calculateAttendence() {
    let total = 
    parseFloat(document.getElementById("total").value) || 0;
    let attended = 
    parseFloat(document.getElementById("attended").value) || 0;
    if(total === 0) {
        document.getElementById("result").innerText = "Enter total classes!";
        return;
    }
    let percent = (attended / total) * 100;
    document.getElementById("result").innerText =
    "your Attendence:"  + percent.toFixed(2) + "%";
} 