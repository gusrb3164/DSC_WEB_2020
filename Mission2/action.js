var img_list = [
  "res/first.jpg",
  "res/second.jpg",
  "res/third.jpg",
  "res/fourth.jpg",
];
var idx = 0;
function changeNext() {
  idx++;
  if (idx >= img_list.length) {
    idx = 0;
  }
  document.getElementById("image").src = img_list[idx];
}

function changeBack() {
  idx--;
  if (idx < 0) {
    idx = img_list.length - 1;
  }
  document.getElementById("image").src = img_list[idx];
}

function changeOpacity(state) {
  var id1 = document.getElementById("back-arrow");
  var id2 = document.getElementById("next-arrow");
  if (state) {
    id1.style.opacity = 100;
    id2.style.opacity = 100;
  } else {
    id1.style.opacity = 0;
    id2.style.opacity = 0;
  }
}
