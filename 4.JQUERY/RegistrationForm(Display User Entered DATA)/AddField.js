function addPhonenumber() {
    $(".contact-row").append('<div id="parentDiv" ><label class="lbl-heading">Alternate Phone Number<span class="astreik-mark">*</span></label><br/><input type="text" name="txtPhoneNumber" class="addContactRow-field"  placeholder="Alternate PhoneNumber" /><button type="button" class="removePhone">X</button><p class="inline-error"></p></div>');

    $(document).on("click", ".removePhone", function() {
        $(this).parent("#parentDiv").remove();
    });
}

function addAddress() {
    var counter = 1;
    var htmlDiv = $(".parent-address").html();
    $(".addressDetails").append(htmlDiv);

    $(document).on("click", ".addressRemove-button", function() {
        $(this).parents('#parent').remove();

    });
}

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