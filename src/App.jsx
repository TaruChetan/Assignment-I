import React, { useState } from "react";
import PomoTimer from "./components/Timer/PomoTimer";
import UserLogin from "./components/Login/UserLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./components/firebase/firebase-config";
import { Button, message, Space } from "antd";

const App = () => {
  const [popup, Holder] = message.useMessage();
  const [isLogin, setIsLogin] = useState(false);
  const showPopup = (type, content) => {
    popup.open({
      type: type,
      content: content,
    });
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        showPopup("success", "logged in");
        setInterval(() => {
          setIsLogin(true);
        }, 500);
      }
    } catch (error) {
      showPopup("error", "Invalid user");
    }
  };
  const handleCredentials = async (value) => {
    const { Email, password } = value;
    login(Email, password);
  };
  return (
    <div>
      {Holder}
      {isLogin ? (
        <PomoTimer />
      ) : (
        <UserLogin handleCredentials={handleCredentials} />
      )}
    </div>
  );
};

export default App;
