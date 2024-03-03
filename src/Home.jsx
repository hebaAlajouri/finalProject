import React from "react";
import "./Home.css"; // Import your CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Our Blog Website!</h2>
      <p>
        Explore interesting articles, share your thoughts, and engage with our
        community.
      </p>

      <div className="photo-container">
        <img
          src="https://static.wixstatic.com/media/f61af8_e15083b95c954f71a1b4d9a5a78ded70~mv2_d_2121_1312_s_2.jpg/v1/fill/w_1349,h_679,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_e15083b95c954f71a1b4d9a5a78ded70~mv2_d_2121_1312_s_2.jpg"
          alt="1"
          className="photo"
        />
      </div>
    </div>
  );
}

export default Home;
