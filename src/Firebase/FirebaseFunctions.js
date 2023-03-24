import firebaseApp from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, remove, update, push, child, get } from 'firebase/database';

const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const signUp = (creds) => {
    return createUserWithEmailAndPassword(auth, creds.email, creds.password)
}
const signIn = (creds) => {
    return signInWithEmailAndPassword(auth, creds.email, creds.password)
}
const deleteData = (reference) => {
    return remove(ref(db, reference));
}

const updateData = (reference, data) => {
    return update(ref(db, reference), data);
}

const setData = (reference, data) => {
    let tempKey = push(ref(db, reference)).key
    return set(child(ref(db, reference), tempKey), {
        key: tempKey,
        ...data
    });
}
const subscribe = (reference, callback) => {
    onValue(ref(db, reference), callback);
}

const getData = (reference) => {
    return get(ref(db, reference))
}

export {
    signUp,
    signIn,
    deleteData,
    updateData,
    setData,
    subscribe,
    getData
};