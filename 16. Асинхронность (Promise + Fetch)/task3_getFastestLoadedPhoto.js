const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
const dataContainer = document.querySelector('#data-container');

const createNewPhoto = (photo) => {
    const newPhoto = document.createElement('li');
    newPhoto.classList.add('photo-item');

    const newPhotoImg = document.createElement('img');
    newPhotoImg.classList.add('photo-item__image');
    newPhotoImg.setAttribute('src', `${photo.url}`);
    
    const newPhotoTitle = document.createElement('h3');
    newPhotoTitle.classList.add('photo-item__title');
    newPhotoTitle.textContent = photo.title;

    newPhoto.append(newPhotoImg);
    newPhoto.append(newPhotoTitle);
    return newPhoto;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if(isHidden){
        loaderHTML.removeAttribute('hidden');
    }else{
        loaderHTML.setAttribute('hidden', '');
    }
}

const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    Promise.race(ids.map((id) => fetch(`${PHOTOS_URL}/${id}`)))
        .then((result) => result.json())
        .then((photo) => {
            const photoHTML = createNewPhoto(photo);
            dataContainer.append(photoHTML);
        })
        .catch((error) => {
            console.log('упс!',error);
        })
    .finally(() => {
        toggleLoader();
    })
}



getFastestLoadedPhoto([60, 12, 55, 61, 4, 78, 2, 22]);