function setCookie() {
  localStorage.setItem("cookie", "true");
  document.getElementById("cookie-exitlag").setAttribute("hidden", "true");
}

function getCookie() {
  if (!localStorage.getItem("cookie")) {
    document.getElementById("cookie-exitlag").removeAttribute("hidden");
  }
}

$(document).ready(function () {
  getCookie();
  const interval = setInterval(() => {
    const button = document.querySelector(
      ".exl-button.exl-button--accent.cookie-class"
    );

    if (button) {
      button.click();
      clearInterval(interval);
    }
  }, 100);
});
