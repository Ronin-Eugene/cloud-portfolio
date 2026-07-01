const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
    root.dataset.theme = theme;

    if (!themeToggle || !themeToggleText) {
        return;
    }

    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggleText.textContent = isDark ? "Light" : "Dark";
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    });
}
