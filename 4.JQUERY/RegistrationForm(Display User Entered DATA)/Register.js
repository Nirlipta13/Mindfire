function checkBlank() {
    if ($("#txtFname").val() === "") {
        $("#errorFname").text("Enter Your First Name");
    } else {
        $("#errorFname").text("");
    }
    if ($("#txtMname").val() === "") {
        $("#errorMname").text("Enter Your Middle Name");
    } else {
        $("#errorMname").text("");
    }
    if ($("#txtLname").val() === "") {
        $("3errorLname").text("Enter Your Last Name");
    } else {
        $("#errorLname").text("");
    }
    if ($("#txtEmail").val() === "") {
        $("#errorEmail").text("Enter Your Email ID");
    } else {
        $("#errorEmail").text("");
    }
    if ($("#txtPanCard").val() === "") {
        $("#errorPanCard").text("Enter Your Pancard Number");
    } else {
        $("#errorPanCard").text("");
    }
    if ($("#txtAadharCard").val() === "") {
        $("#errorAadharCard").text("Enter Your Aadhar Card Number");
    } else {
        $("#errorAadharCard").text("");
    }
    if ($("#txtPhoneNumber").val() === "") {
        $("#errorPhoneNumber").text("Enter Your Phone Number");
    } else {
        $("#errorPhoneNumber").text("");
    }
    if ($("#txtAddress").val() === "") {
        $("#errorAddress").text("Enter Your Address");
    } else {
        $("#errorAddress").text("");
    }
    if ($("#txtCountry").val() === "") {
        $("#errorCountry").text("Select Your Country");
    } else {
        $("#errorCountry").text("");
    }
    if ($("#txtState").val() === "") {
        $("#errorState").text("Select Your State");
    } else {
        $("#errorState").text("");
    }
    if ($("#txtCity").val() === "") {
        $("#errorCity").text("Enter Your Ciy");
    } else {
        $("#errorCity").text("");
    }
    if ($("#txtPin").val() === "") {
        $("#errorPin").text("Enter Your Pin");
    } else {
        $("#errorPin").text("");
    }

}