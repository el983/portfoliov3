import React from 'react';
import './ProfileCard.css';
import profileImage from '../assets/card234.jpeg'; // Replace with actual profile image path

const ProfileCard = () => {
  return (
    <div className="container-profile">
      <div className="cover-photo">
        <img src={profileImage} alt="" />
      </div>
      <div className="profile-name">Joy Chowdhury</div>
      <p className="about">Learning & Development leader, motivational speaker, and emotional intelligence coach with over 21 years of experience</p>
      {/* <button className="msg-btn">Message</button>
      <button className="follow-btn">Following</button> */}
      <div className='icons'>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
};

export default ProfileCard;
