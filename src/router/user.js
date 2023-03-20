import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  update2,
  remove,
} from "../controllers/user.js";

const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", getDetail);
router.post("/users", create);
router.put("/users/:id", update);
router.patch("/users/:id", update2);
router.delete("/users/:id", remove);

export default router;