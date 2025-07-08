document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".angled-img-wrapper");

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseenter", () => {
      wrapper.querySelector('.angled-img').style.transform = 'scale(1.1)';
      wrapper.style.zIndex = '10';
      wrappers.forEach((w, i) => {
        if (w !== wrapper) {
          w.querySelector('.angled-img').style.margin = '0 1rem';
        }
      });
    });

    wrapper.addEventListener("mouseleave", () => {
      wrapper.querySelector('.angled-img').style.transform = 'scale(1)';
      wrapper.style.zIndex = '1';
      wrappers.forEach((w) => {
        w.querySelector('.angled-img').style.margin = '0';
      });
    });
  });
});