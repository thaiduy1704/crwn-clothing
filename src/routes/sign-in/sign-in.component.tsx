import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { Button } from "antd";
const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log("@Response", response);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button type="primary" onClick={logGoogleUser}>
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignIn;
