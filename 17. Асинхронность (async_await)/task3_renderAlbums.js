const PHOTOS_URL = "https://jsonplaceholder.typicode.com/albums";
const dataContainer = document.querySelector('.data-container');

const createNewAlbum = (album) => {
    const newAlbum = document.createElement('li');
    newAlbum.textContent = album.title;
    return newAlbum;
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



const renderAlbums = async () => {
        toggleLoader();

        try {
            const result = await fetch(PHOTOS_URL);
            // if(!result.ok){
            //     throw new Error('ошибка в получении данных об альбомах...');
            // }
            const responses = await result.json();
            responses.forEach((response) => {
                const responseHTML = createNewAlbum(response);
                dataContainer.append(responseHTML);
            });
            
        } catch (error) {
            console.log('ERROR', error);

        } finally {
            toggleLoader();

        }
}

renderAlbums();
