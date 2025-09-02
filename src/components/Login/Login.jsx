import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with google</button>
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