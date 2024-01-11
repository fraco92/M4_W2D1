import config from "./config.json" assert { type: "json" };

const url = "https://api.pexels.com/v1/search?query=";
const pictureContainer = document.querySelector(".albumContainer .row");

/**
 * @param {string} query
 */
const albumFetch = (query) => {
  fetch(url + query, {
    headers: {
      Authorization: config.APIkey,
    },
  })
    .then((raw) => raw.json())
    .then((data) => {
      {
        const picturesFound = data.photos.map((picture) => {
          return `<div class="col col-lg-4 col-md-6 col-8"> <div class="card mb-4">
          <img src='${picture.src.large}' />

          <div class="card-body">
            
            <div
              class="d-flex justify-content-between align-items-center"
            >
            <h5 class="card-title">${picture.alt}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${picture.photographer}</h6>
             
            </div>
          </div>
        </div> </div>`;
        });
        pictureContainer.innerHTML = picturesFound.join("");
      }
    })
    .catch((error) => console.log(error));
};

albumFetch("Music");

// //import config from "./config.json" assert { type: "json" };

// const url = "https://api.pexels.com/v1/search?query=";
// const pictureContainer = document.querySelector("#albumContainer");

// /**
//  * @param {string} query
//  */
// const albumFetch = (query) => {
//   fetch(url + query, {
//     headers: {
//       Authorization: config.APIkey,
//     },
//   })
//     .then((raw) => raw.json())
//     .then((data) => {
//       {
//         const picturesFound = data.photos.map((picture) => {
//           return `<img src="${picture.src.large}"/>`;
//         });
//         pictureContainer.innerHTML = picturesFound.join("");
//       }
//     })
//     .catch((error) => console.log(error));
// };

// albumFetch("Sicily");
