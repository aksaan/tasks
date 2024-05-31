"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiving = exports.add = void 0;
const tasks_1 = __importDefault(require("../models/tasks"));
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, level, text, themes } = req.body;
    if (!name || !level || !text || !themes) {
        return res.status(400).json({ error: 'missing required fields' });
    }
    const task = new tasks_1.default({ name, level, text, themes });
    yield task.save();
    return res.status(201).json(task);
});
exports.add = add;
const receiving = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield tasks_1.default.find();
    res.status(200).json(tasks);
});
exports.receiving = receiving;
