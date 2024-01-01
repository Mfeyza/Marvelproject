//! ilk önce registerdan başla
//! autcontexte yapını oluştur. ilk yapın:

// import { auth } from "../auth/firebase";
// import { createContext, useContext } from "react";


// export const AuthContext = createContext();

// export const useAuthContext=()=>{
//     return useContext(AuthContext);
// };

// const values={};
// const AuthContextProvider=({children})=>{
//     return <AuthContext.Provider valur={values}>{children}</AuthContext.Provider>
// }
// export default AuthContextProvider

//!' R  egisterda usestateni oluştur ve gireceğin verileri içindeboş olarak ver birleşik usesate oluştur
// const [info, setInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });


  //?  daha sonra git ve verileri girdiğin inputlara handlechange fonksiyonunu ver
//   const handleChange = (e) =>
//   setInfo({ ...info, [e.target.name]: e.target.value });
//! bununla handlechance i bitir


// //! register butonuna form ise onsubmit ver dğeilse onclick ver, onclikte şunlar olsun
// const handleClick = (e) => {
    
//     const { email, password, firstName, lastName } = info;
//     console.log(info);
   
//   };

  //!şimdi gidip authcontextde createUserı oluştur firebase yardımı ile 
//   const createUser=async(email,password,displayName)=>{
//     try {
//         const userCredent=await createUserWithEmailAndPassword(
//             auth,email,password
//         );
//         await updateProfile(auth.currentUser,{
//             displayName: displayName
//         })
//     } catch (error) {
        
//     }
// }
//! burada currentUser ı takip ediyorsun bu yüzden bi currentuser state i açmalısın ve verilerini sessionstoragede saklamalısın.

//? kullanıcı doğru kayır-t oluşturduğunda onu istediğin sayfaya navigate ile yönlendirmelisin
// navigate("/")
//!'catch e ve  try a mutlaka consol mesajı yazdırmayı unutma
//! şimdi registera git kaydet butonu giriş butanıu ve onclick olduğunda 
// const handleClick=(e)=>{
//     const { email, password, firstName, lastName } = info;
//     console.log(info);
//     const displayName = `${firstName} ${lastName}`; //! name değişikliği yapmak için
//     createUser(email, password, displayName); //! oluşturudğun user ı sakla


//    }
//! register omponentinde createuser ı contextiyle götür yerleştir
// const { createUser } = useAuthContext();
// //! importu unutma 
// import { useAuthContext } from "../context/AuthContext";


//!' şimdi userObserver yap çünkü registerdan direkt giriş yapamadın logine yönlendirdi seni privaterouter asenkron muhabbetlerinden ötürü böyle oldu 

//!PrivateRouter bileşeniniz, currentUser'ı kontrol ederek kullanıcının giriş yapmış olup olmadığını kontrol ediyor ve eğer kullanıcı giriş yapmamışsa onu /login sayfasına yönlendiriyor. Kullanıcı oluşturma işleminden sonra /Home sayfasına yönlendirilmesini beklerken /login sayfasına yönlendirilmesi, currentUser state'inin hemen güncellenmemiş olmasıyla ilgili olabilir.createUser fonksiyonunuzda navigate("/Home")'i çağırdıktan sonra currentUser state'inin güncellenmesini beklemeniz gerekebilir. Bu işlem, onAuthStateChanged içinde yapılıyor olmalı, ancak bu işlem asenkron olduğu için hemen gerçekleşmeyebilir.

// const userObserver=()=>{
//     onAuthStateChanged(auth,(user)=>{
//         if(user){
//             console.log("şuanki kullanııcı:", user);
//             const {email,displayName,photoURL}=user
//             setCurrentUser({email,displayName,photoURL});
//             sessionStorage.setItem(
//                 "user",
//                 JSON.stringify({email,displayName,photoURL})
//             );
//         }else{
//             setCurrentUser(false)
//             sessionStorage.removeItem("user")
//         }
//     })
// }

//!şimdi signIn giriş yapma zamanı logindesin. Autcontexe gidip contexini yaz login de çağıracaksın oraya götürmeyi sakın unutma