import { Router } from "express";
import {
    createContactMessage,
    getContactMessages,
    updateContactMessageStatus,
} from "../controllers/contactController";

const router = Router();

router.post("/", createContactMessage);
router.get("/", getContactMessages);
router.patch("/:id/status", updateContactMessageStatus);

export default router;