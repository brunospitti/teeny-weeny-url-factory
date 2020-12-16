import { URLsModel } from '../Models/URLsModel';

export const cleanUpDatabase = (callback) => {
  return URLsModel.remove({}, function () {
    console.log('Database cleanup - SUCCESS');

    callback?.();
  });
};
