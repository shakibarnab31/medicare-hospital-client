import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.config";


const initializeAthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAthentication;