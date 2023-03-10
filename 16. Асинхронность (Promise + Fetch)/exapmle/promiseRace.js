// Promise.race([ //возвращается самый быстро выполненный promise
/*
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise1');
    }, 500);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise2');
    }, 1000);
});const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise3');
    }, 200);
});

Promise.race([promise1, promise2, promise3])
    .then((result) =>{
        console.log('result', result);
    })
    .catch((error) => {
        console.log('error', error);
    });
*/

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

const dataContainer = document.querySelector('#data-container');

const createNewPhoto = (photo) => {
    const newPhoto = document.createElement('li');
    const newPhotoImg = document.createElement('img');
    newPhotoImg.classList.add('photo-item__image');
    newPhotoImg.setAttribute('src', `${photo.url}`);
    newPhoto.append(newPhotoImg);
    const newPhotoTitle = document.createElement('h3');
    newPhotoTitle.classList.add('photo-item__title');
    newPhotoTitle.textContent = photo.title;
    newPhoto.prepend(newPhotoTitle);
    return newPhoto;
}

const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`));
    
    Promise.race(requests)
        .then((result) => {
            return result.json();
        })
        .then((result) => {
            const photoHTML = createNewPhoto(result);
            dataContainer.append(photoHTML);
        })
        .catch((error) => {
            console.log('упс!',error);
        })
    .finally(() => {
        toggleLoader();
    })
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

getFastestLoadedPhoto([60, 12, 55, 61, 4, 78, 2, 22]);


