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
        checkImage();
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
        captchaGenerate();
    });

    $(".addressAdd-button").click(function() {
        addAddress();
    });
    $("body").on("change", ".js-country", function() {
        var selectedCountry = $(this).val();
        if (selectedCountry != '') {
            var states = listState(selectedCountry);
            var $stateDropDown = $(this).parents(".countryState-row").find(".js-state");
            $stateDropDown.empty();
            $.each(states, function(i, value) {
                $stateDropDown.append($("<option     />").val(value).text(value));
            });
        }


    });
});


//Add Dynamic Contact Field
function addPhonenumber() {
    $(".contact-row").append('<div id="parentDiv" ><label class="lbl-heading">Alternate Phone Number<span class="astreik-mark">*</span></label><br/><input type="text" name="txtPhoneNumber" class="addContactRow-field"  placeholder="Alternate PhoneNumber" /><button type="button" class="removePhone">X</button><p class="inline-error"></p></div>');

    $(document).on("click", ".removePhone", function() {
        $(this).parent("#parentDiv").remove();
    });
}


//Add Dynamic Address Field
function addAddress() {
    var counter = 1;
    var htmlDiv = $(".parent-address").html();
    $(".addressDetails").append(htmlDiv);

    $(document).on("click", ".addressRemove-button", function() {
        $(this).parents('#parent').remove();

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
    var num1 = document.getElementById("firstOperand");
    var num2 = document.getElementById("secondOperand");
    var operator = document.getElementById("operator");
    var no1 = Math.floor(10 + Math.random() * 90)
    var no2 = Math.floor(10 + Math.random() * 90)
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
        default:
            alert("true");
    }
    var userResult = Number($("#userResult").val());
    if (userResult === 0) {
        $("#captchaResult").text("Fill the captcha");
        captchaGenerate();
    }

    if (userResult !== "" && expectedResult === userResult) {
        $("#captchaResult").text("Hooray!! Its Correct");
        globalData.IsFormvalid = true;
        if (globalData.IsFormvalid == false) {
            captchaGenerate();
        }
    }
    if (userResult !== 0 && expectedResult !== userResult) {
        $("#captchaResult").text("Oops!! Try Again");
        captchaGenerate();
        $("#userResult").val("");
        globalData.IsFormvalid = false;

    }
    if (globalData.IsFormvalid === false) {
        captchaGenerate();
        $("#userResult").val("");
        $("#captchaResult").text("");

    }

}


//Image Upload
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


//Remove Image
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

var globalData = {};
globalData.IsFormvalid = true;
globalData.Iterator = 0;



//Validation of Different Fields
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

    //Validation of Email
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

    //Validation Of Aadhar Card
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

    //Validation of Pan Card
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

    //Validation of Phone number
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

    //Validation of Dynamically added Phone Number Field
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


function checkImage() {
    var image = $(".file-upload-image").attr("src");
    if (image === "#") {
        globalData.IsFormvalid = false;
        $("#image-error").text("Browse Image");
    } else {
        $("#image-error").text("");
    }
}

function checkAddress() {
    var address = $.trim($("#txtAddress").val());
    var city = $.trim($("#txtCity").val());
    var state = $("#txtState").val();
    var country = $("#txtCountry").val();
    var pincode = $.trim($("#txtPin").val());
    var numbersRegx = /^[0-9]+$/;


    //Validation of Address Fields
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
            $(this).nextAll('p').first().text("Enter your ZipCode");
            globalData.IsFormvalid = false;
            console.log("addPin", globalData.IsFormvalid);
        } else if ($(this).val().length !== 6 || !$(this).val().match(numbersRegx)) {
            $(this).nextAll('p').first().text("Enter your ZipCode Properly");
            globalData.IsFormvalid = false;
            console.log("addPin", globalData.IsFormvalid);
        } else {
            $(this).nextAll('p').first().text("");
            globalData.IsFormvalid = true;
            console.log("addPin", globalData.IsFormvalid);
        }
    });
}