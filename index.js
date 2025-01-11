const prompt = require('prompt-sync')();

var userLogin = "Giovanna";
var userPassword = "12345678";
var attempts = 0;

const header = `
=======================================
                LOGIN
=======================================
`;
const end = `
=======================================
      Login efetuado com sucesso!
=======================================
      Bem vindo(a),`;

// Início login
while(attempts < 3){
    console.log(header);
   
    const user = prompt("Usuário: ");
    var password = prompt("Senha: ");
   
    while(password.length < 8) {
        console.log("Sua senha precisa conter 8 dígitos.");
        password = prompt("Senha: ");
    }

    if(user != userLogin || password != userPassword){
        attempts++;
        console.clear();
        console.log("\nAs credenciais são inválidas.\nTente novamente.\n");
        continue;
    }
    else{
        console.log(end, user);
        break;
    }
}

// Início cadastro
if(attempts >= 3){
    console.log(`
        Estas credenciais não pertencem a um
        cadastro existente, crie uma conta.
        =================================
                    CRIAR CONTA
        =================================`);

        var userLogin = prompt("Crie um usuário: ");
        var userPassword = prompt("Crie uma senha: ");
        
    while(userPassword.length < 8){
        console.log("Sua senha precisa conter 8 dígitos.");
        userPassword = prompt("Crie uma senha: ");
        }

    console.log("Seu cadastro foi efetuado com sucesso.");

    attempts = 0;
// Login cadastrado
    while(attempts < 3){
        console.log(header);

        const user = prompt("Usuário: ");
        var password = prompt("Senha: ");
        
        while(password.length < 8){
            console.log("Sua senha precisa conter 8 dígitos.");
            password = prompt("Senha: ");
        }

        if(user != userLogin || password != userPassword){
            attempts++;
            console.clear();
            console.log("\nAs credenciais são inválidas.\nTente novamente.\n");
            continue;
        }
        else{
            console.log(end, user);
            break;
        }
    }
}