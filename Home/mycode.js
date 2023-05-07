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

function addComment() {
  const commentInput = document.getElementById('comment');
  const commentList = document.getElementById('comment-list');

  // Lấy giá trị của trường tên và nội dung bình luận
  const comment = commentInput.value;

  // Tạo một phần tử <li> mới để chứa bình luận
  const newComment = document.createElement('li');

  // Thêm tên và nội dung bình luận vào phần tử <li> mới
  newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

  // Thêm phần tử <li> mới vào danh sách bình luận
  commentList.appendChild(newComment);
  commentInput.value = '';
}
var cmtTimes = false;
function openComment(){
  var cmt = document.getElementById("comments")
  if(cmtTimes == false)
  { cmt.style.display = "block"; cmtTimes = true}
  else
  {
    cmt.style.display = "none";
    cmtTimes = false;
  }
}

function showNews(){
  document.getElementById("pills-news").classList.toggle("hidden-div");
  document.getElementById("pills-sche").classList.add("hidden-div");
  document.getElementById("pills-maps").classList.add("hidden-div");
  document.getElementById("pills-news").classList.add("stacking-div");
}

function showSche(){
  document.getElementById("pills-news").classList.add("hidden-div");
  document.getElementById("pills-sche").classList.toggle("hidden-div");
  document.getElementById("pills-maps").classList.add("hidden-div");
  document.getElementById("pills-sche").classList.add("stacking-div");
  calendar();
}

function showMaps(){
  document.getElementById("pills-news").classList.add("hidden-div");
  document.getElementById("pills-maps").classList.toggle("hidden-div");
  document.getElementById("pills-sche").classList.add("hidden-div");
  document.getElementById("pills-maps").classList.add("stacking-div");
}

function regNewEvent(){
  document.getElementById("regNewEvent").classList.remove("hidden-div");
}

function calendar() {
		
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: new Date().toISOString().slice(0, 10),
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Schedule',
        start: '2023-05-06'
      },
      {
        title: 'Google maps',
        url: 'https://google.com/',
        start: '2023-05-06',
        end: '2023-05-08'
      }],
      eventClick: function(event) {
        if (confirm('Title: ' + event.title + '\nStart Date: ' + event.start.format() + '\nEnd Date: ' + event.end.format() + '\nLocation: ' + event.location + '\nNumber of Register: ' + event.scale + '\nDescription: ' + event.description + '\nUrl: ' + event.url + '\n\n Access Event?')) {
          window.open(event.url);
          return false;
        }else{
          return false;
        }
      }
  });
}

function newEvent(){
  let eventTitle = document.getElementById('eventTitle').value;
  let eventAdr = document.getElementById('eventAdr').value;
  let eventStart = document.getElementById('eventStart').value;
  let eventEnd = document.getElementById('eventEnd').value;
  let eventScale = document.getElementById('eventScale').value;
  let eventDescription = document.getElementById('eventDescription').value;
  let eventUrl  = document.getElementById('eventUrl').value;
  let newE = {
    events: [
      {
        title: eventTitle,
        location: eventAdr,
        start: eventStart,
        end: eventEnd,
        scale: eventScale,
        description: eventDescription,
        url: eventUrl
      }
    ]
  }
  $('#calendar').fullCalendar('addEventSource', newE);
}