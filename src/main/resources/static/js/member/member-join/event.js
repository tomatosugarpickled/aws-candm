const emailInput = document.querySelector(".emailwrite")
const button = document.querySelector(".goingbutton");
const errorInput = document.querySelector(".email-inner");
const dupicationMessage = document.getElementById("duplication-message");
let check = false;
let emailCheck = false;
let passwordCheck = false;
let temp = errorInput.style.cssText;

console.log(button)

emailInput.addEventListener("blur", (e) => {
    memberService.checkEmail(e.target.value, (isAvailable) => {
        check = isAvailable;
        console.log(isAvailable)
        if(check){
            if(dupicationMessage){
                dupicationMessage.style.display = "none";
            }
            errorInput.style.cssText = temp;
            emailCheck = true;
        } else {
            if(dupicationMessage){
                dupicationMessage.style.display = "block";
            }
            errorInput.style.border = "1.5px solid red";
            emailCheck = false;
        }
        // emailInput.value = isAvailable ? "사용 가능한 이메일입니다." : "중복된 이메일입니다.";
    });
});

const passwordInput = document.querySelector(".passwordwrite")
const passwordConfirm = document.querySelector(".passwordconfirmwrite");
const passErrorinput = document.querySelector(".passwordconfirm-inner")
const dupicationPassword = document.getElementById("duplication-password");
let passtemp = passErrorinput.style.cssText

passwordConfirm.addEventListener("blur", (e) => {

    if(passwordInput.value === passwordConfirm.value){
        dupicationPassword.style.display = "none";
        passErrorinput.style.cssText = passtemp;
        passwordCheck = true;
    }
    else{
        dupicationPassword.style.display = "block";
        passErrorinput.style.border = "1.5px solid red";
        passwordCheck = false;
    }
})


const allInputs = document.querySelectorAll("input");
console.log(allInputs);

button.addEventListener("click", (e) => {
    e.preventDefault();
    let isAllFilled = true;

    allInputs.forEach(input => {
        if(input.value.trim() === ""){
            isAllFilled = false;
        }
    })

    if(!isAllFilled){
        alert("모든 항목을 입력해주세요.")
        return;
    }

    if(emailCheck === false){
        alert("이메일을 다시 입력해주세요.")
        return;
    }
    if(passwordCheck === false){
        alert("비밀번호를 확인해주세요.")
        return;
    }



    if(check) {
        document.joinForm.submit();
    }
});