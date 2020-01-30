$(document).ready(function() {
    captchaGenerate();
    $("#submitBtn").click(function() {
        checkName();
        checkPrimaryEmail();
        checkPhoneNumber();
        checkAddress();
        checkIdentificationNumber();
        captchaVerify();
    });
    $("#refreshIcon").click(function() {
        captchaGenerate();
    });
    $(".add-button").click(function() {
        addPhonenumber();

    });
    $(".addressAdd-button").click(function() {
        addAddress();
    });
    $("#txtFname,#txtLname,#txtMname,#txtEmail,#txtAadharCard,#txtPancard,#txtPhonenumber,#txtAddress,#txtCountry,#txtState,#txtCity,#txtPin,#userResult").blur(function() {
        checkName();
        checkPrimaryEmail();
        checkPhoneNumber();
        checkAddress();
        checkIdentificationNumber();
    });


});