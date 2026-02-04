function calculateCGPA() {
    let s1 = 
parseFloat(document.getElementById("sgpa1").value) || 0;
let s2 = 
parseFloat(document.getElementById("sgpa2").value) || 0;
let s3 =
parseFloat(document.getElementById("sgpa3").value) || 0;
let s4 =
parseFloat(document.getElementById("sgpa4").value) || 0;
let total = s1 + s2 + s3 + s4;
let cgpa = total / 4;
document.getElementById("result").innerText =
"your CGPA is: " + cgpa.toFixed(2);
}