function goMain() {
  let link = "../index.html";
  location.href = link;
}

function goSignup() {
  let link = "./signup.html";
  location.href = link;
}

// enter 누르면 로그인 버튼 작동
document.onkeyup = function (e) {
  let code = e.code;
  if (code === "Enter") goMain();
};
