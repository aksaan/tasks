import mongoose, { Schema, Document } from "mongoose";


export interface ITask extends Document {
    name: string,
    level: number,
    text: string,
    themes: string[]
}
const TaskSchema = new Schema ({
    name : {
        type : String, 
        minLength : 5,
        maxLength : 50,
    },
    level : {
        type : Number, 
        min : 1,
        max : 10
    },
    text : {
        type : String, 
        minLength : 10,
        maxLength : 1000,
    },
    themes : [{
        type : String, 
        minLength : 5,
        maxLength : 50,
    }]
})

const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;