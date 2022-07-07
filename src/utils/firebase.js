import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
	collection,
	writeBatch,
	query
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBR2N-Ga3Yl3NYm7i9WZNR0A5rCrNCGEoY",
	authDomain: "crwn-clothing-db-11003.firebaseapp.com",
	projectId: "crwn-clothing-db-11003",
	storageBucket: "crwn-clothing-db-11003.appspot.com",
	messagingSenderId: "1324907603",
	appId: "1:1324907603:web:0282bb5455e771ef469aa6"
};

// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account"
});

export const db = getFirestore();
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	
	if(userSnapshot.exists()) return userDocRef;
	
	const { displayName, email } = userAuth;
	const createdAt = new Date();
	
	try {
		await setDoc(userDocRef, {
			displayName,
			email,
			createdAt,
			...additionalInfo
		});
	} catch (error) {
		console.log('error creating new user', error.message)
	}
	
	return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;
	
	return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;
	
	return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	
	objectsToAdd.forEach(obj => {
		const docRef = doc(collectionRef, obj.title.toLowerCase());
		
		batch.set(docRef, obj);
	});
	
	await batch.commit();
	
	console.log('batch committed');
};
export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	
	const querySnapshot = await getDocs(q);
	
	return querySnapshot.docs.reduce((accumulator, docSnapshot) => {
		const {title, items} = docSnapshot.data();
		
		accumulator[title.toLowerCase()] = items;
		
		return accumulator;
	}, {});
};