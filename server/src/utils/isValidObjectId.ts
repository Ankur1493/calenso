import { Types } from 'mongoose';

const isValidObjectId = (id: string): boolean => {
  return Types.ObjectId.isValid(id);
};

export default isValidObjectId;
