import mongoose from 'mongoose';
import { URLSchema } from '../Schemas/URLSchema';

const mongoDBDocuments = process.env.NODE_ENV === 'production' ? 'urls' : 'dev--urls';

export const URLsModel = mongoose.model(mongoDBDocuments, URLSchema);
