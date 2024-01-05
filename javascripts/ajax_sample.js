// function getData() {
//   // 1. Générer un objet XMLHttpRequest
//   const request = new XMLHttpRequest(); //-- 1

//   // 2. Mettre en place des gestionnaires d'événements dans l'objet XMLHttpRequest et mettre en place un traitement pendant la communication
//   request.onreadystatechange = function() {
//   console.log("Ready state:", request.readyState); // Log the readyState
//   if (request.readyState == 4) {
//     console.log("Status:", request.status); // Log the HTTP status
//     if (request.status == 200) {
//       console.log(request.response);
//     } else {
//       console.error('La requête n\'a pas abouti avec succès. Statut : ' + request.status);
//     }
//   }
// };

//   // 3. Envoyer la demande
//   request.open("GET", "../ajax.json"); //-- 3-1
//   request.responseType = "json"; //-- 3-2
//   request.send(); //-- 3-3
// }

// // Exécuter getData après le chargement de la fenêtre
// window.onload = getData;
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
