document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("data-target");
      const page = this.getAttribute("data-page");

     
      const currentPage = window.location.pathname.split("/").pop() || "index.html";

      if (page && page !== currentPage) {
       
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
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});


const toTheTop = document.getElementById("tothetop");

if (toTheTop) {
  window.addEventListener("scroll", () => {
    toTheTop.style.display = window.scrollY > 200 ? "block" : "none";
  });

  toTheTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
