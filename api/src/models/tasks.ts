import mongoose, { Schema, Document } from "mongoose";


export interface ITasks extends Document {
    name: string,
    level: number,
    task: string,
    themes: string[]
}
const TasksSchema = new Schema ({
    name : {
        type : String, 
        minLength : 5,
        maxLength : 50,
    },
    level : {
        type : Number, 
        minLength : 5,
        maxLength : 50,
    },
    task : {
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

const Tasks = mongoose.model<ITasks>("Tasks", TasksSchema);

export default Tasks;