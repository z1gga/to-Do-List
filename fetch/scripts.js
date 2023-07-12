function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let authors = data.results;
        return authors.map(function(author) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

const url = 'https://randomuser.me/api';

let data = {
    name: 'Sara'
}

let request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});

fetch(request)
    .then(function() {
        // Handle response we get from the API
    })
