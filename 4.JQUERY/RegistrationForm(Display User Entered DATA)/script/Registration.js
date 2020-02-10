$(document).ready(function() {
    $(".inline-error").hide();
    $("#resume").hide();
    $("#additionalPhone").hide();
    captchaGenerate();

    $("#submitBtn").click(function() {
        captchaVerify();
        var boolAddress = checkAddress();
        var boolAddAddress = checkAddAddress();
        var boolPhno = checkPhoneNumber();
        var boolAddPhno = checkAddPhoneNumber();
        var boolIdentify = checkIdentificationNumber();
        var boolEmail = checkPrimaryEmail();
        var boolName = checkName();
        var boolImage = checkImage();
        if (boolAddress === 1 && boolPhno === 1 && boolIdentify === 1 && boolEmail === 1 && boolName === 1 && boolImage === 1 && boolAddAddress === 1 && boolAddPhno === 1) {
            getFormValues();
        } else {
            captchaGenerate();
        }
    });

    $("body").on('change', '#imageUpload', function() {
        readURL(this);
    });

    $("body").on("keypress", ".addcontact-row-field, #txtPhoneNumber, #txtPin, .js-pin", function(e) {
        var numbersRegx = /^[0-9]+$/;
        var keyNum = e.keyCode || e.which;
        var isValidNum = numbersRegx.test(String.fromCharCode(keyNum));
        return isValidNum;
    });

    $("#txtFirstName, #txtMiddleName, #txtLastName").blur(function() {
        var boolBlName = checkName();
    });

    $("#txtEmail").blur(function() {
        var boolBlEmail = checkPrimaryEmail();
    });

    $("#txtPanCard,#txtAadharCard").blur(function() {
        var boolBlIdentify = checkIdentificationNumber();
    });

    $("#txtPhoneNumber").blur(function() {
        var boolBlPhno = checkPhoneNumber();
    });

    $("body").on("blur", ".addcontact-row-field", function() {
        var boolBlAddPhno = checkAddPhoneNumber();
    });

    $("#txtAddress,#txtCountry,#txtState,#txtCity,#txtPin").blur(function() {
        var boolBlAddress = checkAddress();
    });

    $("body").on("blur", ".js-address, .add-js-country, .add-js-state, .js-city, .js-pin", function() {
        var boolBlAddAddress = checkAddAddress();
    });

    $("#userResult").on("blur", function() {
        captchaVerify();
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
        removeUpload();
        captchaGenerate();
    });

    $(".address-add-button").click(function() {
        addAddress();
    });

    $("body").on("change", ".js-country", function() {
        var selectedCountry = $(this).val();
        if (selectedCountry !== '') {
            var states = listState(selectedCountry);
            var $stateDropDown = $(this).parents(".country-state-row").find(".js-state");
            $stateDropDown.empty();
            $.each(states, function(i, value) {
                $stateDropDown.append($("<option     />").val(value).text(value));
            });
        }


    });
});


//Add Dynamic Contact Field
function addPhonenumber() {
    $(".contact-row").append('<div id="parentDiv" >' +
        '<label class="lbl-heading">Alternate Phone Number' +
        '<span class="astreik-mark">*</span></label><br/>' +
        '<input type="text" name="txtPhoneNumber" class="addcontact-row-field" ' +
        ' placeholder="Alternate PhoneNumber" maxlength= "10" /><button type="button" class="removePhone">X' +
        '</button><p class="inline-error"></p></div>');

    $(document).on("click", ".removePhone", function() {
        $(this).parent("#parentDiv").remove();
    });
}


//Add Dynamic Address Field
function addAddress() {
    var counter = 1;
    var htmlDiv = $(".parent-address").html();
    $(".address-details").append(htmlDiv);

    $(document).on("click", ".address-remove-button", function() {
        $(this).parents('#parentAddress').remove();

    });
}


//Change State Country DropDown Dynamically
function listState(countrySelected) {
    if (countrySelected === "India") {
        var addState = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
        return addState;
    } else if (countrySelected === "Pakistan") {
        var addState = ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"];
        return addState;
    } else if (countrySelected === "China") {
        var addState = ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"];
        return addState;
    } else {
        var addState = [];
        return addState;
    }


}

//Captcha Generation
function captchaGenerate() {
    var operatorArray = ["+", "-", "*", "/"];
    var no1 = Math.floor(10 + Math.random() * 90);
    var no2 = Math.floor(10 + Math.random() * 90);
    if (no1 > no2) {
        $("#firstOperand").text(no1);
        $("#secondOperand").text(no2);
    } else {
        $("#firstOperand").text(no2);
        $("#secondOperand").text(no1);
    }
    var opr = operatorArray[Math.floor(Math.random() * 4)];
    $("#operator").text(opr);
    $("#userResult").val("");
    $("#captchaResult").text("");
}


//Captcha Verification
function captchaVerify() {
    var firstOperand = Number($("#firstOperand").text());
    var secondOperand = Number($("#secondOperand").text());
    var operator = $("#operator").text();
    var expectedResult;
    switch (operator) {
        case '+':
            expectedResult = firstOperand + secondOperand;
            break;
        case '-':
            expectedResult = firstOperand - secondOperand;
            break;
        case '*':
            expectedResult = firstOperand * secondOperand;
            break;
        case '/':
            expectedResult = Math.round(firstOperand / secondOperand);
            break;

    }
    var userResult = Number($("#userResult").val());
    if (userResult === 0) {
        $("#captchaResult").text("Fill the captcha");
        captchaGenerate();
    }

    if (userResult !== "" && expectedResult === userResult) {
        $("#captchaResult").text("Hooray!! Its Correct");

    }
    if (userResult !== 0 && expectedResult !== userResult) {
        captchaGenerate();
        $("#userResult").val("");

    }
}


//Image Upload
function readURL(input) {
    var ext = input.files[0]['name'].substring(input.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {

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


//Remove Image
function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
    $(".file-upload-image").attr('src', '#');
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});



//Validation of Different Input Fields
function checkName() {
    var fname = $.trim($('#txtFirstName').val());
    var mname = $.trim($('#txtMiddleName').val());
    var lname = $.trim($('#txtLastName').val());
    var alphabetsRegx = /^[A-Za-z]+$/;

    var boolCount = 0;

    //validation of last name
    if (lname === "" || lname.length < 3 || !alphabetsRegx.test(lname)) {
        $("#pErrorLname").show();
        $("#userResult").val("");
        boolCount += 1;
    } else {
        $("#pErrorLname").hide();
    }

    //Validation of first name
    if (fname === "" || fname.length < 3 || !alphabetsRegx.test(fname)) {
        $("#pErrorFname").show();
        $("#userResult").val("");
        boolCount += 1;
    } else {
        $("#pErrorFname").hide();
    }

    //Validation of middle name
    if (mname !== "" && !alphabetsRegx.test(mname)) {
        $("#pErrorMname").show();
        $("#userResult").val("");
        boolCount += 1;
    } else if (mname === "") {
        $("#pErrorMname").hide();
    } else {
        $("#pErrorMname").hide();
    }
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}


function checkPrimaryEmail() {
    // var emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var primaryEmail = $.trim($('#txtEmail').val());
    var boolCount = 0;

    //Validation of Email
    if (primaryEmail === "" || !primaryEmail.match(emailRegx)) {
        $("#pErrorEmail").show();
        $("#userResult").val("");
        boolCount += 1;
    } else {
        $("#pErrorEmail").hide();
    }
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}

function checkIdentificationNumber() {
    var aadharNumber = $.trim($("#txtAadharCard").val());
    var panNumber = $.trim($("#txtPanCard").val());
    var aadharRegx = /^\d{4}\s\d{4}\s\d{4}$/;
    var panRegx = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var boolCount = 0;

    //Validation Of Aadhar Card
    if (aadharNumber === "" || !aadharNumber.match(aadharRegx)) {
        $("#pErrorAadharCard").show();
        $("#userResult").val("");
        boolCount += 1;
    } else {
        $("#pErrorAadharCard").hide();
    }

    //Validation of Pan Card
    if (panNumber === "" || !panNumber.match(panRegx)) {
        $("#pErrorPanCard").show();
        $("#userResult").val("");
        boolCount += 1;
    } else {
        $("#pErrorPanCard").hide();
    }
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}

function checkPhoneNumber() {
    var numbersRegx = /^[0-9]{10}$/;
    var phoneNumber = $.trim($("#txtPhoneNumber").val());
    var boolCount = 0;

    //Validation of Phone number
    if (!phoneNumber.match(numbersRegx)) {
        $("#pErrorPhoneNumber").show();
        $("#userResult").val("");
        boolCount += 1;
    } else {
        $("#pErrorPhoneNumber").hide();
    }
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}

function checkAddPhoneNumber() {
    //Validation of Dynamically added Phone Number Field
    var numbersRegx = /^[0-9]{10}$/;
    var boolCount = 0;

    $(".addcontact-row-field").each(function() {
        if (!$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first().text("Enter a valid Number");
            boolCount += 1;
        } else {
            $(this).nextAll('p').first().text("");
        }
    });
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}

//Validate Image
function checkImage() {
    var image = $(".file-upload-image").attr("src");
    var boolCount = 0;
    if (image === "#") {
        $("#pErrorImage").show();
        boolCount += 1;
    }
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}

function checkAddress() {
    var address = $.trim($("#txtAddress").val());
    var city = $.trim($("#txtCity").val());
    var state = $("#txtState").val();
    var country = $("#txtCountry").val();
    var pincode = $.trim($("#txtPin").val());
    var numbersRegx = /^[0-9]+$/;
    var boolCount = 0;


    //Validation of Address Fields
    if (pincode === "") {
        $("#pErrorPin").show();
        $("#userResult").val("");
        boolCount += 1;

    } else if (pincode.length !== 6 || !pincode.match(numbersRegx)) {
        $("#pErrorPin").show();
        $("#userResult").val("");
        boolCount += 1;

    } else {
        $("#pErrorPin").hide();
    }
    if (city === "") {
        $("#pErrorCity").show();
        $("#userResult").val("");
        boolCount += 1;

    } else {
        $("#pErrorCity").hide();

    }
    if (state === "") {
        $("#pErrorState").show();

        $("#userResult").val("");
        boolCount += 1;

    } else {
        $("#pErrorState").hide();

    }

    if (country === "") {
        $("#pErrorCountry").show();
        $("#userResult").val("");
        boolCount += 1;

    } else {
        $("#pErrorCountry").hide();
    }
    if (address === "") {
        $("#pErrorAddress").show();
        $("#userResult").val("");
        boolCount += 1;

    } else {
        $("#pErrorAddress").hide();

    }
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}

function checkAddAddress() {

    //Validation of dynamically created address field
    var numbersRegx = /^[0-9]+$/;
    var boolCount = 0;

    $(".js-address").each(function() {
        if (!$(this).is(":hidden")) {
            if ($.trim($(this).val()) === "") {
                $(this).nextAll('p').first().show();
                boolCount += 1;
            } else {
                $(this).nextAll('p').first().hide();
            }
        }
    });
    $(".add-js-country").each(function() {
        if (!$(this).is(":hidden")) {
            if ($(this).val() === "") {
                $(this).nextAll('p').first().show();
                boolCount += 1;
            } else {
                $(this).nextAll('p').first().hide();

            }
        }
    });
    $(".add-js-state").each(function() {
        if (!$(this).is(":hidden")) {
            if ($(this).val() === "") {
                $(this).nextAll('p').first().show();
                boolCount += 1;
            } else {
                $(this).nextAll('p').first().hide();

            }
        }
    });
    $(".js-city").each(function() {
        if (!$(this).is(":hidden")) {
            if ($.trim($(this).val()) === "") {
                $(this).next('p').first().show();
                boolCount += 1;
            } else {
                $(this).next('p').first().hide();

            }
        }
    });
    $(".js-pin").each(function() {
        if (!$(this).is(":hidden")) {
            if ($.trim($(this).val()) === "") {
                $(this).nextAll('p').first().show();
                boolCount += 1;
            } else if ($(this).val().length !== 6 || !$(this).val().match(numbersRegx)) {
                $(this).nextAll('p').first().show();
                boolCount += 1;
            } else {
                $(this).nextAll('p').first().hide();

            }
        }
    });
    if (boolCount === 0) {
        return 1;
    } else {
        return 0;
    }
}