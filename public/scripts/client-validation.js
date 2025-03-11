document.getElementById('workout-form').onsubmit = validate;

function validate() {
    clearErrors();
    console.log("Running validation...");
    let isValid = true;

    let duration = document.getElementById('duration').value.trim();
    
    let isNumber = /^\d+$/;
    if (duration === "" ||
        !isNumber.test(duration)) {
        document.getElementById('err-duration').style.visibility = "visible";
        isValid = false;
    }

    let intensityButtons = document.getElementsByName('intensity');
    let count = 0;
    for(let i=0; i < intensityButtons.length; i++) {
        if(intensityButtons[i].checked) {
            count++;
        }
    }
    if (count === 0) { 
        document.getElementById('err-intensity').style.visibility = "visible";
        isValid = false;
    }

    let date = document.getElementById('date').value.trim();
    if (date === "") {
        document.getElementById('err-date').style.visibility = "visible";
        isValid = false
    }
    console.log(isValid);
    return isValid;
}

function clearErrors() {
    console.log("clearing errors...")
    let errors = document.getElementsByClassName('err');
    for(let i = 0; i < errors.length; i++) {
        errors[i].style.visibility = "hidden";
    }
}
