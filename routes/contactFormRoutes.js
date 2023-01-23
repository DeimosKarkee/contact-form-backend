import {
  getAllContact,
  getSingleContact,
  updateContact,
  createContact,
  deleteContact,
} from "../controllers/contactFormControllers.js";
import express from "express";

const router = express.Router();

router.route("/").get(getAllContact).post(createContact);

router
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

export default router;
