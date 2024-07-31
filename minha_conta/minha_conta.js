window.onload = function() {
    if(localStorage.getItem('isLoggedIn') === 'true'){
        const email = localStorage.getItem('loggedInUser');
        const user = JSON.parse(localStorage.getItem(email));
        
        if (user){
            document.getElementById('ola_nome').innerText = `Olá ${user.nome}!`;
            const userInfo = 
                `<p><strong>Nome: </strong> ${user.nome}</p>
                 <p><strong>Email: </strong> ${email}</p>
                 <p><strong>Celular: </strong> ${user.celular}</p>
                 <p><strong>Data de nascimento: </strong> ${user.dataNasc}</p>
                 <p><strong>Endereço: </strong> ${user.endereco}</p>`;

                 document.getElementById('user_info').innerHTML = userInfo;
        } else {
            alert('Sua sessão expirou, faça login novamente.');
            window.location.href('../login/login.html');
        }

    } else {
        alert('Você precisa estar logado para acessar esta págin.');
        window.location.href('../login/login.html');
    }
}