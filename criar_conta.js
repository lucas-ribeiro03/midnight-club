document.getElementById('form_cadastro').addEventListener('submit', function(event){
    event.preventDefault();

    const celular = document.getElementById('cadastro_celular').value;
    const email = document.getElementById('cadastro_email').value;
    const senha = document.getElementById('cadastro_senha').value;
    const dataNasc = document.getElementById('cadastro_data_nasc').value;
    const nome = document.getElementById('cadastro_nome').value;
    const endereco = document.getElementById('cadastro_endereco').value;

    if(localStorage.getItem(email)){
        alert('Este email já está cadastrado.');
    } else {
        const user = {
            celular: celular, 
            senha: senha,
            dataNasc: dataNasc,
            nome: nome,
            endereco: endereco
        };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Conta criada com sucesso!');
        window.location.href = 'login.html';
    }
});