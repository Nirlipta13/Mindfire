$(document).ready(function() {
    $("#verifyButton").click(function() {
        captchaGenerate();
        $(".para-for-captcha").show();
        $("#userResult").removeAttr('disabled');

    });
    $("#refreshCaptcha").click(function() {
        captchaGenerate();
        $(".para-for-captcha").show();
    });

    $("#checkCaptcha").click(function() {
        captchaVerify();

    });

    $("#submitButton").click(function() {
        submitValidate();
        $("#userResult").removeAttr('disabled');


    });
    $("#txtCountry").click(function() {
        listState();
    });

});

function captchaGenerate() {
    var operatorArray = ["+", "-", "*", "/"];
    var num1 = document.getElementById("firstOperand");
    var num2 = document.getElementById("secondOperand");
    var operator = document.getElementById("operator");
    var no1 = Math.floor((Math.random() * 100) + 1);
    var no2 = Math.floor((Math.random() * 100) + 1);
    if (no1 > no2) {
        $("#firstOperand").text(no1);
        $("#secondOperand").text(no2);
    } else {
        $("#firstOperand").text(no2);
        $("#secondOperand").text(no1);
    }
    var opr = operatorArray[Math.floor(Math.random() * 4)];
    $("#operator").text(opr);

    $(".captchaButton").show();
    $("#userResult").val("");
}

function captchaVerify() {
    var firstOperand = Number($("#firstOperand").text());
    var secondOperand = Number($("#secondOperand").text());
    var operator = $("#operator").text();
    var expectedResult;
    switch (operator) {
        case '+':
            expectedResult = firstOperand + secondOperand;
            break;
        case '-':
            expectedResult = firstOperand - secondOperand;
            break;
        case '*':
            expectedResult = firstOperand * secondOperand;
            break;
        case '/':
            expectedResult = Math.round(firstOperand / secondOperand);
            break;
        default:
            alert("true");
    }
    var userResult = Number($("#userResult").val());
    if (userResult === 0) {
        $("#captchaResult").text("Fill the captcha");
        captchaGenerate();
    }

    if (userResult !== "" && expectedResult === userResult) {
        $("#captchaResult").text("Hooray!! Its Correct");
        $(".captchaButton").hide();
        $("#userResult").attr('disabled', 'disabled');
        $("#submitButton").show();
    }
    if (userResult !== 0 && expectedResult !== userResult) {
        $("#captchaResult").text("Oops!! Try Again");
        captchaGenerate();
        $("#userResult").val("");

    }


}




function listState() {
    var country = $("#txtCountry").val();
    if (country === "") {
        $(txtState).html('<option value="">--------------Select State--------------</option>');
    }
    if (country === "India") {
        $("#txtState").html('<option value="">--------------Select State--------------</option><option value="Odisha">Odisha</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option>');
    }
    if (country === "USA") {

        $("#txtState").html('<option value="">--------------Select State--------------</option><option value="Alaska">Alaska</option><option value="California">California</option><option value="Washington">Washington</option><option value="Ohio">Ohio</option>');
    }
    if (country === "Australia") {
        ("#txtState").html('<option value="">--------------Select State--------------</option><option value="Queensland">Queensland</option><option value="South Austrlia">South Austrlia</option><option value="Victoria">Victoria</option><option value="Tasmania">Tasmania</option>');
    }

}

function submitValidate() {
    var fname = $.trim($('#txtFname').val());
    var mname = $.trim($('#txtMname').val());
    var lname = $.trim($('#txtLname').val());
    var gender = $("input[name='radioGender']:checked").val();
    var dateDOB = $("#dateDOB").val();
    var primaryEmail = $.trim($('#txtEmail').val());
    var secondaryEmail = $.trim($('#txtAltEmail').val());
    var password = $('#txtPassword').val();
    var confirmPassword = $('#txtConfirmPassword').val();
    var phoneNumber = $("#txtPhonenumber").val();
    var altPhoneNumber = $("#txtAltPhonenumber").val();
    var address = $.trim($("#txtAddress").val());
    var city = $.trim($("#txtCity").val());
    var state = $("#txtState").val();
    var country = $("#txtCountry").val();

    var alphabets_regx = /^[A-Za-z]+$/;
    var email_regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var numbers_regx = /^[0-9]+$/;

    var validate = true;


    if (country === "") {
        $("#errorCountry").text("Select a country");
        $("#txtCountry").focus();
        clearSubmit();

        validate = false;
    }
    if (state === "") {
        $("#errorState").text("Select a state");
        $("#txtState").focus();
        clearSubmit();

        validate = false;
    }

    if (city === "" || !city.match(alphabets_regx)) {
        $("#errorCity").text("Enter your city");
        $("#txtCity").focus();
        clearSubmit();

        validate = false;
    }

    if (address === "") {
        $("#errorAddress").text("Enter your address here");
        $("#txtAddress").focus();
        clearSubmit();

        validate = false;
    }

    if (altPhoneNumber !== "" && altPhoneNumber.length !== 10) {
        $("#errorAltPhoneNumber").text("Provide a valid alternate phone number(if any)");
        $("#txtAltPhonenumber").focus();
        clearSubmit();

        validate = false;
    }

    if ((phoneNumber.length !== 10 && phoneNumber !== "") || (!phoneNumber.match(numbers_regx)) || phoneNumber === "") {
        $("#errorPhoneNumber").text("Provide a valid number");
        $("#txtPhonenumber").focus();
        clearSubmit();

        validate = false;

    }
    if (password !== confirmPassword) {
        $("#errorConfirmPassword").text("Re-type Password Properly");
        $("#txtConfirmPassword").focus();
        clearSubmit();

        validate = false;
    }

    if (password.indexOf(' ') >= 0 || password === "" || password.length < 6) {
        $("#errorPassword").text("Password must not contain spaces and must be atleast 6 charcaters");
        $("#txtPassword").focus();
        clearSubmit();

        validate = false;
    }

    if (secondaryEmail !== "" && !secondaryEmail.match(email_regx)) {
        $("#errorSecondaryEmail").text("Provide a valid secondary Email(if any)");
        $("#txtAltEmail").focus();
        clearSubmit();

        validate = false;
    }

    if (primaryEmail === "" || !primaryEmail.match(email_regx)) {
        $("#errorEmail").text("Provide a valid Email");
        $("#txtEmail").focus();
        clearSubmit();

        validate = false;

    }

    if (dateDOB === "") {
        $("#errorDOB").text("Enter your Date Of Birth");
        $("#dateDOB").focus();
        clearSubmit();

        validate = false;
    }

    if (gender === undefined) {
        $("#errorGender").text("Select your gender");
        clearSubmit();

        validate = false;

    }

    if (lname === "" || !lname.match(alphabets_regx)) {
        $("#errorLname").text("Last name must have 3 characters");
        $("#txtLname").focus();
        clearSubmit();

        validate = false;
    }

    if (mname !== "" && !mname.match(alphabets_regx)) {
        $("#errorMname").text("Enter your middle name properly(If any)");
        $("#txtMname").focus();
        clearSubmit();

        validate = false;
    }
    if (fname === "" || !fname.match(alphabets_regx) || fname.length < 3) {
        $("#errorFname").text("First name must have 3 characters");
        $("#txtFname").focus();
        clearSubmit();

        validate = false;
    }


    //     //Clearing error messages
    //     if (fname !== "" && fname.length >= 3 && fname.match(alphabets_regx)) {
    //         $("#errorFname").text("");


    //     }
    //     if ((mname !== "" && mname.match(alphabets_regx)) || mname === "") {
    //         $("#errorMname").text("");

    //     }
    //     if (lname !== "" && lname.match(alphabets_regx)) {
    //         $("#errorLname").text("");

    //     }
    //     if (gender !== undefined) {
    //         $("#errorGender").text("");

    //     }
    //     if (dateDOB !== "") {
    //         $("#errorDOB").text("");

    //     }
    //     if (primaryEmail !== "" && primaryEmail.match(email_regx)) {
    //         $("#errorEmail").text("");


    //     }
    //     if (secondaryEmail !== "" && secondaryEmail.match(email_regx)) {
    //         $("#errorSecondaryEmail").text("");

    //     }
    //     if (password.length >= 6 && password.indexOf(' ') < 0) {
    //         $("#errorPassword").text("");

    //     }
    //     if (password !== "" && password === confirmPassword) {
    //         $("errorConfirmPassword").text("");

    //     }
    //     if (phoneNumber !== "" && phoneNumber.length == 10 && phoneNumber.match(numbers_regx)) {
    //         $("#errorPhoneNumber").text("");

    //     }
    //     if (altPhoneNumber.length == 10 && altPhoneNumber.match(numbers_regx)) {
    //         $("#errorAltPhoneNumber").text("");

    //     }
    //     if (address !== "") {
    //         $("#errorAddress").text("");

    //     }
    //     if (city !== "" && city.match(alphabets_regx)) {
    //         $("#errorCity").text("");

    //     }
    if (state !== "") {
        $("#errorState").text("");

    }
    if (country !== "") {
        $("#errorCountry").text("");

    }
    if (validate == true) {
        $(".inline-error").text("");
        alert("Successfully Registered");
        location.replace("RegistrationForm.html");
    }
    // if (validate === false) {
    //     $("#userResult").attr("readonly", false);
    // }

}


function clearSubmit() {
    $("#submitButton").hide();
    $(".para-for-captcha").hide();
    $(".captchaButton").hide();
    $("#captchaResult").text("");
    $("#userResult").val("");
}