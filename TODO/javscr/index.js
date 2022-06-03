'use strict'

const add=document.getElementById('add');
const clear=document.getElementById('clear');
const load=document.getElementById('load');
const input=document.getElementById('input');
const url=document.getElementById('url');
const list=document.getElementById('list');
// apliacation storage
const storage = new ArrayStorage('tasks')

const tasks = storage.list

function taskToDOM(task){
    // Créer un element li et buttom
    if(typeof task === 'string' && task)
    { 
            const li=document.createElement('li')
            const remove= document.createElement('button')
            // donne la valeur de li 
            li.textContent= task
            // donne le nom de notre button remove
            remove.textContent= 'remove'

        remove.addEventListener('click',()=>{
            const value = remove.parentNode.firstChild.textContent
            storage.remove(value)
            list.removeChild(remove.parentNode)
        })
    // pour mettre le button qu'on vient de créer à côté de li
            li.appendChild(remove)
            // enfin creation de li sur le DOM
            list.insertBefore(li, list.firstChild)
            return true
    }
        return false
}
// Pour ajouter la taches à la liste de puce
tasks.forEach(task => taskToDOM(task))
// for(i = 0; i<taches.length; i++)
// {
//     tachesDOM(taches[i])
// }
function newTask(){
    if(storage.list.indexOf(input.value) === -1 && taskToDOM(input.value)){
        storage.set(input.value)
        input.value = ''
    }
    input.focus()
}


add.addEventListener('click', newTask)

input.addEventListener('keydown', e =>{
    if(e.key==='Enter'){
        newTask()
    }
})

clear.addEventListener('click', ()=>{
    storage.clear()
    list.innerHTML=''
})

load.addEventListener('click', ()=>{

})