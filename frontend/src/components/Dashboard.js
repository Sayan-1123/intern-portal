import React from "react";
import Leaderboard from "../components/Leaderboard"; // Adjust path if needed

function Dashboard() {
  const user = {
    name: "Sayan Mukherjee",
    email: "sayan@example.com",
    referralCode: "REF2025XYZ",
    totalDonations: 12,
    rewards: ["T-shirt", "Certificate", "LinkedIn Endorsement"],
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const sectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "15px 20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    color: "#2c3e50",
    marginBottom: "10px",
  };

  const listStyle = {
    paddingLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome, {user.name}</h1>

      <div style={sectionStyle}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Referral Code:</strong> {user.referralCode}</p>
        <p><strong>Total Donations:</strong> {user.totalDonations}</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Rewards</h2>
        <ul style={listStyle}>
          {user.rewards.map((reward, idx) => (
            <li key={idx}>{reward}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Leaderboard</h2>
        <Leaderboard />
      </div>
    </div>
  );
}

export default Dashboard;
