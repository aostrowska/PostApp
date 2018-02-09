import { firebaseDB } from './firebase';

export const speedValue = firebaseDB.child('speed');

export default speedValue;
