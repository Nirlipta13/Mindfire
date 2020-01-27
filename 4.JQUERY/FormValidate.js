$(document).ready(function() {
    $("#txtFname").blur(function() {
        checkFname();
    });
    $("#txtMname").blur(function() {
        checkMname();
    });
    $("#txtLname").blur(function() {
        checkLname();
    });
    $("input[name='radioGender']").blur(function() {
        checkGender();
    });
    $("#dateDOB").blur(function() {
        checkDOB();
    });
    $("#txtEmail").blur(function() {
        checkPrimaryEmail();
    });
    $("#txtAltEmail").blur(function() {
        checkSecondaryEmail();
    });
    $("#txtPassword").blur(function() {
        checkPassword();
    });
    $("#txtConfirmPassword").blur(function() {
        checkConfirmPassword();
    });
    $("#txtPhonenumber").blur(function() {
        checkPhoneNumber();
    });
    $("#txtAltPhonenumber").blur(function() {
        checkAltPhoneNumber();
    });
    $("#txtAddress").blur(function() {
        checkAddress();
    });
    $("#txtCity").blur(function() {
        checkCity();
    });
    $("#txtState").blur(function() {
        checkState();
    });
    $("#txtCountry").blur(function() {
        checkCountry();
    });


});

var validate = true;


function clearSubmit() {
    $("#submitButton").hide();
    $(".para-for-captcha").hide();
    $("#captchaResult").text("");
    $("#userResult").val("");
}

function checkFname() {
    var fname = $.trim($('#txtFname').val());
    var alphabets_regx = /^[A-Za-z]+$/;

    if (fname !== "" || fname.length < 3 || !alphabets_regx.test(fname)) {
        $("#errorFname").text("Enter your first name(Atleast 3 characters)");
        $("#errorFname").show();
        clearSubmit();
        validate = false;
    }
    if (fname !== "" && fname.length >= 3 && alphabets_regx.test(fname)) {
        $("#errorFname").hide();

    }
}

function checkMname() {
    var mname = $.trim($('#txtMname').val());
    var alphabets_regx = /^[A-Za-z]+$/;

    if (mname !== "" && !alphabets_regx.test(mname)) {
        $("#errorMname").text("Enter your middle name properly(If any)");
        $("#errorMname").show();
        clearSubmit();
        validate = false;

    }
    if (mname === "") {
        $("#errorMname").hide();
    }
    if (mname !== "" && alphabets_regx.test(mname)) {
        $("#errorMname").hide();
    }
}

function checkLname() {
    var lname = $.trim($('#txtLname').val());
    var alphabets_regx = /^[A-Za-z]+$/;

    if (lname === "" || lname.length < 3 || !alphabets_regx.test(lname)) {
        $("#errorLname").text("Enter your last name(Atleast 3 characters)");
        $("#errorLname").show();
        clearSubmit();
        validate = false;
    }
    if (lname !== "" && lname.length >= 3 && alphabets_regx.test(lname)) {
        $("#errorLname").hide();

    }
}


function checkGender() {
    var gender = $("input[name='radioGender']:checked").val();
    if (gender === undefined) {
        $("#errorGender").text("Select a gender");
        $("#errorGender").show();
        clearSubmit();
        validate = false;
    }
    if (gender !== undefined) {
        $("#errorGender").hide();
    }

}


function checkDOB() {
    var dob = $("#dateDOB").val();
    if (dob === "") {
        $("#errorDOB").text("Enter your Date Of Birth");
        $("#errorDOB").show();
        clearSubmit();
        validate = false;
    }
    if (dob !== "") {
        $("#errorDOB").hide();
    }

}

function checkPrimaryEmail() {
    var email_regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var primaryEmail = $.trim($('#txtEmail').val());

    if (primaryEmail === "" || !primaryEmail.match(email_regx)) {
        $("#errorEmail").text("Enter a valid Email");
        $("#errorEmail").show();
        clearSubmit();
        validate = false;
    }
    if (primaryEmail !== "" && primaryEmail.match(email_regx)) {
        $("#errorEmail").hide();
    }

}

function checkSecondaryEmail() {
    var email_regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var secondaryEmail = $.trim($('#txtAltEmail').val());
    if (secondaryEmail !== "" && !secondaryEmail.match(email_regx)) {
        $("#errorSecondaryEmail").text("Enter a valid secondaery Email(if any)");
        $("#errorSecondaryEmail").show();
        clearSubmit();
        validate = false;

    }
    if (secondaryEmail !== "" && secondaryEmail.match(email_regx)) {
        $("#errorSecondaryEmail").hide();
    }

}

function checkPassword() {
    var password = $("#txtPassword").val();
    if (password === "" || password.length < 6 || password.indexOf(' ') >= 0) {
        $("#errorPassword").text("Password must not contain spaces and must be atleast 6 charcaters");
        $("#errorPassword").show();
        clearSubmit();
        validate = false;
    }
    if (password !== "" && password.length >= 6) {
        $("#errorPassword").hide();
    }

}

function checkConfirmPassword() {
    var confirmPassword = $('#txtConfirmPassword').val();
    var password = $("#txtPassword").val();
    if (confirmPassword !== password) {
        $("#errorConfirmPassword").text("Re-type Password Properly");
        $("#txtConfirmPassword").show();
        clearSubmit();
        validate = false;
    }
    if (confirmPassword === password) {
        $("#errorConfirmPassword").hide();
    }
}

function checkPhoneNumber() {
    var phoneNumber = $("#txtPhonenumber").val();
    var numbers_regx = /^[0-9]+$/;

    if (phoneNumber === "" || !phoneNumber.match(numbers_regx) || phoneNumber.length !== 10) {
        $("#errorPhoneNumber").text("Enter a valid Phone Number");
        $("#errorPhoneNumber").show();
        clearSubmit();
        validate = false;

    }
    if (phoneNumber !== "" && phoneNumber.match(numbers_regx) && phoneNumber.length === 10) {
        $("#errorPhoneNumber").hide();
    }
}

function checkAltPhoneNumber() {
    var altPhoneNumber = $("#txtAltPhonenumber").val();
    var numbers_regx = /^[0-9]+$/;


    if ((altPhoneNumber !== "" && !altPhoneNumber.match(numbers_regx)) || (altPhoneNumber !== "" && phoneNumber.length !== 10)) {
        $("#errorAltPhoneNumber").text("Enter a valid Alternate Phone Number(if any)");
        $("#errorAltPhoneNumber").show();
        clearSubmit();
        validate = false;

    }
    if (altPhoneNumber !== "" && altPhoneNumber.match(numbers_regx) && altPhoneNumber.length === 10) {
        $("#errorAltPhoneNumber").hide();
    }
}

function checkAddress() {
    var address = $.trim($("#txtAddress").val());

    if (address === "") {
        $("#errorAddress").text("Enter your valid Address");
        $("#errorAddress").show();
        clearSubmit();
        validate = false;

    }
    if (address !== "") {
        $("#errorAddress").hide();
    }

}

function checkCity() {
    var city = $.trim($("#txtCity").val());
    if (city === "") {
        $("#errorCity").text("Enter your city");
        $("#errorCity").show();
        clearSubmit();
        validate = false;

    }
    if (city !== "") {
        $("#errorCity").hide();
    }

}

function checkState() {
    var state = $("#txtState").val();
    if (state === "") {
        $("#errorState").text("Select your State");
        $("#errorState").show();
        clearSubmit();
        validate = false;

    }
    if (state !== "") {
        $("#errorState").hide();
    }
}

function checkCountry() {
    var country = $("#txtCountry").val();
    if (country === "") {
        $("#errorCountry").text("Select your Country");
        $("#errorCountry").show();
        clearSubmit();
        validate = false;

    }
    if (country !== "") {
        $("#errorCountry").hide();
    }
}

// function checkCaptcha() {
//     var firstOperand = Number($("#firstOperand").text());
//     var secondOperand = Number($("#secondOperand").text());
//     var operator = $("#operator").text();
//     var expectedResult;
//     switch (operator) {
//         case '+':
//             expectedResult = firstOperand + secondOperand;
//             break;
//         case '-':
//             expectedResult = firstOperand - secondOperand;
//             break;
//         case '*':
//             expectedResult = firstOperand * secondOperand;
//             break;
//         case '/':
//             expectedResult = Math.round(firstOperand / secondOperand);
//             break;
//         default:
//             alert("true");
//     }
//     var userResult = Number($("#userResult").val());
//     if (userResult == 0) {
//         $("#captchaResult").text("Fill the captcha");
//         captchaGenerate();
//     }

//     if (userResult !== "" && expectedResult === userResult) {
//         $("#captchaResult").text("Hooray!! Its Correct");
//         $(".captchaButton").hide();
//         $("#submitButton").show();

//     }
//     if (userResult !== 0 && expectedResult !== userResult) {
//         $("#captchaResult").text("Oops!! Try Again");
//         captchaGenerate();
//         $("#userResult").val("");

//     }
// }