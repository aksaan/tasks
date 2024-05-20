import { Request, Response } from "express";


import Tasks, {ITasks} from "../models/tasks";

export const add = async (req : Request, res : Response) => {
    const { name, level, tasks, themes } = req.body;
    if (!name || !level || !tasks || !themes) {
        return res.status(400).json({ error : 'missing required fields'});
    }
    const task : ITasks | null = new Tasks({ name, level, tasks, themes });
    await task.save();

    return res.status(201).json(task);
}

export const receiving = async (req : Request, res : Response) => {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
}