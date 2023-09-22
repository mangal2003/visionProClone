if (window.innerWidth > 832) {
  gsap.to("#page1", {
    opacity: 0.5,
    scale: 0.8,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      end: "bottom 500",
      scrub: 3,
      pin: true,
    },
  });

  gsap.to("#page2 span", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      scrub: 3,
      end: "bottom 500",
      pin: true,
    },
  });

  gsap.to("#page3 span", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      scrub: 3,
      end: "bottom 500",
      pin: true,
    },
  });

  gsap.to("#page4 span", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      scrub: 3,
      end: "bottom 500",
      pin: true,
    },
  });

  gsap.to("#page5 span", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      scrub: 3,
      end: "bottom 500",
      pin: true,
    },
  });

  gsap.to("#page6 img,#page6 span", {
    transform: "translateY(-15vh)",
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      pin: true,
      scrub: true,
      end: "bottom 550",
    },
  });

  gsap.to("#page7 #h3,#page7 #pTop", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
      pin: true,
      scrub: true,
      end: "bottom 750",
    },
  });

  gsap.to("#page8 #h3,#page8 #pTop", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page8",
      scroller: "body",
      pin: true,
      scrub: true,
      end: "bottom 750",
    },
  });

  gsap.to("#page9 #h3,#page9 #pTop", {
    transform: "translateY(-80vh)",
    scrollTrigger: {
      trigger: "#page9",
      scroller: "body",
      pin: true,
      scrub: true,
      end: "bottom 750",
    },
  });

  gsap.to("#page10 #h3,#page10 #pTop", {
    transform: "translateY(-80vh)",
    scrollTrigger: {
      trigger: "#page10",
      scroller: "body",
      pin: true,
      scrub: true,
      end: "bottom 750",
    },
  });
}

// previous one
gsap.to("#navBar #navFixed", {
  transform: "translateY(-2em)",
  duration: "0.001",
  scrollTrigger: {
    trigger: "#navBar",
    scroller: "body",
    start: "top -12px",
    end: "top -25px",
    scrub: true,
  },
});

let slide_1 = document.getElementById("slide1");
let slide_2 = document.getElementById("slide2");
let slide_3 = document.getElementById("slide3");

let btn1 = document.getElementById("controller1");
let btn2 = document.getElementById("controller2");
let btn3 = document.getElementById("controller3");

function slide1() {
  slide_1.classList.add("indexupslide");
  slide_2.classList.remove("indexupslide");
  slide_1.classList.remove("indexupslide");
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
}

function slide2() {
  slide_1.classList.remove("indexupslide");
  slide_2.classList.add("indexupslide");
  slide_1.classList.remove("indexupslide");
  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
}

function slide3() {
  slide_1.classList.remove("indexupslide");
  slide_2.classList.remove("indexupslide");
  slide_1.classList.add("indexupslide");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
}

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  backgroundColor: "black",
  color: "white",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page6",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page7",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page8",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page9",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page10",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page11",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page12",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  backgroundColor: "black",
  color: "white",
  scrollTrigger: {
    trigger: "#page14",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page15",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page16",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  color: "white",
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    start: "top -12px",
    end: "bottom 25px",
    scrub: true,
  },
});

gsap.to("#navBar #navFixed", {
  duration: "0.001",
  backgroundColor: "white",
  color: "black",
  scrollTrigger: {
    trigger: "#page13",
    scroller: "body",
    start: "top -12px",
    end: "top 25px",
    scrub: true,
  },
});

function open_wrapper1() {
  let wrapper1 = document.getElementById("wrapper1");
  wrapper1.classList.remove("none");
}

function close_wrapper1() {
  let wrapper1 = document.getElementById("wrapper1");
  wrapper1.classList.add("none");
}

function open_wrapper2() {
  let wrapper2 = document.getElementById("wrapper2");
  wrapper2.classList.remove("none");
}

function close_wrapper2() {
  let wrapper2 = document.getElementById("wrapper2");
  wrapper2.classList.add("none");
}

function open_wrapper3() {
  let wrapper3 = document.getElementById("wrapper3");
  wrapper3.classList.remove("none");
}

function close_wrapper3() {
  let wrapper3 = document.getElementById("wrapper3");
  wrapper3.classList.add("none");
}

function open_wrapper4() {
  let wrapper4 = document.getElementById("wrapper4");
  wrapper4.classList.remove("none");
}

function close_wrapper4() {
  let wrapper4 = document.getElementById("wrapper4");
  wrapper4.classList.add("none");
}

function open_wrapper5() {
  let wrapper5 = document.getElementById("wrapper5");
  wrapper5.classList.remove("none");
}

function close_wrapper5() {
  let wrapper5 = document.getElementById("wrapper5");
  wrapper5.classList.add("none");
}

function open_wrapper6() {
  let wrapper6 = document.getElementById("wrapper6");
  wrapper6.classList.remove("none");
}

function close_wrapper6() {
  let wrapper6 = document.getElementById("wrapper6");
  wrapper6.classList.add("none");
}

function open_wrapper7() {
  let wrapper7 = document.getElementById("wrapper7");
  wrapper7.classList.remove("none");
}

function close_wrapper7() {
  let wrapper7 = document.getElementById("wrapper7");
  wrapper7.classList.add("none");
}

function open_wrapper8() {
  let wrapper8 = document.getElementById("wrapper8");
  wrapper8.classList.remove("none");
}

function close_wrapper8() {
  let wrapper8 = document.getElementById("wrapper8");
  wrapper8.classList.add("none");
}
