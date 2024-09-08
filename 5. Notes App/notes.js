const newNote = document.getElementById('takenote');
const noteContainer = document.getElementById('notecontainer');


function updateStorage(){
    localStorage.setItem('myNotes', noteContainer.innerHTML);
}


function createNote(){
    let note = document.createElement('p');
    let deleteImg = document.createElement('img');

    note.setAttribute('contenteditable', 'true');
    note.classList.add('relative','w-96','h-40','bg-white', 'rounded-xl','border-none', 'outline-none', 'p-4');

    deleteImg.src = '/images/delete.png';
    deleteImg.classList.add('inputBox', 'w-6', 'absolute', 'bottom-2', 'right-2', 'cursor-pointer');

    noteContainer.appendChild(note).appendChild(deleteImg);
    

}

noteContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        array= document.querySelectorAll('.inputBox');
        array.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        });
    }
});