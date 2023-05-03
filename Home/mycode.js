let loged = true;
let avatar = "Home/image/avatar.png";     // avatar from database
let name = "Rai";




function postStatus(){
    let statusText = document.getElementById("status-text").value;
    const node = document.getElementById("status-div");
    let cloneDiv = node.cloneNode(true);
    const input = document.getElementById('image-file');
    let file = input.files ? input.files[0] : null;
    if ((statusText!="") || file){
      cloneDiv.classList.remove("hidden-div");
      cloneDiv.children[1].children[0].innerHTML = statusText;  
      const reader = new FileReader();
      if (file) {
        if (file.type === "image/jpeg" || file.type === "image/png") {
          reader.onload = function() {    
            cloneDiv.children[3].classList.add("hidden-div");
            cloneDiv.children[2].children[0].src = reader.result;
            cloneDiv.children[2].classList.remove("hidden-div");
          };
        }
        if (file.type === "video/mp4"){
          reader.onload = function() {
            cloneDiv.children[2].classList.add("hidden-div");
            cloneDiv.children[3].children[0].src = reader.result;
            cloneDiv.children[3].classList.remove("hidden-div");
          };
        }
        reader.readAsDataURL(file);
      }
      cloneDiv.children[0].children[0].src = avatar;
      cloneDiv.children[0].children[1].innerHTML = name;
      document.getElementById("centerD").firstElementChild.after(cloneDiv);
      document.getElementById("status-text").value = "";
      document.getElementById("image-file").value = null;
      input.files = null;
    }
}

window.onload = function(){
    if (loged) {
        document.querySelectorAll("[id=avatar]").forEach(element=>element.src = avatar);
    }
}