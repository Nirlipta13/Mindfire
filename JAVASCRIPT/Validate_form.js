function submit_btn() {
    var fname = document.forms["registration_form"]["fname"].value;
    var lname = document.forms["registration_form"]["lname"].value;
    var email = document.forms["registration_form"]["email"].value;
    var pwd = document.forms["registration_form"]["pwd"].value;
    var confirm_pwd = document.forms["registration_form"]["confirm_pwd"].value;
    var phno = document.forms["registration_form"]["phno"].value;
    var address = document.forms["registration_form"]["address"].value;
    var city = document.forms["registration_form"]["city"].value;
    var state = document.getElementById("slist").value;
    var country = document.getElementById("clist").value;
    var select = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < select.length; i++) {
        if (select[i].checked) {
            gender = select[i].value;
        }

    }
    //Checking for empty input
    if (fname === "" || lname === "" || email === "" || pwd === "" || confirm_pwd === "" || gender === "" || phno === "" || address === "" || city === "" || state === "" || country === "") {
        alert("Fill the fields indicated with star mark");
        document.getElementById("submit_btn").innerHTML = "";
    }


    //Email Validation
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!pattern.test(email)) {
        alert("please provide a valid email");

    }

    //Phone number validation
    if (phno.length !== 10 && phno !== "") {
        alert("Enter valid 10-digit phone number");
        document.getElementById("submit_btn").innerHTML = "";
    }

    //Password length Validation
    if (pwd.length != 6 && pwd !== "") {
        alert("Password must be atleast 6 characters");
        document.getElementById("submit_btn").innerHTML = "";
    }

    //Password Match
    if (pwd !== confirm_pwd) {
        alert("Password doesn't match. Re-type password correctly");
        document.getElementById("submit_btn").innerHTML = "";
    }

}

function captcha_generation() {
    var op_arr = ["+", "-", "*", "/"];
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var op = document.getElementById("op");
    var no1 = Math.floor((Math.random() * 100) + 1);
    var no2 = Math.floor((Math.random() * 100) + 1);
    if (no1 > no2) {
        num1.innerHTML = no1;
        num2.innerHTML = no2;
    } else {
        num1.innerHTML = no2;
        num2.innerHTML = no1;
        no1 = no2;
        no2 = no1;
    }
    var opr = op_arr[Math.floor(Math.random() * 4)];
    op.innerHTML = opr;
    document.getElementById("user_result").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("submit_btn").innerHTML = "";
}

function captcha_verification() {
    var no1 = Number(document.getElementById("num1").textContent);
    var no2 = Number(document.getElementById("num2").textContent);
    var opr = document.getElementById("op").textContent;
    var expected_result;
    switch (opr) {
        case '+':
            expected_result = no1 + no2;
            break;
        case '-':
            expected_result = no1 - no2;
            break;
        case '*':
            expected_result = no1 * no2;
            break;
        case '/':
            expected_result = Math.round(no1 / no2);
            break;
    }
    var user_result = Number(document.getElementById("user_result").value);
    if (user_result === "") {
        alert("Fill the result");
    }
    if (user_result !== "" && expected_result === user_result) {
        document.getElementById("result").innerHTML = "Hooray!! Its correct";
        var btn = document.createElement("button");
        btn.innerHTML = "SUBMIT";
        document.getElementById("submit_btn").appendChild(btn);
        btn.addEventListener('click', submit_btn);
    }
    if (user_result !== "" && expected_result !== user_result) {
        document.getElementById("result").innerHTML = "Oops!! Try again";
    }
}