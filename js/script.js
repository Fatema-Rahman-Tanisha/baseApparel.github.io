email = /[a-z]+\w+@[gmail || hotmail || yahoo || outlook || iCloud]+\.com/g;
console.log(email.exec('syedaevaba@hotmail.com'))
inputDesk = document.getElementById('emailDesk');
formDesk = document.getElementById('desk');

formDesk.addEventListener('submit',(e)=>{
    e.preventDefault() 
if (email.exec(inputDesk.value) == null) {
    alert('Your email address is not found!');
}
else{
    alert('Thanks , your email address has been successfully saved')
}
})
inputMobile = document.getElementById('emailMobile');
formMobile = document.getElementById('mobile');
formMobile.addEventListener('submit',(e)=>{
    e.preventDefault() 
if (email.exec(inputMobile.value) == null) {
    alert('Your email address is not found!');
}
else{
    alert('Thanks , your email address has been successfully saved')
}
})