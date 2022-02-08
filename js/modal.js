/* MODAL OBJECT */
const oModal = {
  modal: null,
  Init: function () {
    oModal.modal = document.querySelector("#myModal");
  },
  SetTitle: function (value) {
    const titleEl = oModal.modal.querySelector(".my-modal-title h3");
    titleEl.textContent = "";
    titleEl.insertAdjacentHTML("beforeEnd", value);
  },
  SetBody: function (value) {
    const bodyEl = oModal.modal.querySelector(".my-modal-body");
    bodyEl.textContent = "";
    bodyEl.insertAdjacentHTML("beforeEnd", value);
  },
  SetBodyFromRequest: function (url) {
    const bodyEl = oModal.modal.querySelector(".my-modal-body");
    bodyEl.textContent = "";
    $(bodyEl).load(url);
  },
  OpenModal: function () {
    oModal.modal.classList.remove("d-none");
  },
  CloseModal: function () {
    oModal.modal.classList.add("d-none");
  },
};
