import { Router } from "express";
import { add, all } from "../controllers/tasksWork";


const router = Router();

router.post("/", add);
router.get("/", all);

export default router;