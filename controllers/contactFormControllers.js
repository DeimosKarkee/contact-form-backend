import asyncHandler from "../middlewares/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import ContactFormModel from "../models/ContactFormModel.js";

export const getAllContact = asyncHandler(async (req, res, next) => {
  const allContact = await ContactFormModel.find();
  res.status(200).json({ success: true, data: allContact });
});

export const getSingleContact = asyncHandler(async (req, res, next) => {
  const singleContact = await ContactFormModel.findById(req.params.id);
  if (!singleContact) {
    return next(
      ErrorResponse(`Contact not found with the id of ${req.params.id}, 400`)
    );
  }
  res.status(200).json({ success: true, data: singleContact });
});

export const createContact = asyncHandler(async (req, res, next) => {
  const createContact = await ContactFormModel.create(req.body);
  res.status(201).json({ success: true, data: createContact });
});

export const updateContact = asyncHandler(async (req, res, next) => {
  const updateContact = await ContactFormModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!updateContact) {
    return next(
      ErrorResponse(
        `Cannot update contact with the id of ${req.params.id}, 400`
      )
    );
  }
  res.status(200).json({ success: true, data: updateContact });
});

export const deleteContact = asyncHandler(async (req, res, next) => {
  const deleteContact = await ContactFormModel.findByIdAndDelete(req.params.id);
  if (!deleteContact) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
