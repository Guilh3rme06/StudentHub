const users = [
    { nome: "Admin", nif: "000000000", email: "admin@example.com", password: "admin", permissao: 1, numero: "111111111" }, // Admin user
    { nome: "João Silva", nif: "123456789", email: "joao.silva@example.com", password: "123", permissao: 0, numero: "222222222"},
    { nome: "Maria Fernandes", nif: "987654321", email: "maria.fernandes@example.com", password: "123", permissao: 0, numero: "333333333"},
    { nome: "Pedro Gonçalves", nif: "112233445", email: "pedro.goncalves@example.com", password: "123", permissao: 0, numero: "444444444"},
    { nome: "Ana Oliveira", nif: "554433221", email: "ana.oliveira@example.com", password: "123", permissao: 0, numero: "555555555"},
    { nome: "Tiago Ribeiro", nif: "667788990", email: "tiago.ribeiro@example.com", password: "123", permissao: 0, numero: "666666666"},
    { nome: "Carla Sousa", nif: "998877665", email: "carla.sousa@example.com", password: "123", permissao: 0, numero: "777777777"},
    { nome: "Luís Martins", nif: "334455667", email: "luis.martins@example.com", password: "123", permissao: 0, numero: "888888888"},
    { nome: "Sofia Costa", nif: "112211223", email: "sofia.costa@example.com", password: "123", permissao: 0, numero: "999999999"},
    { nome: "Ricardo Mendes", nif: "223344556", email: "ricardo.mendes@example.com", password: "123", permissao: 0, numero: "011122334"},
    { nome: "Patrícia Almeida", nif: "445566778", email: "patricia.almeida@example.com", password: "123", permissao: 0, numero: "0223344556"},
    { nome: "Helena Rodrigues", nif: "998877445", email: "helena.rodrigues@example.com", password: "123", permissao: 0, numero: "0334455667"},
    { nome: "Bruno Moreira", nif: "556677889", email: "bruno.moreira@example.com", password: "123", permissao: 0, numero: "0444556677"},
    { nome: "Margarida Santos", nif: "667788991", email: "margarida.santos@example.com", password: "123", permissao: 0, numero: "0555566778"},
    { nome: "André Cardoso", nif: "112233557", email: "andre.cardoso@example.com", password: "123", permissao: 0, numero: "0666667778"},
    { nome: "Diana Cunha", nif: "223344889", email: "diana.cunha@example.com", password: "123", permissao: 0, numero: "0777778889"},
    { nome: "Filipe Neves", nif: "334455991", email: "filipe.neves@example.com", password: "123", permissao: 0, numero: "0888899990"},
    { nome: "Catarina Lopes", nif: "445566113", email: "catarina.lopes@example.com", password: "123", permissao: 0, numero: "0999000011"},
    { nome: "Paulo Rocha", nif: "556677335", email: "paulo.rocha@example.com", password: "123", permissao: 0, numero: "0011223344"},
    { nome: "Mariana Costa", nif: "667788557", email: "mariana.costa@example.com", password: "123", permissao: 0, numero: "0022334455"},
    { nome: "Vítor Nascimento", nif: "778899223", email: "vitor.nascimento@example.com", password: "123", permissao: 0, numero: "003344556"},
    { nome: "Rafaela Monteiro", nif: "889900445", email: "rafaela.monteiro@example.com", password: "123", permissao: 0, numero: "00445566778"},
    { nome: "Hugo Ramos", nif: "990011667", email: "hugo.ramos@example.com", password: "123", permissao: 0, numero: "00555667789"},
    { nome: "Sara Simões", nif: "101112334", email: "sara.simoes@example.com", password: "123", permissao: 0, numero: "0066778899"},
    { nome: "Carlos Brito", nif: "112233446", email: "carlos.brito@example.com", password: "123", permissao: 0, numero: "0077889900"},
    { nome: "Beatriz Pires", nif: "223344557", email: "beatriz.pires@example.com", password: "123", permissao: 0, numero: "00888990011"},
    { nome: "Jorge Faria", nif: "334455669", email: "jorge.faria@example.com", password: "123", permissao: 0, numero: "00999001122"},
    { nome: "Paula Martins", nif: "445566778", email: "paula.martins@example.com", password: "123", permissao: 0, numero: "00011223344"},
    { nome: "Diogo Correia", nif: "556677990", email: "diogo.correia@example.com", password: "123", permissao: 0, numero: "00022334455"},
    { nome: "Joana Santos", nif: "667788112", email: "joana.santos@example.com", password: "123", permissao: 0, numero: "000333445566"},
    { nome: "Miguel Tavares", nif: "778899334", email: "miguel.tavares@example.com", password: "123", permissao: 0, numero: "00444556677"},
    { nome: "Vanessa Almeida", nif: "889900556", email: "vanessa.almeida@example.com", password: "123", permissao: 0, numero: "00556677888"},
    { nome: "António Carvalho", nif: "990011778", email: "antonio.carvalho@example.com", password: "123", permissao: 0, numero: "00667788999"},
    { nome: "Sofia Monteiro", nif: "101112990", email: "sofia.monteiro@example.com", password: "123", permissao: 0, numero: "00778899000"},
    { nome: "Bruno Lima", nif: "112233113", email: "bruno.lima@example.com", password: "123", permissao: 0, numero: "1231231231"},
    { nome: "Carla Figueiredo", nif: "223344224", email: "carla.figueiredo@example.com", password: "123", permissao: 0, numero: "0099001122"},
    { nome: "Pedro Mendes", nif: "334455446", email: "pedro.mendes@example.com", password: "123", permissao: 0, numero: "2133213123"},
    { nome: "Inês Silva", nif: "445566557", email: "ines.silva@example.com", password: "123", permissao: 0, numero: "5412513245"},
    { nome: "Luís Castro", nif: "556677669", email: "luis.castro@example.com", password: "123", permissao: 0, numero: "7410986543"},
    { nome: "Diana Nunes", nif: "667788778", email: "diana.nunes@example.com", password: "123", permissao: 0, numero: "7491234567"},
    { nome: "Eduardo Barbosa", nif: "778899889", email: "eduardo.barbosa@example.com", password: "123", permissao: 0, numero: "1724567890"},
    { nome: "Tatiana Lopes", nif: "889900112", email: "tatiana.lopes@example.com", password: "123", permissao: 0, numero: "8120345678"},
    { nome: "Rui Cardoso", nif: "990011224", email: "rui.cardoso@example.com", password: "123", permissao: 0, numero: "1820345678"},
    { nome: "Fátima Fernandes", nif: "101112336", email: "fatima.fernandes@example.com", password: "123", permissao: 0, numero: "1270345678"},
];


// LOGIN
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um listener para o evento 'DOMContentLoaded', garantindo que o script só execute após o HTML ser completamente carregado.
    const loginForm = document.getElementById('form-login');
    // Obtém o elemento do formulário de login pelo seu ID.
    if (loginForm) {
        // Verifica se o formulário de login existe.

        loginForm.addEventListener('submit', function(event) {
            // Adiciona um listener para o evento 'submit' do formulário de login.
            event.preventDefault();
            // Previne o comportamento padrão de submissão do formulário, que recarregaria a página.
            const username = document.getElementById('login-username').value.trim();
            // Obtém o valor do campo de nome de usuário, removendo espaços em branco extras.
            const password = document.getElementById('login-password').value.trim();
            // Obtém o valor do campo de senha, removendo espaços em branco extras.

            const user = users.find(user => user.nome.toLowerCase() === username.toLowerCase() && user.password === password);
            // Procura na array 'users' por um usuário cujo nome e senha correspondam aos inseridos (ignorando maiúsculas/minúsculas para o nome).
            if (user) {
                // Se um usuário for encontrado:
                if (user.permissao === 1) {
                    // Se o usuário tiver permissão de administrador (permissao: 1):
                    mostrarAdmin();
                    // Chama a função para exibir a interface de administrador.
                } else {
                    // Se o usuário tiver permissão normal (permissao: 0):
                    mostrarUser(user);
                    // Chama a função para exibir a interface de usuário comum, passando os dados do usuário.
                }
            } else {
                // Se nenhum usuário for encontrado com as credenciais fornecidas:
                alert('Nome ou password incorretos!');
                // Exibe um alerta de erro.
            }
        });
    }

// REGISTO 
    const registarForm = document.querySelector('.form-registar');
    // Obtém o elemento do formulário de registro pela sua classe.
    if (registarForm) {
        // Verifica se o formulário de registro existe.
        registarForm.addEventListener('submit', function(event) {
            // Adiciona um listener para o evento 'submit' do formulário de registro.
            event.preventDefault();
            // Previne o comportamento padrão de submissão do formulário.
            const nome = document.getElementById('username').value.trim();
            // Obtém o nome do usuário do campo de registro.
            const nif = document.getElementById('nif').value.trim();
            // Obtém o NIF do campo de registro.
            const email = document.getElementById('email').value.trim();
            // Obtém o email do campo de registro.
            const password = document.getElementById('password').value.trim();
            // Obtém a senha do campo de registro.
            const confirmPassword = document.getElementById('confirm_password').value.trim();
            // Obtém a confirmação da senha do campo de registro.

            if (password !== confirmPassword) {
                // Verifica se as senhas digitadas não coincidem.
                alert("As passwords não coincidem!");
                // Exibe um alerta.
                return; // Interrompe a execução da função.
            }

            const existe = users.some(user => user.nome.toLowerCase() === nome.toLowerCase() || user.email.toLowerCase() === email.toLowerCase());
            // Verifica se já existe um usuário com o mesmo nome ou email (ignorando maiúsculas/minúsculas).
            if (existe) {
                // Se um usuário existente for encontrado:
                alert("Já existe um utilizador com esse nome ou email!");
                // Exibe um alerta.
                return; // Interrompe a execução da função.
            }

            users.push({
                // Adiciona um novo objeto de usuário à array 'users'.
                nome, // Nome do usuário.
                nif,  // NIF do usuário.
                email, // Email do usuário.
                password, // Senha do usuário.
                permissao: 0, // Define a permissão como 0 (usuário comum).
                numero: String(Math.floor(Math.random() * 9000000000) + 1000000000) // Gera um número de telefone aleatório.
            });

            alert("Registo efetuado com sucesso! Pode agora fazer login.");
            // Exibe um alerta de sucesso.
            registarForm.reset();
            // Limpa os campos do formulário de registro.
        });
    }
});

// Parte Admin
function mostrarAdmin() {
    // Função para exibir a interface de administrador.
    const main = document.querySelector('main');
    // Obtém o elemento <main> da página.
    if (main) {
        // Se o elemento <main> existir:
        main.innerHTML = `
            <h2 class="title-page" >Utilizadores registados</h2>
            <table class="tabela-utilizadores" border="1">
                <thead class="tabela-head">
                    <tr>
                        <th>Nome</th>
                        <th>NIF</th>
                        <th>Email</th>
                        <th>Número</th>
                    </tr>
                </thead>
                <tbody class="tabela-body">
                    ${users.map(user => `
                        <tr>
                            <td class="tabela-head">${user.nome}</td>
                            <td>${user.nif}</td>
                            <td>${user.email}</td>
                            <td>${user.numero}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        // Insere o HTML da tabela de usuários registrados no elemento <main>.
        // Ele itera sobre a array 'users' para criar uma linha de tabela para cada usuário.
    }
}

// Parte Users
function mostrarUser(user) {
    // Função para exibir a interface de usuário comum.
    const main = document.querySelector('main');
    // Obtém o elemento <main> da página.
    if (main) {
        // Se o elemento <main> existir:
        main.innerHTML = `
            <div class="user-info">
            <h2 class="title-user">Bem-vindo, ${user.nome}!</h2>
                <div class="cliente">
                    <div><strong>NIF:</strong> ${user.nif}</div>
                    <div><strong>Email:</strong> ${user.email}</div>
                    <div><strong>Número:</strong> ${user.numero}</div>
                </div>
                <div class="eventos">
                    <h3 class="title-event">Escolha seu Evento</h3>
                    <p>Selecione um evento para ver mais detalhes.</p>
                    <ul>
                        <li class="link-eventos"><a class="link" href="espacoeeventos.html#Demonstracao">Demonstração do StudentHub</a></li>
                        <li class="link-eventos"><a class="link" href="espacoeeventos.html#Feira">Feira de Estágios e Demonstrações do StudentHub</a></li>
                        <li class="link-eventos"><a class="link" href="espacoeeventos.html#biblioteca-digital">Inauguração da Biblioteca Digital</a></li>
                        <li class="link-eventos"><a class="link" href="espacoeeventos.html#Formacao">Sessão de Formação Especial para Novos Alunos</a></li>         
                        <li class="link-eventos"><a class="link" href="espacoeeventos.html#Espaco">Tour pelos Novos Espaços de Estudos</a></li>         
                        <li class="link-eventos"><a class="link" href="espacoeeventos.html#Boas-Vindas">Boas-Vindas para Estudantes</a></li>         
                    </ul>
                </div>
            </div>
        `;
        // Insere o HTML de boas-vindas do usuário e a lista de eventos no elemento <main>.
        // Ele exibe as informações do usuário logado e links para páginas de eventos.
    }
}