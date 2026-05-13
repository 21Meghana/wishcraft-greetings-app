import { useRef } from "react";

import html2canvas from "html2canvas";

import "../styles/card.css";

function GreetingCard({ template }) {
  const cardRef = useRef();

  const username = localStorage.getItem("username");

  const photo = localStorage.getItem("photo");

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current);

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");

    link.href = image;

    link.download = "greeting-card.png";

    link.click();
  };

  const handlePremium = () => {
    alert("Premium subscription required");
  };

  return (
    <div className="card-wrapper">
      <h3>{template.category}</h3>

      <div ref={cardRef} className="card">
        <img src={template.image} alt="" />

        <div className="overlay">
          {photo && <img src={photo} alt="" className="profile-pic" />}

          <div className="username">
            <div>✨ {username}</div>
          </div>
        </div>
      </div>

      {template.premium ? (
        <button className="card-btn premium-btn" onClick={handlePremium}>
          Premium
        </button>
      ) : (
        <button className="card-btn download-btn" onClick={handleDownload}>
          Share / Download
        </button>
      )}
    </div>
  );
}

export default GreetingCard;
