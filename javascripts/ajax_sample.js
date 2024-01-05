
let number = 0;
let videos = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById("btn");

function getData() {
  const request = new XMLHttpRequest();
  console.log("une seule fois");
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        
        request.response.forEach((element) => {
          videos.push(element);
        });
      }
    }
  };
  request.open("GET", "../ajax.json");
  request.responseType = "json";
  request.send(null);
}

function changeVideo() {
  if (videos.length == 0) {
      getData();
    }
  // Décrivez le traitement lorsque le bouton est cliqué
  // Appelez le processus getData uniquement si vous n'avez pas les données d'ajax.json
  button.addEventListener("click", (e) => {
    
    console.log(videos);
    titleArea.innerHTML = videos[number]?.title;

    contentArea.innerHTML = videos[number]?.content;
    videoArea.setAttribute("src", videos[number]?.url);
    number == 2 ? (number = 0) : number++;
  });
}

window.onload = changeVideo;
