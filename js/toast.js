/* TOAST OBJECT */
const oToast = {
  toast: null,
  Init: function () {
    oToast.toast = document.querySelector("#myToast");
  },
  ShowSuccess: function (value) {
    oToast.Show(value);
    oToast.toast.classList.add("my-toast-success");
  },
  ShowError: function (value) {
    oToast.Show(value);
    oToast.toast.classList.add("my-toast-error");
  },
  Show: function (value) {
    oToast.Reset();

    oToast.toast.insertAdjacentHTML("beforeEnd", value);
    oToast.toast.classList.add("my-toast-show");

    window.setTimeout(() => {
      oToast.Hide();
    }, 5000);
  },
  Hide: function () {
    oToast.toast.classList.remove("my-toast-show");
    oToast.toast.classList.add("my-toast-hide");

    window.setTimeout(() => {
      oToast.Reset();
      oToast.toast.classList.add("d-none");
    }, 1000);
  },
  Reset: function () {
    oToast.toast.classList.remove("d-none", "my-toast-success", "my-toast-error", "my-toast-hide", "my-toast-hide", "my-toast-show");
    oToast.toast.textContent = "";
  },
};
