// JavaSdocument.addEventListener("DOMContentLoaded", () => {
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("data-target");
        const page = this.getAttribute("data-page");

        if (page && page !== window.location.pathname.split("/").pop()) {

            window.location.href = `${page}#${targetId}`;
        } else {

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
