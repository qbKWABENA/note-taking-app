// Get elements from the page
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');
const newNote = document.getElementById('newNote');
const themeToggle = document.getElementById('themeToggle');

// Store notes in memory
let notes = [];

// Toggle dark/light mode
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Add note when button is clicked
addNoteBtn.addEventListener('click', function() {
    const noteText = newNote.value;
    
    if(noteText.trim() === '') {
        return;
    }
    
    notes.push(noteText);
    
    displayNote(noteText);
    
    newNote.value = '';
});

function displayNote(text) {
    // to Create note container
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    
    // to Create note text
    const noteText = document.createElement('pre');
    noteText.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        noteDiv.remove();
        removeNoteFromArray(text);
    });
    
    noteDiv.appendChild(noteText);
    noteDiv.appendChild(deleteBtn);
    
    notesContainer.appendChild(noteDiv);
}

function removeNoteFromArray(text) {
    const index = notes.indexOf(text);
    if(index > -1) {
        notes.splice(index, 1);
    }
}