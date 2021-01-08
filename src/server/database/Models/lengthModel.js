import mongoose from 'mongoose';
import { lengthSchema } from '../Schemas/lengthSchema';

const mongoDBDocuments =
  process.env.NODE_ENV === 'production' ? 'creations' : 'dev--creations';

export const lengthModel = mongoose.model(mongoDBDocuments, lengthSchema);
