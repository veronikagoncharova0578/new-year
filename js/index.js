document.addEventListener("DOMContentLoaded", () => {
  var lightswitch = document.getElementById("switch"),
    on = false;
  lightswitch.addEventListener("click", toggleLights, false);

  TweenMax.set(".switchnob", { y: "+=90" });

  var tl = new TimelineMax({ delay: 0.5 });

  function toggleLights() {
    if (on) {
      on = false;
      TweenMax.to(".light", 0.2, { filter: "", opacity: 0.55 });
      TweenMax.to(".switchnob", 0.2, { y: "+=90" });
    } else {
      TweenMax.to(".switchnob", 0.2, { y: "-=90" });
      TweenMax.staggerTo(
        ".light",
        0.5,
        { filter: "url('#glow')", opacity: 1 },
        0.04
      );
      on = true;
    }
  }

  TweenLite.set(".anim-container", { perspective: 600 });

  var total = 30;
  var warp = document.getElementById("container"),
    w = window.innerWidth,
    h = window.innerHeight;

  for (i = 0; i < total; i++) {
    var Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200)
    });
    warp.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    TweenMax.to(elm, R(6, 15), {
      y: h + 100,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -15
    });
    TweenMax.to(elm, R(4, 8), {
      x: "+=100",
      rotationZ: R(0, 180),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut
    });
    TweenMax.to(elm, R(2, 8), {
      rotationX: R(0, 360),
      rotationY: R(0, 360),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      delay: -5
    });
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  var tlExpresion = new TimelineMax("repeat:-1");
  var tlMove = new TimelineMax();

  tlExpresion
    .to(
      "#eyes-brows",
      1,
      {
        y: -3,
        repeat: 1,
        repeatDelay: 0.1,
        yoyo: true,
        ease: Elastic.easeOut.config(1, 0.5)
      },
      "eye+=1"
    )
    .from("#closedEyes", 1, { y: 6, repeat: 1, yoyo: true }, "eye+=3");

  tlMove.to("#santaContainer", 1, {
    y: 5,
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    ease: Elastic.easeOut.config(1, 0.5)
  });
});
