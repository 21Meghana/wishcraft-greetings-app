import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

function Login() {

  const [name, setName] = useState("");

  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  const handleContinue = () => {

    localStorage.setItem("username", name);

    if(photo){

      const reader = new FileReader();

      reader.onloadend = () => {

        localStorage.setItem("photo", reader.result);

        navigate("/home");
      };

      reader.readAsDataURL(photo);

    }else{

      navigate("/home");
    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <div className="logo">🎴</div>

        <h1 className="title">
          WishCraft
        </h1>

        <p className="subtitle">
          Personalized Greetings & Wishes
        </p>

        <input
          className="input-field"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="input-field upload"
          type="file"
          onChange={(e)=>setPhoto(e.target.files[0])}
        />

        <button
          className="continue-btn"
          onClick={handleContinue}
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default Login;