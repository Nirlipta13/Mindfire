function addPhonenumber() {
    $(".contact-row").append('<div id="parentDiv"><input type="text" name="txtPhoneNumber" class="addContactRow-field"  placeholder="Alternate PhoneNumber" /><button type="button" class="removePhone">X</button><p class="inline-error"></p></div>');

    $(document).on("click", ".removePhone", function() {
        $(this).parent("#parentDiv").remove();
    });
}

function addAddress() {
    $(".addressDetails").append('<div id="parentDiv"><div><div class="address-row"><textarea class="addAddressRow-field" placeholder="Address"></textarea><p class="inline-error"></p></div><div class="countryState-row"><div class="country-field"><select id="txtCountry" name="txtCountry" class="addCountry-field"><option value="">Select Country</option><option value="India">India</option><option value="USA">USA</option><option value="Australia">Australia</option></select><p class="inline-error country-error"></p></div><div class="state-field"><select class="addState-field" id="txtState"><option>Select State</option></select><p class="inline-error state-error"></p></div></div><div class="cityPin-row"><div class="city-field"><input type="text" id="txtCity" name="txtCity" class="addCity-field" placeholder="City" /><p class="inline-error city-error"></p></div><div class="pin-field"><input type="text" id="txtPin" name="txtPin" class="addPin-field" placeholder="ZipCode" /><p class="inline-error pin-error"></p></div></div></div><div class="addressAddButton"><button type="button" class="addressRemove-button" style="background-color:red; color:white;background-color: red;color: white;padding: 8px;border: 0;margin: 8px;border-radius: 5px;">Remove Address</button></div></div>');

    $(document).on("click", ".addressRemove-button", function() {
        $(this).parents("#parentDiv").remove();

    });
}