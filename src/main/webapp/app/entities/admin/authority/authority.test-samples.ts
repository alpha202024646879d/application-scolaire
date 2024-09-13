import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'beeaac6c-9cfb-407d-ae14-18456bbfdad8',
};

export const sampleWithPartialData: IAuthority = {
  name: '1e0a02f7-f494-49d9-9886-16885d798c9d',
};

export const sampleWithFullData: IAuthority = {
  name: 'c82b833e-84cf-491d-a282-9a2acd6ef831',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
