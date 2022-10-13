// saves users notes to local storage in browser
const saveUsersNotes = function(noteArray) {
    localStorage.setItem("notes", JSON.stringify(noteArray));
}

// Add new note
const addNote = function() { 
    const addNoteBtn = document.getElementById(".add_note_btn");
    const colorChoices = document.getElementById("selectColour");
    const notes = document.getElementById("all_notes")
    const color = colorChoices.value.toString();

    if(!color) {
        return false;
    }

    const obj = {
        id: Math.floor(Math.floor(Date.now() / 1000)),
        text: "",
        color: color
    };

    const noteElement = newNoteElement(obj.id, obj.text, obj.color);
    notes.insertBefore(noteElement, addNoteBtn);
    const storedNotes = getAllNotesFromLocalStorage();
    storedNotes.push(obj);
    saveUsersNotes(storedNotes);
}

// Create note template
const createNote = function(noteId, text, color) {
    const newEl = document.createElement("textArea");
    newEl.value = text;
    newEl.classList.add("user_note");
    newEl.placeholder = "Enter text here";
    const noteDate = document.createElement("p");
    const date = new Date();
    const dateText = document.createTextNode(date.getFullYear());
    noteDate.appendChild(dateText);
    newEl.addEventListener("dblclick", () => {
        const deleteNote = confirm("Delete note?");
        if(deleteNote !== false) {
            removeNote(noteID, newEl);
        }
    });
    newEl.addEventListener("change", () => {
        updateCurrentNote(noteID, newEl.value);
    });
    console.log(newEl.id);
    console.log(color)
    newEl.style.backgroundColor = color?.toString();
    return newEl;
}

// Remove note
const removeNote = function(noteID, selectedElement) {
    const notes = document.getElementById("all_notes");
    const allNotes = getAllNotesFromLocalStorage();
    const targetNote = allNotes.filter(it => it.id == noteId)[0];
    const i = allNotes.indexOf(targetNote);
    if(i > -1) { allNotes.splice(i, 1);}
    saveUsersNotes(allNotes);
    notes.removeChild(selectedElement);
}

// update contents of current note
const updateCurrentNote = function(noteId, updatedText) {
    let i = 0;
    const storedNotes = getAllNotesFromLocalStorage();
    const targetNote = storedNotes.find(note => note.id == noteId);
    targetNote.text = updatedText;
    console.log(targetNote);
    saveUsersNotes(storedNotes);
}

//retreives all notes from local storage
const getAllNotesFromLocalStorage = () => {
    if(localStorage.getItem("notes") == null) {
        return JSON.parse("[]");
    } else {
        console.log(localStorage.getItem("notes"));
        return JSON.parse(localStorage.getItem("notes"));
    }
    
}

// loop through each note in local storage
// and create the html element
getAllNotesFromLocalStorage().every((note, index, array) => {
    console.log("test");
    const addNoteBtn = document.getElementById(".add_note_btn");
    const notes = document.getElementById("all_notes");
    const noteElement = newNoteElement(note.id, note.text, note.color);
    notes.insertBefore(noteElement, addNoteBtn);
    return true;
});
