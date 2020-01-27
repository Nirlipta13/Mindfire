function submitValidate() {
    var fname = document.getElementById("txtFname");
    var lname = document.getElementById("txtLname");
    var email = document.getElementById("txtEmail");
    var password = document.getElementById("txtPassword");
    var confirmPassword = document.getElementById("txtConfirmPassword");
    var phoneNumber = document.getElementById("txtPhoneNumber");
    var altPhoneNumber = document.getElementById("txtAlternatePhoneNumber");
    var address = document.getElementById("txtAddress");
    var city = document.getElementById("txtCity");
    var state = document.getElementById("stateList");
    var country = document.getElementById("countryList");
    var gender = document.querySelector('input[name="gender"]:checked');


    if (fname.value !== "") {
        fname.style.borderColor = "black";
        fname.style.borderWidth = "1px";
        fname.style.color = "black";
        document.getElementById("errorFname").innerHTML = "";

    }
    if (lname.value !== "") {
        lname.style.borderColor = "black";
        lname.style.borderWidth = "1px";
        lname.style.color = "black";
        document.getElementById("errorLname").innerHTML = "";

    }
    if (email.value !== "") {
        email.style.borderColor = "black";
        email.style.borderWidth = "1px";
        email.style.color = "black";
        document.getElementById("errorEmail").innerHTML = "";

    }
    if (password.value !== "") {
        password.style.borderColor = "black";
        password.style.borderWidth = "1px";
        password.style.color = "black";
        document.getElementById("errorPassword").innerHTML = "";

    }

    if (confirmPassword.value !== "") {
        confirmPassword.style.borderColor = "black";
        confirmPassword.style.borderWidth = "1px";
        confirmPassword.style.color = "black";
        document.getElementById("errorConfirmPassword").innerHTML = "";
    }

    if (gender !== "") {
        document.getElementById("errorGender").innerHTML = "";

    }

    if (phoneNumber.value !== "") {
        phoneNumber.style.borderColor = "black";
        phoneNumber.style.borderWidth = "1px";
        phoneNumber.style.color = "black";
        document.getElementById("errorPhoneNumber").innerHTML = "";
    }
    if (altPhoneNumber.value !== "") {
        document.getElementById("errorAlternatePhoneNumber").innerHTML = "";

    }
    if (address.value !== "") {
        address.style.borderColor = "black";
        address.style.borderWidth = "1px";
        address.style.color = "black";
        document.getElementById("errorAddress").innerHTML = "";

    }
    if (city.value !== "") {
        city.style.borderColor = "black";
        city.style.borderWidth = "1px";
        city.style.color = "black";
        document.getElementById("errorCity").innerHTML = "";

    }
    if (state.value !== "") {
        state.style.borderColor = "black";
        state.style.borderWidth = "1px";
        state.style.color = "black";
        document.getElementById("errorState").innerHTML = "";

    }
    if (country.value !== "") {
        country.style.borderColor = "black";
        country.style.borderWidth = "1px";
        country.style.color = "black";
        document.getElementById("errorCountry").innerHTML = "";

    }

    //Checking for empty input
    var letters = /^[A-Za-z]+$/;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var numbers = /^[0-9]+$/;

    if (fname.value.trim() === "" || !fname.value.match(letters)) {
        document.getElementById("submitButton").innerHTML = "";
        fname.style.borderColor = "red";
        fname.style.borderWidth = "3px";
        fname.style.color = "black";
        document.getElementById("errorFname").innerHTML = "Provide your first name";
        fname.value = "";
    }

    if (lname.value.trim() === "" || !lname.value.match(letters)) {
        document.getElementById("submitButton").innerHTML = "";
        lname.style.borderColor = "red";
        lname.style.borderWidth = "3px";
        lname.style.color = "black";
        document.getElementById("errorLname").innerHTML = "Provide your last name";
        lname.value = "";
    }
    if (email.value.trim() === "" || (!pattern.test(email.value) && email.value.length > 0)) {
        document.getElementById("submitButton").innerHTML = "";
        email.style.borderColor = "red";
        email.style.borderWidth = "3px";
        email.style.color = "black";
        document.getElementById("errorEmail").innerHTML = "Provide a valid email";
        email.value = "";
    }
    if (password.value.trim() === "") {
        document.getElementById("submitButton").innerHTML = "";
        password.style.borderColor = "red";
        password.style.borderWidth = "3px";
        password.style.color = "black";
        document.getElementById("errorPassword").innerHTML = "Password must be atleast length six";
        password.value = "";
    }

    if (gender == null) {
        document.getElementById("submitButton").innerHTML = "";
        document.getElementById("errorGender").innerHTML = "Select your Gender";
    }

    if (phoneNumber.value.trim() === "" || (phoneNumber.value.length !== 10 && phoneNumber.value !== "") || (!phoneNumber.value.match(numbers))) {
        document.getElementById("submitButton").innerHTML = "";
        phoneNumber.style.borderColor = "red";
        phoneNumber.style.borderWidth = "3px";
        phoneNumber.style.color = "black";
        document.getElementById("errorPhoneNumber").innerHTML = "Provide a valid phone number";
        phoneNumber.value = "";
    }
    if (address.value.trim() === "") {
        document.getElementById("submitButton").innerHTML = "";
        address.style.borderColor = "red";
        address.style.borderWidth = "3px";
        address.style.color = "black";
        document.getElementById("errorAddress").innerHTML = "Provide a valid address";
        address.value = "";

    }
    if (city.value.trim() === "" || !city.value.match(letters)) {
        document.getElementById("submitButton").innerHTML = "";
        city.style.borderColor = "red";
        city.style.borderWidth = "3px";
        city.style.color = "black";
        document.getElementById("errorCity").innerHTML = "Provide yuor city";
        city.value = "";

    }
    if (state.value.trim() === "") {
        var idState = document.getElementById("stateList");
        document.getElementById("submitButton").innerHTML = "";
        state.style.borderColor = "red";
        state.style.borderWidth = "3px";
        state.style.color = "black";
        document.getElementById("errorState").innerHTML = "Select your city";
    }
    if (country.value.trim() === "") {
        var idCountry = document.getElementById("countryList");
        document.getElementById("submitButton").innerHTML = "";
        country.style.borderColor = "red";
        country.style.borderWidth = "3px";
        country.style.color = "black";
        document.getElementById("errorCountry").innerHTML = "Select your country";
    }


    if ((altPhoneNumber.value.length !== 10 && altPhoneNumber.value !== "") || (!altPhoneNumber.value.match(numbers))) {
        document.getElementById("submitButton").innerHTML = "";
        document.getElementById("errorAlternatePhoneNumber").innerHTML = "Provide a valid phone number";
        altPhoneNumber.value = "";
    }

    //Password length Validation
    if (password.value.length < 6 && password.value !== "") {
        document.getElementById("submitButton").innerHTML = "";
        document.getElementById("errorPassword").innerHTML = "Password must be atleast length six";
        password.value = "";
    }

    //Password Match
    if (password.value !== confirmPassword.value) {
        document.getElementById("submitButton").innerHTML = "";
        document.getElementById("errorConfirmPassword").innerHTML = "Retype Password Properly";
        confirmPassword.value = "";
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
    //document.getElementById("result").innerHTML = "";
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

    if (document.getElementById("userResult").value === 0) {
        document.getElementById("result").innerHTML = "Fill the captcha";
    }

    if (userResult !== "" && expectedResult === userResult) {
        document.getElementById("result").innerHTML = "Hooray!! Its correct";
        var btn = document.createElement("button");
        btn.innerHTML = "SUBMIT";
        document.getElementById("submitButton").appendChild(btn);
        btn.addEventListener('click', submitValidate);
        document.getElementById("refreshButton").disabled = true;
    }
    if (userResult !== "" && expectedResult !== userResult) {
        document.getElementById("result").innerHTML = "Oops!! Try again";
        captchaGeneration();
    }
}