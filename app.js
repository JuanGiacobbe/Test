// DOM SECTION

const todo = document.querySelector('.todo');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let p = document.createElement('p');
    let li = document.createElement('li');
    let deletebtn = document.createElement('button');

    p.textContent = todo.value;

    li.appendChild(p);
    li.appendChild(deletebtn);
    list.appendChild(li);

    li.classList.add('elements');
    deletebtn.classList.add('deletebtn');


    deletebtn.addEventListener('click', (e) => {
        e.preventDefault();

        list.removeChild(li);
    });


    todo.value = '';
})

