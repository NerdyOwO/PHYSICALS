function initNavAndHash() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.dataset.target; 
      const page = this.dataset.page;       
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

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  }
}

// Run init whether DOMContentLoaded has already fired or not
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavAndHash);
} else {
  initNavAndHash();
}

 
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

