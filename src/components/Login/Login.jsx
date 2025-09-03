import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
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

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(res => {
            console.log(res.user);
            setUser(res.user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <div>
                        <button onClick={handleGoogleSignIn}>Login with google</button>
                        <button onClick={handleGitHubSignIn}>Login with GitHub</button>
                    </div>
            }

            {
                user && <div>
                    <h4>Welcome {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;