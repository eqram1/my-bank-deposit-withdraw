document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('login iin js files');
    const emailfield = document.getElementById('useremail');
    const email = emailfield.value;
    // console.log(email);
    const passwordfield = document.getElementById('userpassword');
    const password = passwordfield.value;
    // console.log(password);
    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href('valid user');
    }
    else {
        alert('invalid user');
    }
})