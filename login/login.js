document.getElementById('login_form').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('login_email').value;
    const senha = document.getElementById('login_senha').value;

    const storedUser = localStorage.getItem(email);

    if(!storedUser){
        alert('Email não cadastrado. Por favor, crie uma conta.');
        window.location.href = '../cadastro/criar_conta.html';
    } else {
        const user = JSON.parse(storedUser);
        if (user.senha === senha){
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInUser', email);
            alert('Login realizado com sucesso!');
            window.location.href = '../index.html';
        } else {
            alert('Senha incorreta!');
        }
    }
});

window.onload = function(){
    if(localStorage.getItem('isLoggedIn') === 'true'){
        document.getElementById('login-link').innerText = 'Minha conta';
        document.getElementById('login-link').href - 'minha_conta.html';
    }
};
