import React from "react";

const Leaderboard = () => {
  const dummyData = [
    { rank: 1, name: "Alice", referralCode: "AL123", donations: 15 },
    { rank: 2, name: "Bob", referralCode: "BO456", donations: 10 },
    { rank: 3, name: "Charlie", referralCode: "CH789", donations: 8 },
  ];

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🏆 Leaderboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Referral Code</th>
            <th style={thStyle}>Donations</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((entry) => (
            <tr key={entry.rank}>
              <td style={tdStyle}>{entry.rank}</td>
              <td style={tdStyle}>{entry.name}</td>
              <td style={tdStyle}>{entry.referralCode}</td>
              <td style={tdStyle}>{entry.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default Leaderboard;
