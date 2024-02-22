import React from "react";
import FacebookLogin from "react-facebook-login";
import FacebookLoginButton from "./FacebookLoginButton";

const App = () => {
  const responseFacebook = (response) => {
    // Handle the response from Facebook login
    console.log(response);
  };

  return (
    <div>
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId="3822425784713677"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <FacebookLoginButton onFacebookLogin={renderProps.onClick} />
        )}
      />
    </div>
  );
};

export default App;
