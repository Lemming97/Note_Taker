const fs = require('fs');
const path = require('path');

let createNewNote = (body, noteArray) => {
    // This pushes the new note into the note array
    const note = body;
    noteArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )

    return note;
}

let deleteNote = (noteArray, id) => {
    let deleteID = parseInt(id);
    noteArray.splice(deleteID, 1);

    // This loop re-writes the indexes for the remaining notes.
    for (let i = deleteID; i < noteArray.length; i++) {
        noteArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )
}

// this exports the createNewNote & deleteNote functions
module.exports = {
    createNewNote,
    deleteNote
};