document.addEventListener("DOMContentLoaded", function () {
    // Redireciona para login se tentar acessar o painel sem estar logado
    if (window.location.pathname.startsWith("/painel/") && !localStorage.getItem("logado")) {
        window.location.href = "/index.html";
    }

    // Lógica de login
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let usuario = document.getElementById("usuario").value;
            let senha = document.getElementById("senha").value;

            if (usuario === "eliasempresas" && senha === "elias1@#$2Telefone") {
                localStorage.setItem("logado", "true"); // Salva estado de login
                window.location.href = "/painel/index.html";
            } else {
                document.getElementById("mensagemErro").innerText = "Usuário ou senha incorretos!";
            }
        });
    }

    // Logout
    let botaoLogout = document.getElementById("logout");
    if (botaoLogout) {
        botaoLogout.addEventListener("click", function () {
            localStorage.removeItem("logado");
            window.location.href = "/index.html";
        });
    }
});
