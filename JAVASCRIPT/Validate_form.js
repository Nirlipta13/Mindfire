function submitValidate() {
    var fname = document.forms["registrationForm"]["fname"].value;
    var lname = document.forms["registrationForm"]["lname"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    var phoneNumber = document.forms["registrationForm"]["phoneNumber"].value;
    var address = document.forms["registrationForm"]["address"].value;
    var city = document.forms["registrationForm"]["city"].value;
    var state = document.getElementById("stateList").value;
    var country = document.getElementById("countryList").value;
    var select = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < select.length; i++) {
        if (select[i].checked) {
            gender = select[i].value;
        }

    }
    //Checking for empty input
    if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "" || gender === "" || phoneNumber === "" || address === "" || city === "" || state === "" || country === "") {
        alert("Fill the fields indicated with star mark");
        document.getElementById("submitButton").innerHTML = "";
    }


    //Email Validation
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!pattern.test(email) && email.length > 0) {
        alert("please provide a valid email");

    }

    //Phone number validation
    if (phoneNumber.length !== 10 && phoneNumber !== "") {
        alert("Enter valid 10-digit phone number");
        document.getElementById("submitButton").innerHTML = "";
    }

    //Password length Validation
    if (password.length < 6 && password !== "") {
        alert("Password must be atleast 6 characters");
        document.getElementById("submitButton").innerHTML = "";
    }

    //Password Match
    if (password !== confirmPassword) {
        alert("Password doesn't match. Re-type password correctly");
        document.getElementById("submitButton").innerHTML = "";
    }

}

function captchaGeneration() {
    var operatorArray = ["+", "-", "*", "/"];
    var num1 = document.getElementById("firstOperand");
    var num2 = document.getElementById("secondOperand");
    var operator = document.getElementById("operator");
    var no1 = Math.floor((Math.random() * 100) + 1);
    var no2 = Math.floor((Math.random() * 100) + 1);
    if (no1 > no2) {
        num1.innerHTML = no1;
        num2.innerHTML = no2;
    } else {
        num1.innerHTML = no2;
        num2.innerHTML = no1;
        no1 = no2;
        no2 = no1;
    }
    var opr = operatorArray[Math.floor(Math.random() * 4)];
    operator.innerHTML = opr;
    document.getElementById("userResult").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("submitButton").innerHTML = "";
}

function captchaVerification() {
    var no1 = Number(document.getElementById("firstOperand").textContent);
    var no2 = Number(document.getElementById("secondOperand").textContent);
    var opr = document.getElementById("operator").textContent;
    var expectedResult;
    switch (opr) {
        case '+':
            expectedResult = no1 + no2;
            break;
        case '-':
            expectedResult = no1 - no2;
            break;
        case '*':
            expectedResult = no1 * no2;
            break;
        case '/':
            expectedResult = Math.round(no1 / no2);
            break;
        default:
            alert("true");
    }
    var userResult = Number(document.getElementById("userResult").value);
    if (userResult === "") {
        alert("Fill the result");
    }
    if (userResult !== "" && expectedResult === userResult) {
        document.getElementById("result").innerHTML = "Hooray!! Its correct";
        var btn = document.createElement("button");
        btn.innerHTML = "SUBMIT";
        document.getElementById("submitButton").appendChild(btn);
        btn.addEventListener('click', submitButton);
    }
    if (userResult !== "" && expectedResult !== userResult) {
        document.getElementById("result").innerHTML = "Oops!! Try again";
    }
}