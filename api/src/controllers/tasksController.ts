import { Request, Response } from "express";


import Task, {ITask} from "../models/tasks";

export const add = async (req : Request, res : Response) => {
    const { name, level, text, themes } = req.body;
    if (!name || !level || !text || !themes) {
        return res.status(400).json({ error : 'missing required fields'});
    }
    const task : ITask | null = new Task({ name, level, text, themes });
    await task.save();

    return res.status(201).json(task);
}

export const receiving = async (req : Request, res : Response) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
}