const fileInput = document.getElementById("fileInput");
const imgPreview = document.getElementById("imagePreview");
const vidPreview = document.getElementById("videoPreview");
const textOverlay = document.getElementById("textOverlay");
const musicInput = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

let audio = new Audio();

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;
  const fileType = file.type;
  const fileURL = URL.createObjectURL(file);

  if (fileType.startsWith("image")) {
    imgPreview.src = fileURL;
    imgPreview.hidden = false;
    vidPreview.hidden = true;
  } else if (fileType.startsWith("video")) {
    vidPreview.src = fileURL;
    vidPreview.hidden = false;
    imgPreview.hidden = true;
  }
});

musicInput.addEventListener("change", (e) => {
  const f = e.target.files[0];
  if (!f) return;
  audio.src = URL.createObjectURL(f);
});

function applyFilter(filter) {
  const target = vidPreview.hidden ? imgPreview : vidPreview;
  if (!target) return;
  if (filter === "none") target.style.filter = "none";
  else target.style.filter = filter;
}

function resetFilter() {
  imgPreview.style.filter = "none";
  vidPreview.style.filter = "none";
}

function applyTextOverlay() {
  const t = document.getElementById("overlayText").value || "";
  textOverlay.textContent = t;
}

function playMedia() {
  if (!vidPreview.hidden) {
    vidPreview.play();
  }
  if (audio.src) audio.play();
}

playBtn.addEventListener("click", playMedia);
