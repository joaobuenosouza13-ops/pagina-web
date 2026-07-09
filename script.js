document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");

    if (!botao) return;

    botao.addEventListener("click", () => {
        // Muda o conteúdo da página
        const card = document.querySelector(".card");

        card.innerHTML = `
            <h1>🚀 Bem-vindo ao JavaScript!</h1>

            <p>
                Você acabou de executar seu primeiro script!
            </p>

            <p>
                Continue estudando HTML, CSS e JavaScript.
                Cada projeto é um passo importante para se tornar
                um desenvolvedor.
            </p>

            <h2>Próximos passos</h2>

            <ul>
                <li>✔ Aprender JavaScript</li>
                <li>✔ Manipular o DOM</li>
                <li>✔ Criar projetos</li>
                <li>✔ Publicar no GitHub</li>
            </ul>

            <button id="reiniciar">Voltar</button>
        `;

        // Botão para voltar à página original
        const reiniciar = document.getElementById("reiniciar");

        reiniciar.addEventListener("click", () => {
            location.reload();
        });
    });

    // Animação de entrada
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.8s";

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 100);
});
