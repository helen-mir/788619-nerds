var link = document.querySelector(".open-modal-btn");

var popup = document.querySelector(".feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var loginName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-show");

  if (storage) {
    loginName.value = storage;
    email.focus();
  } else {
    loginName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
  if (!loginName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {	
      localStorage.setItem("loginName", loginName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      popup.classList.remove("feedback-error");
      }
  }
});
