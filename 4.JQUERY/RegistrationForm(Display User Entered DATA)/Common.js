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
            console.log(states);
            var $stateDropDown = $(this).parents(".countryState-row").find(".js-state");
            $stateDropDown.empty();
            $.each(states, function(i, value) {
                $stateDropDown.append($("<option     />").val(value).text(value));
            });
        }


    });
});


function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});