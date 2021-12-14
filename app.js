// DOM SECTION

const todo = document.querySelector('.todo');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

// FUNCTIONALITIES

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(todo.value == ''){
        alert('complete the input with a todo!');
    }else{
        let p = document.createElement('p');
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');

        p.textContent = todo.value;

        li.appendChild(p);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        p.classList.add('text');
        li.classList.add('elements');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'delete';

        deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();

        list.removeChild(li);
        });


        todo.value = '';
        }
})

