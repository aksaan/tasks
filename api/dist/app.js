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
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const tasksRouter_1 = __importDefault(require("./routers/tasksRouter"));
const workRouter_1 = __importDefault(require("./routers/workRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/tasks", tasksRouter_1.default);
app.use("/work", workRouter_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/tasks");
            app.listen(3000);
            console.log("Сервер ожидает подключения...");
        }
        catch (err) {
            return console.log(err);
        }
    });
}
main();
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.disconnect)();
    console.log("Приложение завершило работу");
    process.exit();
}));
