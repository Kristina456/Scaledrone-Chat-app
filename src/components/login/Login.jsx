import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";
import { quotes } from "./Quotes";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState("👧");
  const [error, setError] = useState("");
  const [quote, setQuote] = useState(null);

  const { onUserLogin } = useContext(UserContext);

  function randomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }

  useEffect(() => {
    if (!quote) {
      randomQuote();
    }
  }, [quote]);

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!username || !username.replace(/\s/g, "").length) {
                setError("Please enter your name :)");
              } else {
                setError(null);
                onUserLogin(username, avatar);
              }
            }}
          >
            <div className="form-control">
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <input
                className="form__username-input"
                type="text"
                maxLength="20"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="form__error-message">{error}</div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="avatar">Avatar</label>
              </div>
              <select
                className="form__avatar-input"
                onChange={(e) => setAvatar(e.target.value)}
              >
                <option value="👧">👧</option>
                <option value="🧒">🧒</option>
                <option value="😈">😈</option>
                <option value="🤖">🤖</option>
                <option value="🎃">🎃</option>
                <option value="👽">👽</option>
                <option value="👻">👻</option>
                <option value="🌸">🌸</option>
                <option value="🦔">🦔</option>
                <option value="🐸">🐸</option>
              </select>
            </div>
            <div className="form-control">
              <button type="submit" className="form__login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="quotes-wrapper">
        {quote && (
          <div className="quotes">
            <div>{quote.quote} </div>
            <div
              style={{
                fontSize: "20px",
                textAlign: "left",
                padding: "10px",
              }}
            >
              - {quote.author} -
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
