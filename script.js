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


// Back to Top Button
const toTheTop = document.getElementById("tothetop");

if (toTheTop) {

  window.addEventListener("scroll", () => {
    toTheTop.style.display = window.scrollY > 200 ? "block" : "none";
  });

  
  toTheTop.addEventListener("click", () => {
    smoothScrollToTop();
  });
}

function smoothScrollToTop() {
  const start = window.scrollY;
  const duration = 600;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); 
    const ease = 1 - Math.pow(1 - progress, 3); 

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
