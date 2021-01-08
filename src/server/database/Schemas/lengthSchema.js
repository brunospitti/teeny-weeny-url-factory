import mongoose from 'mongoose';

export const lengthSchema = new mongoose.Schema({
  totalURLsCreated: { type: Number, required: true },
});
