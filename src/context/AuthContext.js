import { Password } from "@mui/icons-material";
import { auth } from "../auth/firebase";
import { createContext, useContext, useState,useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signOut,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";


export const AuthContext = createContext();

export const useAuthContext=()=>{
    return useContext(AuthContext);
};
const AuthContextProvider=({children})=>{
const [currentUser,setCurrentUser]=useState(
    JSON.parse(sessionStorage.getItem("user"))
)
const navigate=useNavigate();
useEffect(() => {
    userObserver();
  }, []);


const createUser=async(email,password,displayName)=>{
    try {
        const userCredential=await createUserWithEmailAndPassword(
            auth,email,password
        );
        await updateProfile(auth.currentUser,{
            displayName: displayName,
        })
        navigate("/Home")
        console.log("Giriş başarılı kahraman!");
        toastSuccessNotify("Giriş başarılı kahraman!");
    } catch (error) {
        console.log("olmadı");
    }
}
const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { email, displayName, photoURL } = user;
            setCurrentUser({ email, displayName, photoURL });
            sessionStorage.setItem("user", JSON.stringify({ email, displayName, photoURL }));
            console.log(sessionStorage);
        } else {
            setCurrentUser(false);
            sessionStorage.removeItem("user");
        }
    });
};


const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/Home");
        toastSuccessNotify("Havalı bir giriş Kahraman");
    } catch (error) {
        toastErrorNotify("Giriş sırasında bir hata oluştu.");
        console.error("Giriş hatası: ", error);
    }
};

const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Güle güle yine gel :)");
  };
const signUpProvider=()=>{
    const provider =new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((result)=>{
        navigate("/Home")
        toastSuccessNotify("Giriş Başarılı Kahraman");

    })
    .catch((error)=>{
        console.log("giriş olmadı");
    })
}

const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
       
        toastSuccessNotify("Mail adresine uçtu");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

const values={createUser,signIn, logOut, currentUser,signUpProvider,forgotPassword};

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
export default AuthContextProvider