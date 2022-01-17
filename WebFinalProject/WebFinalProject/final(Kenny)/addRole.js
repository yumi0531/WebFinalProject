
let sendButton = document.querySelector('button');
function send() {
  let audio = new Audio("UI/音效/Starting.mp3");
  audio.play();
  let name = document.querySelector('#nameValue').value;
  let intr = document.querySelector('#intrValue').value;
  let link = document.querySelector('#linkValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzwxf2E_npMBeWaFex0-Fuc9APb7jVMXLtLaeKH0cSVoCFiJzPIQlP8u0JcmEATxHtH/exec",
    data: {
        "name": name,
        "intr": intr,
        "link": link
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
