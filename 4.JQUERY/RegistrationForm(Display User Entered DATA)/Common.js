$(document).ready(function() {
    $("#resume").hide();
    $("#additionalPhone").hide();
    captchaGenerate();

    $("#submitBtn").click(function() {
        captchaVerify();
        checkAddress();
        checkPhoneNumber();
        checkIdentificationNumber();
        checkPrimaryEmail();
        checkName();
        if (globalData.IsFormvalid === true) {
            getFormValues();
        }
    });

    $("#refreshIcon").click(function() {
        captchaGenerate();
    });

    $(".add-button").click(function() {
        addPhonenumber();
    });

    $("#resetBtn").click(function() {
        $("input").val("");
        $(".inline-error").text("");
        $("#captchaResult").text("");
    });

    $(".addressAdd-button").click(function() {
        addAddress();
    });
    // $("#txtCountry").click(function() {
    //     listState();
    // });
    $("body").on("change", ".js-country", function() {
        var selectedCountry = $(this).val();
        if (selectedCountry != '') {
            var states = listState(selectedCountry);
            var $stateDropDown = $(this).parents(".countryState-row").find(".js-state");
            $.each(states, function(i, value) {
                $stateDropDown.append($("<option     />").val(value).text(value));
            });

        }
    });
});