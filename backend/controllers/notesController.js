import Note from "../models/note.js"

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find().sort({createdAt: -1}); //(newest first) as -1 will sort in desc order

        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getAllNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function getNoteById(req, res){
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message: 'Note not found'})
        res.status(200).json(note)
    } catch (error) {
         console.log("Error in getNoteById controller", error)
         res.status(500).json({message: "Internal server error"})
    }
} 

export async function createNote(req, res){
   try {
    const {title, content} = req.body
    const newNote = new Note({title, content})
    const savedNote = await newNote.save();

    res.status(200).json({savedNote})
   } catch (error) {
    console.log("Error in createNote controller", error)
    res.status(500).json({message: "Internal server error"})
   }
}

export async function updateNote(req, res){
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});//new true is optional
        
        if(!updatedNote) return res.status(404).json({message: "Note not found"})
        
    
        res.status(200).json(updatedNote)
    } catch (error) {
       console.log("Error in updateNote controller", error)
       res.status(500).json({message: "Internal server error"})
    }
}

export async function deleteNotes(req, res){
    try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    if(!deletedNote) return res.status(404).json({message: "Note not found"})

    res.status(200).json({message: "Note deleted successfully!"})
    } catch (error) {
        console.log("Error in deleteNote controller", error)
       res.status(500).json({message: "Internal server error"})
    }
}

//4HgbM27TZL3kJVTi
//mongodb+srv://tanvir_db_user:4HgbM27TZL3kJVTi@cluster0.qpwhrfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 