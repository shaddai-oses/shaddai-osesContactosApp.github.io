// seleccionar las variables con queryselector
const nameInput = document.querySelector('#name-input')
const numberInput = document.querySelector('#number-input');
const list = document.querySelector('#container-list');
const submit = document.querySelector('#btn-agg');
const deleteButton= document.querySelector('.delete-button')
const checkButton= document.querySelector('.check-button')
const form = document.querySelector('#formulario')

const personas = ( ) => {
    list.innerHTML = localStorage.getItem('personaAdd')
    }
    personas( );

// Regex validacion 
// numero de tlfn
const NUMBER_REGEX = /^(\+58)?(0)?(4)(12|14|16|24|26)\d{7,10}$/;
const NAME_REGEX = /^[a-zA-Z]{3,12}$/


// funcion de colores en el input y el helper text
const validation = (validation, input) => {
    if (validation) {
        input.classList.remove('wrong');
        input.classList.add('correct');
        input.parentElement.children[2].classList.remove('display-text');
    }else{
        input.classList.add('wrong');
        input.classList.remove('correct');
        input.parentElement.children[2].classList.add('display-text');
    }
};

// evento del nombre
nameInput.addEventListener ('input', e =>{
    const nameValidation = NAME_REGEX.test(e.target.value);
    validation(nameValidation, nameInput);
});

// evento del numero de tlfn 
numberInput.addEventListener('input', e => {
    const numberValidation = NUMBER_REGEX.test(e.target.value);
    validation(numberValidation, numberInput);
})

const crearLista = (crearPersona) => {
    const newPerson = {
        name: nameInput.value,
        number: numberInput.value
    };
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class='add'>
    <button class='delete-button'>
    <svg class='delete-btn-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path class='delete-btn-icon' stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
    </button>
    <input class='name-add' type='text' value=${newPerson.name} readonly >
    <input class='number-add' type='text' value=${newPerson.number} readonly>
    <button class='check-button'>
    <svg class='check-btn-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path class='check-btn-icon' stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
    </button>
    </div>
    `;
    list.append(listItem);
    localStorage.setItem('personaAdd', list.innerHTML);
    form.reset();
};

    list.addEventListener('click', e => {
        e.preventDefault( );
    console.log(e.target)
        if (e.target.classList.contains('delete-button')) {
             e.target.parentElement.parentElement.remove( );
             localStorage.setItem('personaAdd', list.innerHTML);
            }
     });
    
    list.addEventListener( 'click', e => {
    e.preventDefault();
    console.log(e.target)
    if (e.target.classList.contains('check-button') ) {
    const input = e.target.parentElement.children[1];
        if (input.hasAttribute('readonly')) {
        input.removeAttribute('readonly');
        } else {
        input.setAttribute( 'value', input.value);
        input.setAttribute('readonly', true);
        localStorage.setItem('personaAdd', list.innerHTML);
        }
    }
    });
    
    list.addEventListener( 'click', e => {
    e.preventDefault();
    console.log(e.target)
    if (e.target.classList.contains('check-button') ) {
    const input = e.target.parentElement.children[2];
      if (input.hasAttribute('readonly')) {
      input.removeAttribute('readonly');
       } else {
        input.setAttribute( 'value', input.value);
        input.setAttribute('readonly', true);
        localStorage.setItem('personaAdd', list.innerHTML);
        }
      }
    }); 

form.addEventListener ('submit', e => {
    e.preventDefault( );
    if (NUMBER_REGEX.test(numberInput.value)&&NAME_REGEX.test(nameInput.value)) crearLista( );
}); 
