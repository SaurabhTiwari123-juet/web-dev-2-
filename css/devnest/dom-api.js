console.log("hello");

const hobbies = ["coding", "swimming", "jogging"];
const list = document.createElement("ul");

for (let hobby of hobbies) {
  list.innerHTML += "<li class= 'blue'>" + hobby + "</li>";
}

body.appendChild(list);
