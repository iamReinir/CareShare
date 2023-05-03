let loged = true;
let avatar = "Home/image/avatar.png"; // avatar from database
let name = "Rai";

function postStatus() {
  let statusText = document.getElementById("status-text").value;
  const node = document.getElementById("status-div");
  let cloneDiv = node.cloneNode(true);
  cloneDiv.classList.remove("fade");
  cloneDiv.children[1].children[0].innerHTML = statusText;

  const input = document.getElementById("image-file");
  let file = input.files ? input.files[0] : null;
  const reader = new FileReader();
  reader.onload = function () {
    cloneDiv.children[2].children[0].src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
  cloneDiv.children[0].children[0].src = avatar;
  cloneDiv.children[0].children[1].innerHTML = name;
  document.getElementById("centerD").firstElementChild.after(cloneDiv);
}

window.onload = function () {
  if (loged) {
    document
      .querySelectorAll("[id=avatar]")
      .forEach((element) => (element.src = avatar));
  }
};
