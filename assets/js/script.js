const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const statusMessage = document.getElementById("status-message");
const submitButton = document.getElementById("submit-button");
const contactToggle = document.getElementById("contact-toggle");
const contactModal = document.getElementById("contact-modal");
const contactClose = document.getElementById("contact-close");
const contactForm = document.getElementById("contact-form");

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


if (
    contactToggle &&
    contactModal &&
    contactClose &&
    contactForm
) {
    contactToggle.addEventListener("click", () => {   
    contactModal.hidden = false;
    });

    contactClose.addEventListener("click", () => {   
    contactModal.hidden = true;
    });
    
    contactModal.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            statusMessage.textContent = "";
            statusMessage.hidden = false; 
            contactModal.hidden = true;
        }
    });
    
    contactForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        const name = contactForm.elements["name"].value;
        const email = contactForm.elements["email"].value;
        const subject = contactForm.elements["subject"].value;
        const message = contactForm.elements["message"].value;
        const formData = {
            name,
            email,
            subject,
            message
        };
        

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        // if (result.success) {
        //     statusMessage.textContent = result.message;
        //     statusMessage.style.color = "green";
        //     contactForm.reset();

        //     setTimeout(() => {
        //         contactModal.hidden = true;
        //         statusMessage.textContent = "";
        //     }, 2000);
        // } else {
        //     statusMessage.textContent = result.message;
        //     statusMessage.style.color = "red";
        // }
        
        // submitButton.disabled = false;
        // submitButton.textContent = "Send Message"; 
        try{
            const response = await fetch(
                "https://1ybizv66d0.execute-api.ap-northeast-1.amazonaws.com/test/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            const result = await response.json();
            if(result.success) {
                statusMessage.textContent = result.message;
                statusMessage.style.color = "green";
                contactForm.reset();
    
                setTimeout(() => {
                    contactModal.hidden = true;
                    statusMessage.textContent = "";
                }, 800);
            } else {
                statusMessage.textContent = result.message;
                statusMessage.style.color = "red";
            }
        } catch (error) {
            statusMessage.textContent = "An error occurred while sending the message. Please try again later.";
            statusMessage.style.color = "red";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message"; 
        }

        
    });
}  

