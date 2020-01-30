$(document).ready(function() {
    $("#txtFname").blur(function() {
        checkName();
    });
    $("#txtMname").blur(function() {
        checkName();
    });
    $("#txtLname").blur(function() {
        checkName();
    });
    $("#txtEmail").blur(function() {
        checkPrimaryEmail();
    });
    $("#txtPhoneNumber").blur(function() {
        checkPhoneNumber();
    });
    $("#txtAddress").blur(function() {
        checkAddress();
    });
    $("#txtCity").blur(function() {
        checkAddress();
    });
    $("#txtState").blur(function() {
        checkAddress();
    });
    $("#txtCountry").blur(function() {
        checkAddress();
    });
});



function checkName() {
    var fname = $.trim($('#txtFname').val());
    var mname = $.trim($('#txtMname').val());
    var lname = $.trim($('#txtLname').val());
    var alphabets_regx = /^[A-Za-z]+$/;

    if (fname !== "" || fname.length < 3 || !alphabets_regx.test(fname)) {
        $("#errorFname").text("Enter your first name(Atleast 3 characters)");
        $("#errorFname").show();
        clearSubmit();
        validate = false;
    }
    if (fname !== "" && fname.length >= 3 && alphabets_regx.test(fname)) {
        $("#errorFname").text("");

    }
    if (mname !== "" && !alphabets_regx.test(mname)) {
        $("#errorMname").text("Enter your middle name properly(If any)");
        $("#errorMname").show();
        clearSubmit();
        validate = false;

    }
    if (mname === "") {
        $("#errorMname").text("");
    }
    if (mname !== "" && alphabets_regx.test(mname)) {
        $("#errorMname").hide();
    }
    if (lname === "" || lname.length < 3 || !alphabets_regx.test(lname)) {
        $("#errorLname").text("Enter your last name(Atleast 3 characters)");
        $("#errorLname").show();
        clearSubmit();
        validate = false;
    }
    if (lname !== "" && lname.length >= 3 && alphabets_regx.test(lname)) {
        $("#errorLname").text("");

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
        $("#errorEmail").text("");
    }

}

function checkPhoneNumber() {
    var phoneNumber = $("#txtPhoneNumber").val();
    var numbers_regx = /^[0-9]+$/;

    if (phoneNumber === "" || !phoneNumber.match(numbers_regx) || phoneNumber.length !== 10) {
        $("#errorPhoneNumber").text("Enter a valid Phone Number");
        $("#errorPhoneNumber").show();
        clearSubmit();
        validate = false;

    }
    if (phoneNumber !== "" && phoneNumber.match(numbers_regx) && phoneNumber.length === 10) {
        $("#errorPhoneNumber").text("");
    }
}

function checkAddress() {
    var address = $.trim($("#txtAddress").val());
    var city = $.trim($("#txtCity").val());
    var state = $("#txtState").val();
    var country = $("#txtCountry").val();

    if (address === "") {
        $("#errorAddress").text("Enter your valid Address");
        $("#errorAddress").show();
        clearSubmit();
        validate = false;

    }
    if (address !== "") {
        $("#errorAddress").text("");
    }
    if (city === "") {
        $("#errorCity").text("Enter your city");
        $("#errorCity").show();
        clearSubmit();
        validate = false;

    }
    if (city !== "") {
        $("#errorCity").text("");
    }
    if (state === "") {
        $("#errorState").text("Select your State");
        $("#errorState").show();
        clearSubmit();
        validate = false;

    }
    if (state !== "") {
        $("#errorState").text("");
    }
    if (country === "") {
        $("#errorCountry").text("Select your Country");
        $("#errorCountry").show();
        clearSubmit();
        validate = false;

    }
    if (country !== "") {
        $("#errorCountry").text("");
    }
}