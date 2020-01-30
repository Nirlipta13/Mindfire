$(document).ready(function() {
    captchaGenerate();
    $("#submitBtn").click(function() {
        checkBlank();
        captchaVerify();
    });
    $("#refreshIcon").click(function() {
        captchaGenerate();
    });
});