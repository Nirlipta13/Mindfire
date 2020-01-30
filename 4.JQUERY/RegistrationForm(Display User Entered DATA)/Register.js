function checkName() {
    var fname = $.trim($('#txtFname').val());
    var mname = $.trim($('#txtMname').val());
    var lname = $.trim($('#txtLname').val());
    var alphabetsRegx = /^[A-Za-z]+$/;

    //Validation of first name
    if (fname === "" || fname.length < 3 || !alphabetsRegx.test(fname)) {
        $("#errorFname").text("Enter your first name(Atleast 3 characters)");
        $("#userResult").val("");
    } else {
        $("#errorFname").text("");

    }

    //Validation of middle name
    if (mname !== "" && !alphabetsRegx.test(mname)) {
        $("#errorMname").text("Enter your middle name properly(If any)");
        $("#userResult").val("");

    } else {
        $("#errorMname").text("");
    }
    if (mname === "") {
        $("#errorMname").text("");
    }

    //validation of last name
    if (lname === "" || lname.length < 3 || !alphabetsRegx.test(lname)) {
        $("#errorLname").text("Enter your last name(Atleast 3 characters)");
        $("#userResult").val("");
    } else {
        $("#errorLname").text("");

    }
}

function checkPrimaryEmail() {
    var emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var primaryEmail = $.trim($('#txtEmail').val());

    if (primaryEmail === "" || !primaryEmail.match(emailRegx)) {
        $("#errorEmail").text("Enter a valid email Id");
        $("#userResult").val("");
    } else {
        $("#errorEmail").text("");
    }

}

function checkIdentificationNumber() {
    var aadharNumber = $.trim($("#txtAadharCard").val());
    var panNumber = $.trim($("#txtPanCard").val());
    var aadharRegx = /^\d{4}\s\d{4}\s\d{4}$/;
    var panRegx = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/

    if (aadharNumber === "" || !aadharNumber.match(aadharRegx)) {
        $("#errorAadharCard").text("Aadharcard number must follow 'xxxx xxxx xxxx'");
    } else {
        $("#errorAadharCard").text("");

    }
    if (panNumber === "" || !panNumber.match(panRegx)) {
        $("#errorPanCard").text("Pancard number must follow 'AAAAA0000A'");
    } else {
        $("#errorPanCard").text("");

    }


}

function checkPhoneNumber() {
    var numbersRegx = /^[0-9]{10}$/;
    var phoneNumber = $.trim($("#txtPhoneNumber").val());

    if (phoneNumber === "" || !phoneNumber.match(numbersRegx) || phoneNumber.length !== 10) {
        $("#errorPhoneNumber").text("Enter a valid Phone Number");
    }
    if (phoneNumber !== "" && phoneNumber.match(numbersRegx) && phoneNumber.length === 10) {
        $("#errorPhoneNumber").text("");
    }

    $(".addContactRow-field").each(function() {
        if (!$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first().text("Enter a valid Number");
        } else if (phoneNumber !== "" && $(this).val() !== "" && $(this).val() === phoneNumber) {
            $(this).nextAll('p').first().text("Enter a different number");
        } else {
            $(this).nextAll('p').first().text("");
        }
    });
}

function checkAddress() {
    var address = $.trim($("#txtAddress").val());
    var city = $.trim($("#txtCity").val());
    var state = $("#txtState").val();
    var country = $("#txtCountry").val();
    var pincode = $.trim($("#txtPin").val());
    var numbersRegx = /^[0-9]+$/;

    if (address === "") {
        $("#errorAddress").text("Enter your valid Address");
        $("#userResult").val("");
    } else {
        $("#errorAddress").text("");
    }
    if (city === "") {
        $("#errorCity").text("Enter your city");
        $("#userResult").val("");
    } else {
        $("#errorCity").text("");
    }
    if (state === "") {
        $("#errorState").text("Select your State");
        $("#userResult").val("");

    } else {
        $("#errorState").text("");
    }
    if (country === "") {
        $("#errorCountry").text("Select your Country");
        $("#userResult").val("");

    } else {
        $("#errorCountry").text("");
    }
    if (pincode === "" || pincode.length !== 6 || !pincode.match(numbersRegx)) {
        $("#errorPin").text("Select your Country");
        $("#userResult").val("");

    } else {
        $("#errorPin").text("");
    }
}