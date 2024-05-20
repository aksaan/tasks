import express, { Express } from "express";
import { connect, disconnect } from "mongoose";
import cors from 'cors';


import tasksRouter from './routers/tasksRouter'

const app : Express = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", tasksRouter);

async function main() {
    
    try{
        await connect("mongodb://127.0.0.1:27017/tasks");
        app.listen(3000);
        console.log("Сервер ожидает подключения...");
    }
    catch(err) {
        return console.log(err);
    }
}
main()

process.on("SIGINT", async() => {
      
    await disconnect();
    console.log("Приложение завершило работу");
    process.exit();

});