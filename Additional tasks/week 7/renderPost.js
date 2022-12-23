const TODOS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const dataContainer = document.querySelector('.data-container');

const createPost = (titleOfPost, bodyOfPost) => {
    const newPost = createNewElement('div', 'post');
    newPost.setAttribute('id', 'post');

    const postTitle = createNewElement('h1', 'post__title');
    const postText = createNewElement('p', 'post__text');
    const postCommentsText = createNewElement('b', 'post__comments-text');
    const postComments = createNewElement('div', 'post__comments');

    postTitle.textContent = titleOfPost;
    postText.textContent = bodyOfPost;
    postCommentsText.textContent = "Комментарии";

    dataContainer.append(newPost);
    newPost.append(postTitle);
    newPost.append(postText);
    newPost.append(postCommentsText);
    newPost.append(postComments);

    return newPost;
}


const createComment = (commentEmail, commentBody) => {
    const postComments = document.querySelector(".post__comments");
    
    const postComment = createNewElement('div', 'post-comment');
    const postCommentAuthor = createNewElement('span', 'post-comment__author');
    const postCommentText = createNewElement('span', 'post-comment__text');

    postCommentAuthor.textContent = commentEmail;
    postCommentText.textContent = commentBody;
    
    postComments.append(postComment);
    postComment.append(postCommentAuthor);
    postComment.append(postCommentText);
    return(postComment);
    
}


function createNewElement(type, className){
    const element = document.createElement(type);
    element.className = className;
    return element;
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


const renderPost = async (id) => {
    toggleLoader();
    try {
        const requests = await fetch(`${TODOS_URL}/${id}`);
        if(!requests.ok){
            throw new Error('ошибка в получении данных о публикации...');
        }
        const requestsResults = await requests.json();
        const comments = await fetch(`${COMMENTS_URL}?postId=${id}`);
        if(!comments.ok){
            throw new Error('ошибка в получении данных о комментариях...');
        }
        const commentsResults = await comments.json();

        createPost(requestsResults.title, requestsResults.body);

        commentsResults.forEach(element => {
            const commentHTML = createComment(element.email, element.body);
            const postComments = document.querySelector('.post__comments');
            postComments.append(commentHTML);

     });
     
    } catch (error) {
        console.log('упс!',error);

    } finally {
        toggleLoader();

    }
    
}
renderPost(8)