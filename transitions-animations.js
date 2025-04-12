import barba from "https://unpkg.com/@barba/core?module";

// Init barba
barba.init({
  transitions: [
    {
      name: "fade",
      once({ next }) {
        return new Promise((resolve) => {
          next.container.classList.add("barba-once");
          requestAnimationFrame(() => {
            next.container.classList.add("barba-once-active", "barba-once-to");
            setTimeout(resolve, 1000);
          });
        });
      },
      leave({ current }) {
        return new Promise((resolve) => {
          current.container.style.transition = "opacity 0.5s ease";
          current.container.style.opacity = 0;
          setTimeout(resolve, 500);
        });
      },
      enter({ next }) {
        next.container.style.opacity = 0;
        next.container.style.transition = "opacity 0.5s ease";
        requestAnimationFrame(() => {
          next.container.style.opacity = 1;
        });
        runLayoutScripts(next.container);
      },
    },
  ],
});
