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


    $(".addContactRow-field").each(function() {
        var html = $("<span>", {
            class: "display-info",
            text: $(this).val(),
        })
        $("#divAllPhoneNumber").append(', ');
        $("#divAllPhoneNumber").append(html);
    });




    var addressArray = $('.js-address').map(function() {
        return $(this).val();
    });
    addressArray = jQuery.grep(addressArray, function(n) { return (n); });
    var countryArray = $('.add-js-country').map(function() {
        return $(this).val();
    });
    countryArray = jQuery.grep(countryArray, function(n) { return (n); });
    var stateArray = $('.add-js-state').map(function() {
        return $(this).val();
    });
    stateArray = jQuery.grep(stateArray, function(n) { return (n); });
    var cityArray = $('.js-city').map(function() {
        return $(this).val();
    });
    cityArray = jQuery.grep(cityArray, function(n) { return (n); });
    var pinArray = $('.js-pin').map(function() {
        return $(this).val();
    });
    pinArray = jQuery.grep(pinArray, function(n) { return (n); });

    for (var iterator = 0; iterator < addressArray.length - 1; iterator++) {

        var addressHtml = $("<p>", {
            class: "display-info",
            text: $.trim(addressArray[iterator]),
        })
        var cityHtml = $("<p>", {
            class: "display-info",
            text: $.trim(cityArray[iterator]),
        })
        var stateHtml = $("<p>", {
            class: "display-info",
            text: $.trim(stateArray[iterator]),
        })
        var countryHtml = $("<p>", {
            class: "display-info",
            text: $.trim(countryArray[iterator]),
        })
        var pinHtml = $("<p>", {
            class: "display-info",
            text: $.trim(pinArray[iterator]),
        })



        $('#addAddressDisplay').append(addressHtml, cityHtml, stateHtml, countryHtml, pinHtml, '<p>----------------------------------------------------</p>');


    }




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