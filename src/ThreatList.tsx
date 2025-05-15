import React, { useEffect, useState } from "react";

interface Tweet {
  text: string;
  category: string;
}

const ThreatList: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/threats")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setTweets(data.tweets || []);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load threats.");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Threat Tweets</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            <strong>{tweet.category || "Unknown"}:</strong> {tweet.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreatList;
