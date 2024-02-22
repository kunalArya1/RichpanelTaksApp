import React from "react";

const FacebookLoginButton = () => {
  const handleFacebookLogin = () => {
    // window.FB.login(
    //   function (response) {
    //     // Handle the response from Facebook login
    //     console.log(response);
    //   },
    //   { scope: "email, public_profile" }
    // );
  };
  return (
    <div className=" h-[86vh] bg-blue-200 text-center">
      <button
        onClick={handleFacebookLogin}
        className=" p-5 bg-blue-600 mt-[9rem] rounded-lg cursor-pointer"
      >
        Connect to Facebook
      </button>
    </div>
  );
};

export default FacebookLoginButton;
