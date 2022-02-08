/* SITE OBJECT */
const oSite = {
  Init: function () {
    document.addEventListener("DOMContentLoaded", function () {
      oSite.LoadEvents();
      oModal.Init();
      oToast.Init();
    });
  },

  LoadEvents: function () {},

  ScrollTo: function (link, elementSelector) {
    link.closest("ul").querySelector("li.active").classList.remove("active");

    link.closest("li").classList.add("active");

    let element = document.querySelector(elementSelector);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    oSite.BlinkElement(element);
  },

  BlinkElement: function (element) {
    element.classList.add("highlight-border");
    window.setTimeout(function () {
      element.classList.remove("highlight-border");
    }, 2000);
  },

  ShowAnimations: function () {
    oModal.SetTitle("Animations");
    oModal.SetBodyFromRequest("modal/animations.html");
    oModal.OpenModal();
  },
  ShowEditions: function () {
    oModal.SetTitle("Editions");
    oModal.SetBodyFromRequest("modal/editions.html");
    oModal.OpenModal();
  },
  ShowLogos: function () {
    oModal.SetTitle("Logos");
    oModal.SetBodyFromRequest("modal/logos.html");
    oModal.OpenModal();
  },
  ShowSocialMedia: function () {
    oModal.SetTitle("Social Media");
    oModal.SetBodyFromRequest("modal/social-media.html");
    oModal.OpenModal();
  },

  SubmitContact: function (form) {
    oToast.ShowSuccess("Your message was delivery with success. Thank you!");
    form.reset();
  },

  PlayAudio: function () {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  },
};

oSite.Init();
