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
        addressCounter = addressCounter + 1;

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
    })

});

var addressCounter = 1;

function addPhonenumber() {
    $(".contact-row").append('<div id="parentDiv"><input type="text" name="txtPhoneNumber" class="addContactRow-field"  placeholder="Alternate PhoneNumber" /><button type="button" class="removePhone">X</button><p class="inline-error"></p></div>');

    $(document).on("click", ".removePhone", function() {
        $(this).parent("#parentDiv").remove();
        addressCounter = addressCounter - 1;
    });
}

function addAddress() {
    $(".addressDetails").append('<div id="parentDiv"><div><div class="address-row"><textarea class="addressRow-field" placeholder="Address"></textarea><p class="inline-error"></p></div><div class="countryState-row"><div><select id="txtCountry" name="txtCountry" class="countryState-field"><option value="">Select Country</option><option value="India">India</option><option value="USA">USA</option><option value="Australia">Australia</option></select><p class="inline-error"></p></div><div><select class="countryState-field" id="txtState"><option>Select State</option></select><p class="inline-error"></p></div></div><div class="cityPin-row"><div><input type="text" id="txtCity" name="txtCity" class="cityPin-field" placeholder="City" /><p class="inline-error"></p></div><div><input type="text" id="txtPin" name="txtPin" class="cityPin-field" placeholder="ZipCode" /><p class="inline-error"></p></div></div></div><div class="addressAddButton"><button type="button" class="addressRemove-button" style="background-color:red; color:white;background-color: red;color: white;padding: 8px;border: 0;margin: 8px;border-radius: 5px;">Remove Address</button></div></div>');

    $(document).on("click", ".addressRemove-button", function() {
        $(this).parents("#parentDiv").remove();

    });
}