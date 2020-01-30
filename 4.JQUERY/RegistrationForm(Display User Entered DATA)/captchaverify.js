var addressCounter = 1;
$(document).ready(function() {
    captchaGenerate();

    $("#refreshIcon").click(function() {
        captchaGenerate();
    });
    $("#txtCountry").click(function() {
        listState();
    });
    $(".add-button").click(function() {
        addPhonenumber();
        addressCounter = addressCounter + 1;

    });
    $(".addressAdd-button").click(function() {
        addAddress();
    });
    $("#submitBtn").click(function() {
        captchaVerify();
        submitValidate();
        checkAdditionalPhonenumber();
    });

});



function captchaGenerate() {
    var operatorArray = ["+", "-", "*", "/"];
    var num1 = document.getElementById("firstOperand");
    var num2 = document.getElementById("secondOperand");
    var operator = document.getElementById("operator");
    var no1 = Math.floor(10 + Math.random() * 90)
    var no2 = Math.floor(10 + Math.random() * 90)
    if (no1 > no2) {
        $("#firstOperand").text(no1);
        $("#secondOperand").text(no2);
    } else {
        $("#firstOperand").text(no2);
        $("#secondOperand").text(no1);
    }
    var opr = operatorArray[Math.floor(Math.random() * 4)];
    $("#operator").text(opr);
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
        $("#refreshIcon").hide();
        $("#userResult").attr('disabled', 'disabled');
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
        $("#txtState").html('<option value="">Select State</option>');
    }
    if (country === "India") {
        $("#txtState").html('<option value="">Select State</option><option value="Odisha">Odisha</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option>');
    }
    if (country === "USA") {

        $("#txtState").html('<option value="">Select State</option><option value="Alaska">Alaska</option><option value="California">California</option><option value="Washington">Washington</option><option value="Ohio">Ohio</option>');
    }
    if (country === "Australia") {
        $("#txtState").html('<option value="">Select State</option><option value="Queensland">Queensland</option><option value="South Austrlia">South Austrlia</option><option value="Victoria">Victoria</option><option value="Tasmania">Tasmania</option>');
    }

}

function addPhonenumber() {
    $(".contact-row").append('<div id="parentDiv"><input type="text" name="txtPhoneNumber" class="contactRow-field"  placeholder="Alternate PhoneNumber" /><button type="button" class="removePhone">X</button><p class="inline-error"></p></div>');

    $(document).on("click", ".removePhone", function() {
        $(this).parent("#parentDiv").remove();
        addressCounter = addressCounter - 1;
    });
}

function checkAdditionalPhonenumber() {
    var numbersRegx = /^[0-9]+$/;
    $(".contactRow-field").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first().text("Enter Your Phone Number");
        } else {
            $(this).nextAll('p').first().text("");
        }
        if (($(this).val().length !== 10 && $(this).val() !== "") || (!$(this).val().match(numbersRegx)) || $(this).val() === "") {
            $(this).nextAll('p').first().text("Enter a valid Number");
        } else {
            $(this).nextAll('p').first().text("");
        }
    });
}

function addAddress() {
    $(".addressDetails").append('<div id="parentDiv"><div><div class="address-row"><textarea class="addressRow-field" placeholder="Address"></textarea><p class="inline-error"></p></div><div class="countryState-row"><div><select id="txtCountry" name="txtCountry" class="countryState-field"><option value="">Select Country</option><option value="India">India</option><option value="USA">USA</option><option value="Australia">Australia</option></select><p class="inline-error"></p></div><div><select class="countryState-field" id="txtState"><option>Select State</option></select><p class="inline-error"></p></div></div><div class="cityPin-row"><div><input type="text" id="txtCity" name="txtCity" class="cityPin-field" placeholder="City" /><p class="inline-error"></p></div><div><input type="text" id="txtPin" name="txtPin" class="cityPin-field" placeholder="ZipCode" /><p class="inline-error"></p></div></div></div><div class="addressAddButton"><button type="button" class="addressRemove-button" style="background-color:red; color:white;background-color: red;color: white;padding: 8px;border: 0;margin: 8px;border-radius: 5px;">Remove Address</button></div></div>');

    $(document).on("click", ".addressRemove-button", function() {
        $(this).parents("#parentDiv").remove();

    });
}

function submitValidate() {
    var fname = $.trim($('#txtFname').val());
    var mname = $.trim($('#txtMname').val());
    var lname = $.trim($('#txtLname').val());
    var primaryEmail = $.trim($('#txtEmail').val());
    var phoneNumber = $("#txtPhoneNumber").val();
    var address = $.trim($("#txtAddress").val());
    var city = $.trim($("#txtCity").val());
    var state = $("#txtState").val();
    var country = $("#txtCountry").val();
    var zipcode = $.trim($("#txtPin").val());

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


    // if ((phoneNumber.length !== 10 && phoneNumber !== "") || (!phoneNumber.match(numbers_regx)) || phoneNumber === "") {
    //     $("#errorPhoneNumber").text("Provide a valid number");
    //     $("#txtPhonenumber").focus();
    //     clearSubmit();

    //     validate = false;

    // }

    if (primaryEmail === "" || !primaryEmail.match(email_regx)) {
        $("#errorEmail").text("Provide a valid Email");
        $("#txtEmail").focus();
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


}


function clearSubmit() {
    $("#userResult").val("");
}