import React, { PureComponent } from 'react'
import firebaseObj, { firebaseGoogleAuth } from '../../api/firebase'

class LogIn extends PureComponent {
  componentWillMount() {
    // firebaseObj.auth().getRedirectResult().then((result) => {
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const token = result.credential.accessToken;
    //     // ...
    //   }
    //   // The signed-in user info.
    //   const user = result.user;
    //   debugger;
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   const credential = error.credential;
    //   debugger;
    // });

    firebaseObj.auth().onAuthStateChanged(user => {
      if(user) {
        debugger;
        // window.location = 'home.html'; //After successful login, user will be redirected to home.html
      }
    });

    // debugger;


    // firebaseObj.auth().signInWithPopup(firebaseGoogleAuth).then(function(result) {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   debugger;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    //   debugger;
    // });
  }

  loginCallback = () => {
    firebaseObj.auth().signInWithRedirect(firebaseGoogleAuth);
  }

  render() {
    return (
      <button onClick={this.loginCallback}>
        Login!
      </button>
    )
  }
}

export default LogIn
