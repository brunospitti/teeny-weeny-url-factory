import { lengthModel } from '../database/Models/lengthModel';

export const totalCreationsMiddleware = async (req, res, next) => {
  lengthModel.findOne({}).exec(function (err, data) {
    if (err) return next(err);

    res.status(200).send({ totalURLsCreated: data.totalURLsCreated });
  });
};
