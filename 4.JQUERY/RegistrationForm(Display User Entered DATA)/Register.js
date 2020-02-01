var globalData = {};
globalData.IsFormvalid = true;
globalData.Iterator = 0;
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
        console.log("Lname", globalData.IsFormvalid);
    } else {
        $("#errorLname").text("");

        console.log("Lname", globalData.IsFormvalid);
    }

    //Validation of first name
    if (fname === "" || fname.length < 3 || !alphabetsRegx.test(fname)) {
        $("#errorFname").text("Enter your first name(Atleast 3 characters)");
        $("#txtFname").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("Fname", globalData.IsFormvalid);
    } else {
        $("#errorFname").text("");


        console.log("Fname", globalData.IsFormvalid);
    }

    //Validation of middle name
    if (mname !== "" && !alphabetsRegx.test(mname)) {
        $("#errorMname").text("Enter your middle name properly(If any)");
        $("#txtMname").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("Mname", globalData.IsFormvalid);
    } else if (mname === "") {
        $("#errorMname").text("");
        console.log("Fname", globalData.IsFormvalid);

    } else {
        $("#errorMname").text("");
        globalData.IsFormvalid = true;

        console.log(globalData.IsFormvalid);
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
        console.log(globalData.IsFormvalid);
    } else {
        $("#errorEmail").text("");

        console.log("Email", globalData.IsFormvalid);

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
        console.log("aadhar", globalData.IsFormvalid);
    } else {
        $("#errorAadharCard").text("");
        globalData.IsFormvalid = true;

        console.log("aadhar", globalData.IsFormvalid);


    }
    if (panNumber === "" || !panNumber.match(panRegx)) {
        $("#errorPanCard").text("Pancard number must follow 'AAAAA0000A'");
        $("#txtPanCard").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("pan", globalData.IsFormvalid);
    } else {
        $("#errorPanCard").text("");
        globalData.IsFormvalid = true;

        console.log("pan", globalData.IsFormvalid);
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
        console.log("phone", globalData.IsFormvalid);
    } else {
        $("#errorPhoneNumber").text("");
        globalData.IsFormvalid = true;

        console.log("phone", globalData.IsFormvalid);
    }

    $(".addContactRow-field").each(function() {
        if (!$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first().text("Enter a valid Number");
            globalData.IsFormvalid = false;
            console.log("addPhone", globalData.IsFormvalid);
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;

            console.log("addPhone", globalData.IsFormvalid);
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
        console.log("pin", globalData.IsFormvalid);
    } else if (pincode.length !== 6 || !pincode.match(numbersRegx)) {
        $("#errorPin").text("Enter ZipCode Properly");
        $("#txtPin").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("pin", globalData.IsFormvalid);
    } else {
        $("#errorPin").text("");
        globalData.IsFormvalid = true;

        console.log("pin", globalData.IsFormvalid);
    }
    if (city === "") {
        $("#errorCity").text("Enter your city");
        $("#txtCity").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("city", globalData.IsFormvalid);
    } else {
        $("#errorCity").text("");
        globalData.IsFormvalid = true;

        console.log("city", globalData.IsFormvalid);
    }
    if (state === "") {
        $("#errorState").text("Select your State");
        $("#txtState").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("state", globalData.IsFormvalid);
    } else {
        $("#errorState").text("");
        globalData.IsFormvalid = true;

        console.log("state", globalData.IsFormvalid);
    }

    if (country === "") {
        $("#errorCountry").text("Select your Country");
        $("#txtCountry").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("country", globalData.IsFormvalid);
    } else {
        $("#errorCountry").text("");
        globalData.IsFormvalid = true;

        console.log("country", globalData.IsFormvalid);

    }
    if (address === "") {
        $("#errorAddress").text("Enter your valid Address");
        $("#txtAddress").focus();
        $("#userResult").val("");
        globalData.IsFormvalid = false;
        console.log("address", globalData.IsFormvalid);
    } else {
        $("#errorAddress").text("");
        globalData.IsFormvalid = true;

        console.log("address", globalData.IsFormvalid);
    }


    //Validation of dynamically created address field
    $(".js-address").each(function() {
        if ($.trim($(this).val()) === "") {
            $(this).nextAll('p').first().text("Enter your address");
            globalData.IsFormvalid = false;
            console.log("addAddress", globalData.IsFormvalid);
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;

            console.log("addAddress", globalData.IsFormvalid);
        }
    });
    $(".js-country").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first().text("Select your Country");
            globalData.IsFormvalid = false;
            console.log("addcountry", globalData.IsFormvalid);
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;

            console.log("addcountry", globalData.IsFormvalid);
        }
    });
    $(".js-state").each(function() {
        if ($(this).val() === "") {
            $(this).nextAll('p').first().text("Select your State");
            globalData.IsFormvalid = false;
            console.log("addState", globalData.IsFormvalid);
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;

            console.log("addState", globalData.IsFormvalid);
        }
    });
    $(".js-city").each(function() {
        if ($.trim($(this).val()) === "") {
            $(this).next('p').first().text("Enter your City");
            globalData.IsFormvalid = false;
            console.log("addcity", globalData.IsFormvalid);
        } else {
            $(this).next('p').first().text("");
            globalData.IsFormvalid = true;

            console.log("addcity", globalData.IsFormvalid);
        }
    });
    $(".js-pin").each(function() {
        if ($.trim($(this).val()) === "") {
            $(this).nextAll('p').first('').text("Enter your ZipCode");
            globalData.IsFormvalid = false;
            console.log("addPin", globalData.IsFormvalid);
        } else if ($(this).val().length !== 6 || !$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first('').text("Enter your ZipCode Properly");
            globalData.IsFormvalid = false;
            console.log("addPin", globalData.IsFormvalid);
        } else {
            $(this).nextAll('p').first('').text("");
            globalData.IsFormvalid = true;
            console.log("addPin", globalData.IsFormvalid);
        }
    });
}