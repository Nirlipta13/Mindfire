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
        // $("#refreshIcon").hide();
        // $("#userResult").attr('disabled', 'disabled');
    }
    if (userResult !== 0 && expectedResult !== userResult) {
        $("#captchaResult").text("Oops!! Try Again");
        captchaGenerate();
        $("#userResult").val("");

    }
    if (globalData.IsFormvalid === false) {
        captchaGenerate();
        $("#userResult").val("");
        $("#captchaResult").text("");

    }



}