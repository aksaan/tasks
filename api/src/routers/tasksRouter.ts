import { Router } from "express";
import { add, receiving } from "../controllers/tasksController";


const router = Router();

router.post("/add", add);
router.get("/receiving", receiving);

export default router;