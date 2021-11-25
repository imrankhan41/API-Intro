
// const user = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
// // console.log(user)
// const stringified = JSON.stringify(user);
// console.log(stringified);

// const converted = JSON.parse(stringified);
// console.log(converted.title);

function loadSomething(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => users(data));
}
function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));
}

function users(data){
    const ul = document.getElementById("users")
    for(const user of data){
        const li = document.createElement("li");
        li.innerText=user.name;
        ul.appendChild(li);
    }
}