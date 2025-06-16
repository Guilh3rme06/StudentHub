const users = [
    { nome: "Admin", nif: "000000000", email: "admin@example.com", password: "admin", permissao: 1 },
    { nome: "João Silva", nif: "123456789", email: "joao.silva@example.com", password: "123", permissao: 0 },
    { nome: "Maria Fernandes", nif: "987654321", email: "maria.fernandes@example.com", password: "123", permissao: 0 },
    { nome: "Pedro Gonçalves", nif: "112233445", email: "pedro.goncalves@example.com", password: "123", permissao: 0 },
    { nome: "Ana Oliveira", nif: "554433221", email: "ana.oliveira@example.com", password: "123", permissao: 0 },
    { nome: "Tiago Ribeiro", nif: "667788990", email: "tiago.ribeiro@example.com", password: "123", permissao: 0 },
    { nome: "Carla Sousa", nif: "998877665", email: "carla.sousa@example.com", password: "123", permissao: 0 },
    { nome: "Luís Martins", nif: "334455667", email: "luis.martins@example.com", password: "123", permissao: 0 },
    { nome: "Sofia Costa", nif: "112211223", email: "sofia.costa@example.com", password: "123", permissao: 0 },
    { nome: "Ricardo Mendes", nif: "223344556", email: "ricardo.mendes@example.com", password: "123", permissao: 0 },
    { nome: "Patrícia Almeida", nif: "445566778", email: "patricia.almeida@example.com", password: "123", permissao: 0 },
    { nome: "Helena Rodrigues", nif: "998877445", email: "helena.rodrigues@example.com", password: "123", permissao: 0 },
    { nome: "Bruno Moreira", nif: "556677889", email: "bruno.moreira@example.com", password: "123", permissao: 0 },
    { nome: "Margarida Santos", nif: "667788991", email: "margarida.santos@example.com", password: "123", permissao: 0 },
    { nome: "André Cardoso", nif: "112233557", email: "andre.cardoso@example.com", password: "123", permissao: 0 },
    { nome: "Diana Cunha", nif: "223344889", email: "diana.cunha@example.com", password: "123", permissao: 0 },
    { nome: "Filipe Neves", nif: "334455991", email: "filipe.neves@example.com", password: "123", permissao: 0 },
    { nome: "Catarina Lopes", nif: "445566113", email: "catarina.lopes@example.com", password: "123", permissao: 0 },
    { nome: "Paulo Rocha", nif: "556677335", email: "paulo.rocha@example.com", password: "123", permissao: 0 },
    { nome: "Mariana Costa", nif: "667788557", email: "mariana.costa@example.com", password: "123", permissao: 0 },
    { nome: "Vítor Nascimento", nif: "778899223", email: "vitor.nascimento@example.com", password: "123", permissao: 0 },
    { nome: "Rafaela Monteiro", nif: "889900445", email: "rafaela.monteiro@example.com", password: "123", permissao: 0 },
    { nome: "Hugo Ramos", nif: "990011667", email: "hugo.ramos@example.com", password: "123", permissao: 0 },
    { nome: "Sara Simões", nif: "101112334", email: "sara.simoes@example.com", password: "123", permissao: 0 },
    { nome: "Carlos Brito", nif: "112233446", email: "carlos.brito@example.com", password: "123", permissao: 0 },
    { nome: "Beatriz Pires", nif: "223344557", email: "beatriz.pires@example.com", password: "123", permissao: 0 },
    { nome: "Jorge Faria", nif: "334455669", email: "jorge.faria@example.com", password: "123", permissao: 0 },
    { nome: "Paula Martins", nif: "445566778", email: "paula.martins@example.com", password: "123", permissao: 0 },
    { nome: "Diogo Correia", nif: "556677990", email: "diogo.correia@example.com", password: "123", permissao: 0 },
    { nome: "Joana Santos", nif: "667788112", email: "joana.santos@example.com", password: "123", permissao: 0 },
    { nome: "Miguel Tavares", nif: "778899334", email: "miguel.tavares@example.com", password: "123", permissao: 0 },
    { nome: "Vanessa Almeida", nif: "889900556", email: "vanessa.almeida@example.com", password: "123", permissao: 0 },
    { nome: "António Carvalho", nif: "990011778", email: "antonio.carvalho@example.com", password: "123", permissao: 0 },
    { nome: "Sofia Monteiro", nif: "101112990", email: "sofia.monteiro@example.com", password: "123", permissao: 0 },
    { nome: "Bruno Lima", nif: "112233113", email: "bruno.lima@example.com", password: "123", permissao: 0 },
    { nome: "Carla Figueiredo", nif: "223344224", email: "carla.figueiredo@example.com", password: "123", permissao: 0 },
    { nome: "Pedro Mendes", nif: "334455446", email: "pedro.mendes@example.com", password: "123", permissao: 0 },
    { nome: "Inês Silva", nif: "445566557", email: "ines.silva@example.com", password: "123", permissao: 0 },
    { nome: "Luís Castro", nif: "556677669", email: "luis.castro@example.com", password: "123", permissao: 0 },
    { nome: "Diana Nunes", nif: "667788778", email: "diana.nunes@example.com", password: "123", permissao: 0 },
    { nome: "Eduardo Barbosa", nif: "778899889", email: "eduardo.barbosa@example.com", password: "123", permissao: 0 },
    { nome: "Tatiana Lopes", nif: "889900112", email: "tatiana.lopes@example.com", password: "123", permissao: 0 },
    { nome: "Rui Cardoso", nif: "990011224", email: "rui.cardoso@example.com", password: "123", permissao: 0 },
    { nome: "Fátima Fernandes", nif: "101112336", email: "fatima.fernandes@example.com", password: "123", permissao: 0 }
];


// LOGIN
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('form-login');
    if (loginForm) {

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            const user = users.find(user => user.nome.toLowerCase() === username.toLowerCase() && user.password === password);
            if (user) {
                if (user.permissao === 1) {
                    mostrarAdmin();
                } else {
                    mostrarUser(user);
                }
            } else {
                alert('Nome ou password incorretos!');
            }
        });
    }

    // Registo
    const registarForm = document.querySelector('.form-registar');
    if (registarForm) {
        registarForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('username').value.trim();
            const nif = document.getElementById('nif').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirm_password').value.trim();

            if (password !== confirmPassword) {
                alert("As passwords não coincidem!");
                return;
            }

            const existe = users.some(user => user.nome.toLowerCase() === nome.toLowerCase() || user.email.toLowerCase() === email.toLowerCase());
            if (existe) {
                alert("Já existe um utilizador com esse nome ou email!");
                return;
            }

            users.push({
                nome,
                nif,
                email,
                password,
                permissao: 0
            });

            alert("Registo efetuado com sucesso! Pode agora fazer login.");
            registarForm.reset();
        });
    }
});

function mostrarAdmin() {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <h2>Utilizadores registados</h2>
            <table class="tabela-utilizadores" border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>NIF</th>
                        <th>Email</th>
                        <th>Permissão</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => `
                        <tr>
                            <td>${user.nome}</td>
                            <td>${user.nif}</td>
                            <td>${user.email}</td>
                            <td>${user.permissao === 1 ? 'Admin' : 'User'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Função para mostrar dados do utilizador em secções
function mostrarUser(user) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <h2>Bem-vindo, ${user.nome}!</h2>
            <div class="cliente">
                <div><strong>NIF:</strong> ${user.nif}</div>
                <div><strong>Email:</strong> ${user.email}</div>
                <div><strong>Permissão:</strong> User</div>
            </div>
            <div>
                <h3>Serviços associados</h3>
                <div class="servicos">
                    <em>Nenhum serviço associado.</em>
                </div>
            </div>
        `;
    }
}