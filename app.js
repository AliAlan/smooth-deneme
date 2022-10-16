gsap.registerPlugin(ScrollTrigger);
let sections = document.querySelector(".horizontal-container");
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".animate2",
      start: "top 50% ",
      end: "bottom 25%",
      ease: Power2.easeOut,
      toggleActions: "restart pause reverse reverse",
    },
  })
  .from(".animate1", {
    scale: 0.8,
  })
  .to(".animate1", {
    scale: 1.4,
    rotate: 90,

    ease: Sine.easeOut,
  })
  .to(".animate2", {
    y: "-150vh",
    duration: 1,
  });

function pageTransition() {
  let tl = gsap.timeline();
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom right",
    stagger: 0.1,
    delay: 0.1,
  });

  // .to(sections, {
  //   x: () =>
  //     -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: sections,
  //     invalidateOnRefresh: true,
  //     pin: true,
  //     scrub: 1,
  //     end: () => "+=" + sections.offsetWidth,
  //   },
  // });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1500);
        done();
      },
    },
  ],
});
