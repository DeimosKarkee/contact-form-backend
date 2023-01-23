import asyncHandler from "../middlewares/asyncHandler";
import ErrorResponse from "../utils/ErrorResponse";
import ContactFormModel from "../models/ContactFormModel";

export const getAllContact = asyncHandler((req, res, next) => {
  const allContact = ContactFormModel.find();
  res.status(200).json({ success: true, data: allContact });
});

export const getSingleContact = asyncHandler((req, res, next) => {
  const singleContact = ContactFormModel.findById(req.params.id);
  if (!singleContact) {
    return next(
      ErrorResponse(`Contact not found with the id of ${req.params.id}, 400`)
    );
  }
  res.status(200).json({ success: true, data: singleContact });
});

export const createContact = asyncHandler((req, res, next) => {
  const createContact = ContactFormModel.create(req.body);
  res.status(201).json({ success: true, data: req.body });
});

export const updateContact = asyncHandler((req, res, next) => {
  const updateContact = ContactFormModel.findByIdAndUpdate(
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

export const deleteContact = asyncHandler((req, res, next) => {
  const deleteContact = ContactFormModel.findByIdAndDelete(req.params.id);
  if (!deleteContact) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
