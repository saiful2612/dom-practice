document.getElementById('login-button').addEventListener('click',function(){
    
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail=emailField.value;
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword=passwordField.value;


    if(userEmail == 'sontan@baap.com' && userPassword =='secret'){
        window.location.href='banking-page.html';
    }
    else{
        const alertSign= document.getElementById('alert-sign');
        const newBoard =document.createElement('p');
        newBoard.innerText="User Invalid ! Enter correct Email & Password";
        alertSign.appendChild(newBoard);
    }
})