var globalData = {};
globalData.IsFormvalid = true;
// var globalData.IsFormvalid = true;

function checkName() {
    var fname = $.trim($('#txtFname').val());
    var mname = $.trim($('#txtMname').val());
    var lname = $.trim($('#txtLname').val());
    var alphabetsRegx = /^[A-Za-z]+$/;


    //validation of last name
    if (lname === "" || lname.length < 3 || !alphabetsRegx.test(lname)) {
        $("#errorLname").text("Enter your last name(Atleast 3 characters)");
        $("#txtLname").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorLname").text("");

    }

    //Validation of first name
    if (fname === "" || fname.length < 3 || !alphabetsRegx.test(fname)) {
        $("#errorFname").text("Enter your first name(Atleast 3 characters)");
        $("#txtFname").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorFname").text("");

    }

    //Validation of middle name
    if (mname !== "" && !alphabetsRegx.test(mname)) {
        $("#errorMname").text("Enter your middle name properly(If any)");
        $("#txtMname").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorMname").text("");
    }
    if (mname === "") {
        $("#errorMname").text("");

    }


}

function checkPrimaryEmail() {
    var emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var primaryEmail = $.trim($('#txtEmail').val());

    if (primaryEmail === "" || !primaryEmail.match(emailRegx)) {
        $("#errorEmail").text("Enter a valid email Id");
        $("#txtEmail").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
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
        $("#txtAadharCard").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorAadharCard").text("");


    }
    if (panNumber === "" || !panNumber.match(panRegx)) {
        $("#errorPanCard").text("Pancard number must follow 'AAAAA0000A'");
        $("#txtPanCard").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorPanCard").text("");

    }


}

function checkPhoneNumber() {
    var numbersRegx = /^[0-9]{10}$/;
    var phoneNumber = $.trim($("#txtPhoneNumber").val());

    if (!phoneNumber.match(numbersRegx)) {
        $("#errorPhoneNumber").text("Enter a valid Phone Number");
        $("#txtPhoneNumber").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorPhoneNumber").text("");

    }

    $(".addContactRow-field").each(function() {
        if (!$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first().text("Enter a valid Number");
            globalData.IsFormvalid = false;
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;
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


    if (pincode === "") {
        $("#errorPin").text("Enter ZipCode Properly");
        $("#txtPin").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;

    } else if (pincode.length !== 6 || !pincode.match(numbersRegx)) {
        $("#errorPin").text("Enter ZipCode Properly");
        $("#txtPin").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorPin").text("");

    }
    if (city === "") {
        $("#errorCity").text("Enter your city");
        $("#txtCity").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorCity").text("");

    }
    if (state === "") {
        $("#errorState").text("Select your State");
        $("#txtState").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorState").text("");

    }

    if (country === "") {
        $("#errorCountry").text("Select your Country");
        $("#txtCountry").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorCountry").text("");

    }
    if (address === "") {
        $("#errorAddress").text("Enter your valid Address");
        $("#txtAddress").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
    } else {
        $("#errorAddress").text("");

    }


    //Validation of dynamically created address field
    $(".addAddressRow-field").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first().text("Enter your address");
            globalData.IsFormvalid = false;
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;
        }
    });
    $(".addCountry-field").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first().text("Select your Country");
            globalData.IsFormvalid = false;
        } else {
            $(this).nextAll('p').first().text("");

        }
    });
    $(".addState-field").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first().text("Select your State");
            globalData.IsFormvalid = false;
        } else {
            $(this).nextAll('p').first().text("");

        }
    });
    $(".addCity-field").each(function() {
        if ($(this).val() === "") {
            $(this).next('p').first().text("Enter your City");
            globalData.IsFormvalid = false;
        } else {
            $(this).next('p').first().text("");

        }
    });
    $(".addPin-field").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first('').text("Enter your ZipCode");
            globalData.IsFormvalid = false;
        } else if ($(this).val().length !== 6 || !$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first('').text("Enter your ZipCode Properly");
            globalData.IsFormvalid = false;
        } else {
            $(this).nextAll('p').first('').text("");

        }
    });
}