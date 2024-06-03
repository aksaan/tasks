"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksWork_1 = require("../controllers/tasksWork");
const router = (0, express_1.Router)();
router.post("/", tasksWork_1.add);
router.get("/", tasksWork_1.all);
exports.default = router;
