import mongoose from "mongoose";
const ratingSchema = new mongoose.Schema({
  vendorName: {
    type: String,
  },
  vendorEmail: {
    type: String,
  },
  rating: {
    type: Number,
  },
  comments: {
    type: String,
  },
  paymentProof: {
    type: String,
  },
});

export const RatingModal = mongoose.model("rating", ratingSchema);