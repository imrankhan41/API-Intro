function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPost();
function displayPost(data){
    const conainer = document.getElementById("posts");
    for(const post of data){
        console.log(post)
        const div = document.createElement("div");
        div.classList.add("posts")
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        conainer.appendChild(div)
    }
}
function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
    method :"POST",
    body : JSON.stringify({
        title :"foo",
        body :"bar",
        userId : 1,
    }),
    headers:{
        "content-type":"application/json; charset-UTF-8",
    }
})
.then((response) => response.json())
.then((json) => console.log(json));
}

function addAPut(){
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method :"PUT",
        body : JSON.stringify({
            id : 1,
            title :"foo",
            body :"bar",
            userId : 1,
        }),
        headers:{
            "content-type":"application/json; charset-UTF-8",
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
