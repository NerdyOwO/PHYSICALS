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

toTheTop.addEventListener("click", () => {
  const scrollDuration = 600; 
  const scrollStep = -window.scrollY / (scrollDuration / 16);

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 16); 
});
