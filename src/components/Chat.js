import React, { useState } from "react";
import "../components/Chat.css";

const Chat = () => {
  const [showbox, setShowbox] = useState(false);

  const showchatbox = () => {
    setShowbox(!showbox);
  };
  return (
    <>
      <div className="tidio-chat">
      
        <div
            className="mobile awesome-iframe"
            style={{ overflow: "hidden", margin: "0", color: "rgb(6,19,43)" }}
          >
            <div className="frame-content">
              <div className="bubbleWithLabel mobile">
                {showbox ? (
                  <div className="chat chrome">
                    <div className="chat-header">
                      <div className="avatars-warpper operators-avatar-1">
                        <div className="header-avatar"></div>
                      </div>

                      <h2 className="oneline">
                        <span
                          style={{ marginLeft: "8px", marginBottom: "10px" }}
                        >
                          Hi There
                          <img
                            className="emoji"
                            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"
                            alt=""
                            style={{ marginLeft: "8px", marginBottom: "10px" }}
                          />
                        </span>
                      </h2>

                      <button
                        className="material-icons exit-chat ripple"
                        style={{ color: "rgb(255, 255, 255);" }}
                        onClick={showchatbox}
                      >
                        <svg
                          id="ic-minimize"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12Z" />
                        </svg>
                        <span>Minimize</span>
                      </button>

                      <button
                        className="material-icons options ripple"
                        style={{ color: "rgb(255, 255, 255);" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M12 8c1.1 0 2-0.9 2-2s-0.9-2-2-2s-2 0.9-2 2s0.9 2 2 2Zm0 2c-1.1 0-2 0.9-2 2s0.9 2 2 2s2-0.9 2-2s-0.9-2-2-2Zm0 6c-1.1 0-2 0.9-2 2s0.9 2 2 2s2-0.9 2-2s-0.9-2-2-2Z" />
                        </svg>
                        <span>Open options</span>
                      </button>

                      <div
                        className="offline-message"
                        style={{ backgroundColor: "rgba(59, 105, 5, 0.72)" }}
                      >
                        <span>We typically reply within a few minutes.</span>
                      </div>
                    </div>

                    <div className="" id="conversation-group">
                      <div id="messages">
                        <div className="history-button-wrapper">
                          <button className="history-button" type="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89 0.07 0.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-0.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9Zm-1 5v5l4.28 2.54 0.72-1.21l-3.5-2.08V8H12Z" />
                            </svg>
                            Previous Messages
                          </button>
                        </div>
                      </div>
                      <div id="conversation-scroll">
                        <div style={{ top: "0px", height: "0px" }}></div>
                      </div>
                    </div>

                    <div className="input-group">
                      <div className="drag-active-wrapper footer-input-wrapper">
                        <hr />
                        <textarea
                          id="new-message-textarea"
                          rows="1"
                          placeholder="Enter your message..."
                        ></textarea>
                      </div>
                      <div className="footer-bottom d-flex">
                        <div className="footer-icons-wrapper">
                          <button
                            type="button"
                            className="material-icons emoji-switch ripple"
                            style={{ color: "rgb(0,125,252)" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm3.5-9c0.83 0 1.5-0.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5S14.67 11 15.5 11zm-7 0c0.83 0 1.5-0.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c0.8 2.04 2.78 3.5 5.11 3.5z" />
                            </svg>
                          </button>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: "80px",
                          }}
                        >
                          <a
                            href="https://www.tidio.com/powered-by-tidio/?platform=others&project=zmncdasuru3tphxija5q3qzky8gmhqtu&device=desktop&utm_source=plugin_ref&utm_medium=widget_v4&utm_campaign=plugin_ref&utm_referrer=www.hotelaradhanainn.in"
                            className="tidio-5hhiig"
                            style={{ textDecoration: "none" }}
                          >
                            <span>POWERED BY</span>
                            <p
                              style={{
                                fontWeight: "600",
                                fontSize: "13px",
                                color: "black",
                                marginTop: "10px",
                              }}
                            >
                              TIDIO
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <button
                  className={`widgetlabel ${showbox && "d-none"}`}
                  onClick={showchatbox}
                >
                  <span>
                    Chat With Aradhana
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"
                      alt=""
                      className="emoji"
                      style={{
                        width: "20px",
                        margin: "0px 2px 5px 2px",
                        userSelect: "none",
                      }}
                    />
                  </span>
                </button>

                <div id="button" className="chat-closed">
                  <div className="buttonWave"></div>
                  <button
                    type="button"
                    id="button-body"
                    className="chrome"
                    onClick={showchatbox}
                  >
                    <i
                      className={`material-icons type1 for-closed ${
                        !showbox && "active"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 2H4c-1.1 0-2 0.9-2 2v18l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2Z" />
                      </svg>
                    </i>
                    <i
                      className={`material-icons type2 for-closed ${
                        !showbox && "active"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04c0.39-0.39 0.39-1.02 0-1.41l-2.34-2.34c-0.39-0.39-1.02-0.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" />
                      </svg>
                    </i>
                    <i
                      className={`material-icons type1 for-opened ${
                        showbox && "active"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2Z" />
                      </svg>
                    </i>
                    <i
                      className={`material-icons type2 for-opened ${
                        showbox && "active"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2Z" />
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        
        
      </div>
    </>
  );
};

export default Chat;
