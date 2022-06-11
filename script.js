import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";



    const btn = document.querySelector('[data-form-btn]');

    const createTask = (e)=> {
        e.preventDefault();

        //Seleccion de input
        const input = document.querySelector('[data-form-input]');
        //seleccion el texto de el input
        const value = input.value;
        //Seleccion de la lista
        const list = document.querySelector('[data-list]');
        //Creacion de elemento lista
        const task = document.createElement('li');
        //Adiciona una clase al elemento
        task.classList.add('card');
        input.value = "";
        //Crea 
        const taskContent = document.createElement('div');
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
        

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        

        list.appendChild(task);
    }


    btn.addEventListener('click', createTask );


