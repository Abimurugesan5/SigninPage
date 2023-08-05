const form= document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInputs()
})
function checkInputs(){
    //check if inputs are empty or not
    //trim used to remove whitespace
    const userValue = username.value.trim();
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(userValue === ''){
        setErrorFor(username,'Username cannot be blank')
    }
    else{
        setSuccessFor(username)
    }
 if(emailValue ===''){
    setErrorFor(email,"Email cannot be blank" )
 }   else if(!isEmail(emailValue)){
    setErrorFor(email, "Invalid Email")
 } else{
    setSuccessFor(email);
 }
 if (passwordValue ===""){
    setErrorFor(password,"Password Cannot Be Blank");

}
else  {
    setSuccessFor(password)
}
if(password2Value === ''){
    setErrorFor(password2,"Confirm Password Field Can't Be Empty!")
}
else if (passwordValue !== password2Value){
    setErrorFor(password2,"Passwords Do Not Match!");
}
else{
    setSuccessFor(password2)
}
}
 function setErrorFor(input, message){
    const formControl= input.parentElement;
    const small = formControl.querySelector("smal");
    formControl.className = 'form-vontrol error';
    small.innerText = message;
 }
 function setSuccessFor(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
 }
 function isEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+[a-zA]{2,})$/.test(email)
 }
