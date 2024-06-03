import { Request, Response } from "express";


import Work, {IWork} from "../models/work";

export const add = async (req : Request, res : Response) => {
    const { name, tasks } = req.body;
    if (!name || !tasks) {
        return res.status(400).json({ error : 'missing required fields'});
    }
    const work : IWork | null = new Work({ name, tasks });
    await work.save();
    return res.status(201).json(work);
}

export const all = async (req : Request, res : Response) => {
    const work = await Work.find();
    res.status(200).json(work);
}