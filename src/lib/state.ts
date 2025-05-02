import { db } from '$lib/firebase';
import { set, get, ref } from 'firebase/database';

export async function setSavedState(value: Number) {
    await set(ref(db, 'vote/selected'), value);
}

export async function getSavedState() {
  const snapshot = await get(ref(db, 'vote/selected'));
  return snapshot
}