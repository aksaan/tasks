import { Router } from "express";
import { add, receiving } from "../controllers/tasksController";


const router = Router();

router.post("/", add);
router.get("/", receiving);

export default router;