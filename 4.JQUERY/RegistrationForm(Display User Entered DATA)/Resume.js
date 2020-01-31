function getFormValues() {
    var fName = $("#txtFname").val();
    var mName = $("#txtMname").val();
    var lName = $("#txtLname").val();
    var eMail = $("#txtEmail").val();
    var phoneNumber = $("#txtPhoneNumber").val()
    var panCard = $("#txtPanCard").val();
    var aadharCard = $("#txtAadharCard").val();
    var address = $("#txtAddress").val();
    var country = $("#txtCountry").val();
    var state = $("#txtState").val();
    var city = $("#txtCity").val();
    var pin = $("#txtPin").val();

    // $("#additionalPhoneNumber").empty();
    $(".addContactRow-field").each(function() {
        var html = $("<span>", {
            class: "display-info",
            text: $(this).val(),
        })

        $("#divAdditionalPhone").append(html);

    });

    $(".container").hide();
    $("#resume").show();
    $("#displayFname").text(fName);
    $("#displayMname").text(mName);
    $("#displayLname").text(lName);
    $("#displayEmail").text(eMail);
    $("#displayPancard").text(panCard);
    $("#displayAadharCard").text(aadharCard);
    $("#displayPhoneNumber").text(phoneNumber);
    $("#displayAddress").text(address);
    $("#displayCity").text(city);
    $("#displayState").text(state);
    $("#displayCountry").text(country);
    $("#displayPin").text(pin);
}