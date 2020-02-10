function getFormValues() {
    var fName = $("#txtFirstName").val();
    var mName = $("#txtMiddleName").val();
    var lName = $("#txtLastName").val();
    var eMail = $("#txtEmail").val();
    var phoneNumber = $("#txtPhoneNumber").val()
    var panCard = $("#txtPanCard").val();
    var aadharCard = $("#txtAadharCard").val();
    var address = $("#txtAddress").val();
    var country = $("#txtCountry").val();
    var state = $("#txtState").val();
    var city = $("#txtCity").val();
    var pin = $("#txtPin").val();


    //Display Additional Contact field
    $(".addcontact-row-field").each(function() {
        var html = $("<span>", {
            class: "display-info",
            text: $(this).val(),
        })
        $("#divAllPhoneNumber").append(', ');
        $("#divAllPhoneNumber").append(html);
    });


    //Get values of Dynamic address fields
    var addressArray = $('.js-address').map(function() {
        return $(this).val();
    });
    addressArray = $.grep(addressArray, function(n) { return (n); });
    var countryArray = $('.add-js-country').map(function() {
        return $(this).val();
    });
    countryArray = $.grep(countryArray, function(n) { return (n); });
    var stateArray = $('.add-js-state').map(function() {
        return $(this).val();
    });
    stateArray = $.grep(stateArray, function(n) { return (n); });
    var cityArray = $('.js-city').map(function() {
        return $(this).val();
    });
    cityArray = $.grep(cityArray, function(n) { return (n); });
    var pinArray = $('.js-pin').map(function() {
        return $(this).val();
    });
    pinArray = $.grep(pinArray, function(n) { return (n); });

    for (var iterator = 0; iterator < addressArray.length - 1; iterator++) {

        var addressHtml = $("<div>", {
            class: "display-info",
            text: $.trim(addressArray[iterator]),
        });
        var cityHtml = $("<p>", {
            class: "display-info",
            text: $.trim(cityArray[iterator]),
        });
        var stateHtml = $("<p>", {
            class: "display-info",
            text: $.trim(stateArray[iterator]),
        });
        var countryHtml = $("<p>", {
            class: "display-info",
            text: $.trim(countryArray[iterator]),
        });
        var pinHtml = $("<p>", {
            class: "display-info",
            text: $.trim(pinArray[iterator]),
        });


        //Display values of dynamic address fields
        $('#addAddressDisplay').append(addressHtml, cityHtml, stateHtml, countryHtml, pinHtml, '<p>-------------------------------------------------------------</p>');


    }

    //Display values of fields present on page
    $(".to-hide").hide();
    $("#resume").show();
    $(".image-upload-wrap").hide();
    $(".imgDiv").hide();
    $(".remove-image").hide();
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