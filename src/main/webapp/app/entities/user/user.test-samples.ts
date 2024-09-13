import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 27628,
  login: 'je',
};

export const sampleWithPartialData: IUser = {
  id: 31308,
  login: 'QqDz-',
};

export const sampleWithFullData: IUser = {
  id: 13294,
  login: '7hSLf',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
