import mongoose from 'mongoose';
import { URLSchema } from '../Schemas/URLSchema';

export const URLsModel = mongoose.model('urls', URLSchema);
