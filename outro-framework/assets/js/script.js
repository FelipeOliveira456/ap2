// Seleciona elementos
var root = document.documentElement;
var btn = document.getElementById("themeToggle");
var navToggle = document.getElementById("navToggle");
var navContent = document.getElementById("navContent");
var yearEl = document.getElementById("year");

// Função para aplicar o tema
function applyTheme(theme) {
    // Define o tema no HTML
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
    // Salva no localStorage
    localStorage.setItem("theme", theme);
    // Se o botão existir, atualiza o ícone
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

// Verifica se já existe tema salvo
var savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

// Evento de clique no botão
if (btn) {
    btn.addEventListener("click", function () {
        if (root.classList.contains("dark")) {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }
    });
}

if (navToggle && navContent) {
    navToggle.addEventListener("click", function () {
        navContent.classList.toggle("hidden");
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
