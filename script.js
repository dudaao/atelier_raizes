document.addEventListener("DOMContentLoaded", () => {
    // 1. Ativa a entrada rápida do conteúdo
    document.body.classList.add("page-loaded");

    // 2. Captura os links do menu
    const menuLinks = document.querySelectorAll("nav a, .logo");

    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            if (targetUrl && !targetUrl.startsWith("#") && targetUrl !== "#") {
                e.preventDefault();

                // Ativa a saída rápida
                document.body.classList.add("page-exit");

                // Espera apenas 200ms (tempo exato do novo CSS) e muda de página
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 200);
            }
        });
    });
});