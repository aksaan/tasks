"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = require("../controllers/tasksController");
const router = (0, express_1.Router)();
router.post("/add", tasksController_1.add);
router.get("/receiving", tasksController_1.receiving);
exports.default = router;
