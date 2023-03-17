
//UC1-FirstName Validation
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent="Name is Incorrrect!"
});
console.log(text);

// UC2-Email validation
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener("input", function () {
    let emailRegex = RegExp(
        "^[a-zA-Z.]+@(.+)$"
    );
    if (emailRegex.test(email.value))
     emailError.textContent = "";
    else emailError.textContent = "Email is Incorrect!";
});
console.log(email);

//UC3-Mobile Validation
  const number = document.querySelector("#Number");
 const numberError = document.querySelector(".Number-error");
 number.addEventListener("input", function () {
     let numberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
     if (numberRegex.test(number.value)) 
     numberError.textContent = " ";
     else numberError.textContent = "Number is Incorrect!";
 });
 console.log(number);

//UC 4&5-Password Validation
 const password = document.querySelector("#pwd");
 const passwordError = document.querySelector(".pwd-error");
 pwd.addEventListener("input", function () {
     let passwordRegex = RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[!@#$%^&*()-_+=]{1}.{8,}$");
     if (passwordRegex.test(password.value)) 
     passwordError.textContent = " ";
     else passwordError.textContent = "Password is Incorrect!";
 });
 console.log(pwd); 

//Salary range
const Salary=document.querySelector('#Salary');
const Output=document.querySelector('.Salary-Output');
Output.textContent=Salary.value;
Salary.addEventListener('input',function(){
    Output.textContent=Salary.value;
});