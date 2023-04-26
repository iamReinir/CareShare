function showReg(){
    let logForm = document.getElementById("pills-login");
    logForm.classList.remove("active");
    logForm.classList.remove("show");
    let regForm = document.getElementById("pills-register");
    regForm.classList.add("active");
    regForm.classList.add("show");
}

function showLog(){
    let regForm = document.getElementById("pills-register");
    regForm.classList.remove("active");
    regForm.classList.remove("show");
    let logForm = document.getElementById("pills-login");
    logForm.classList.add("active");
    logForm.classList.add("show");
}