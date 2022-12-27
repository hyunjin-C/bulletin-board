// 로그인이 잘 되었는지 확인하는 로직 추가
// 로그아웃이 잘 되었는지 확인하는 로직 추가
// 로그아웃하면 '로그아웃 되었습니다.' 메시지 팝업 띄우기
// 회원가입하면 '회원가입을 축하합니다.' 메시지 팝업 띄우기

function goHome() {
  let link = "../index.html";
  location.href = link;
}

function goMain() {
  let link = "./mainPage.html";
  location.href = link;
}

function goMypage() {
  let link = "./myPage.html";
  location.href = link;
}

function goLogin() {
  let link = "./pages/login.html";
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
