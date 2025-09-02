import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log("Error: ", error);
                setUser(null);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign out done");
            setUser(null);
        })
        .error(err => {
            console.log(err);
        })
     }


    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Login with google</button>
            }
            {
                user && <div>
                    <h4>Welcome {user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;