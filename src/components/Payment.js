import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import rooms from "./RoomsData";
import Skeleton from "react-loading-skeleton";
import countries from "./Countries";

const Payment = () => {
  const { id } = useParams();
  const [roomdetails, setRoomdetails] = useState([]);
  const [total, setToatal] = useState(1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setRoomdetails(() =>
      rooms.filter((room) => {
        return room.id === parseInt(id);
      })
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="verticalline"
        style={{
          height: "100vh",
          border: "1px solid transparent",
          boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: "0",
          left: "50%",
          color: "white",
          backgroundColor: "transparent",
        }}
      ></div>



      <div
        className="App-Container d-flex flex-nowrap justify-content-center"
        style={{ minHeight: "570px" }}
      >
        <div
          className="App App-singleItem d-flex flex-column align-items-center position-relative"
          style={{ paddingTop: "16px", marginTop: "0", width: "100%" }}
        >
          <div
            className="App-Overview "
            style={{ width: "100%", padding: "0 16px 16px", paddingTop:"100px" }}
          >
            <header className="Header" style={{ minHeight: "28px" }}>
              <div className="Header-Content d-flex flex-nowrap justify-content-between align-items-stretch">
                <div
                  className="Header-business d-flex flex-nowrap flex-grow-1 align-items-center flex-shrink-1"
                  style={{ flex: "0 1 auto", maxWidth: "100%" }}
                >
                  <a
                    className="Header-businessLink"
                    href="https://www.hotelaradhanainn.in//rooms"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      marginLeft: "-24px",
                      minWidth: "60px",
                      paddingLeft: "24px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="position-relative">
                      <div className="d-flex flex-nowrap align-items-center">
                        <div
                          className="Header-backArrowContainer d-flex align-items-center"
                          style={{
                            opacity: "1",
                            transform: "none",
                            marginRight: "8px",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="Header-backArrow bi bi-arrow-left"
                            viewBox="0 0 16 16"
                            style={{
                              fill: "hsla(0,0%,10%,0.9)",
                              opacity: "4",
                              transition:
                                "opacity .25s ease,transform .25s ease,width .25s ease,-webkit-transform .25s ease",
                            }}
                          >
                            <path
                              fill-rule="evenodd"
                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                            />
                          </svg>
                        </div>
                        <div
                          className="Header-merchantLogoContainer d-flex align-items-center"
                          style={{ transform: "none" }}
                        >
                          <div
                            className="Header-merchantLogoWithLabel d-flex align-items-center"
                            style={{
                              maxWidth: "100%",
                              minWidth: "0",
                              flex: "0 1 auto",
                            }}
                          >
                            {loading ? <Skeleton style={{maxWidth: "100%",
                                minWidth: "0",                              
                                borderRadius: "100%",
                                boxShadow:
                                  "0 2px 5px 0 rgba(50,50,93,0.1),0 1px 1px 0 rgba(0,0,0,0.07)",
                                height: "28px",
                                width: "28px",
                                marginRight: "8px",}}/> : <div
                              className="Header-Image flex-basis-auto flex-shrink-0 d-flex flex-nowrap align-items-center justify-content-center"
                              style={{
                                maxWidth: "100%",
                                minWidth: "0",
                                background: "white",
                                borderRadius: "100%",
                                boxShadow:
                                  "0 2px 5px 0 rgba(50,50,93,0.1),0 1px 1px 0 rgba(0,0,0,0.07)",
                                height: "28px",
                                width: "28px",
                                marginRight: "8px",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-shop-window"
                                viewBox="0 0 16 16"
                                style={{
                                  height: "12px",
                                  fill: "hsla(0,0%,10%,0.5)",
                                }}
                              >
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </div>}
                            <span
                              className="Header-businesLink-Label"
                              style={{
                                color: "hsla(0,0%,10%,0.9)",
                                fontSize: "14px",
                                fontWeight: "500",
                                position: "absolute",
                                left: "0",
                                opacity: "0",
                                transform: "translateX(4px)",
                                transition:
                                  "opacity .1s ease 0ms,transform .1s ease 0ms,-webkit-transform .1s ease 0ms",
                              }}
                            >
                              Back
                            </span>
                            {!loading ? <h1
                              className="Header-businesLink-Name"
                              style={{
                                color: "hsla(0,0%,10%,0.9)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontSize: "14px",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                                marginTop: "5px",
                              }}
                            >
                              Hotel Aradhana Inn
                            </h1> : <Skeleton />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  {!loading ? <div
                    className="TestModeBadge flex-grow-0 flex-shrink-0"
                    style={{
                      margin: "0 8px",
                      display: "inline-block",
                      flex: "0 1 auto",
                    }}
                  >
                    <div
                      className="TestModeBadge-desktop testmode"
                      style={{
                        borderRadius: "4px",
                        padding: "2px 4px",
                        backgroundColor: "#ffde92",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          color: "#bb5504",
                          fontWeight: "700",
                          fontSize: "11px",
                          margin: "0",
                        }}
                      >
                        Test Mode
                      </span>
                    </div>
                    <div
                      className="TestModeBadge-mobile test"
                      style={{
                        borderRadius: "4px",
                        padding: "2px 4px",
                        backgroundColor: "#ffde92",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          color: "#bb5504",
                          fontWeight: "700",
                          fontSize: "11px",
                          margin: "0",
                        }}
                      >
                        Test
                      </span>
                    </div>
                  </div> : <Skeleton/>}
                </div>
              </div>
            </header>

            <div
              className="OrderSummaryColumn"
              style={{ maxWidth: "380px", margin: "0 auto" }}
            >
              <div
                className="product-summary d-flex flex-column align-items-center justify-content-center"
                style={{
                  marginTop: "32px",
                  marginBottom: "12px",
                  textAlign: "center",
                }}
              >
                <div
                  className="ProductSummary-productImageContainer d-flex align-items-center flex-shrink-0"
                  style={{ margin: "0 32px 16px 32px" }}
                >
                  {!loading ? <div
                    className="ProductImage-Container d-flex align-items-center position-relative"
                    style={{ height: "120px", textAlign: "center" }}
                  >
                    {roomdetails.map((room) => {
                      return (
                        <img
                          src={room.img}
                          alt={room.title}
                          className="ProductImage-image"
                          style={{
                            borderRadius: "6px",
                            maxWidth: "100%",
                            maxHeight: "120px",
                            borderStyle: "none",
                          }}
                        />
                      );
                    })}
                  </div> : <Skeleton className="imgskeleton" style={{width:"200px",height:"200px",borderRadius:"9px"}}/>}
                </div>

                <div
                  className="ProductSummary-Info d-flex flex-column  justify-content-center"
                  style={{ width: "100%" }}
                >
                  {!loading ? <span
                    className="ProductSummary-name"
                    style={{
                      color: "hsla(0,0%,10%,0.6)",
                      wordBreak: "break-word",
                      fontSize: "16px",
                      fontWeight: "500",
                      margin: "0",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "0",
                        position: "relative",
                        wordBreak: "break-word",
                      }}
                    >
                      {roomdetails.map((room) => {
                        return (
                          <div
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "100%",
                            }}
                          >
                            {room.title}
                          </div>
                        );
                      })}
                    </div>
                  </span> : <Skeleton  style={{width:"25%",height:"20px",borderRadius:"9px"}}/>}

                  {!loading ? <div className="ProductSummary-amountsContainer position-relative">
                    <div
                      className="ProductSummary-totalsread"
                      style={{ opacity: "1" }}
                    >
                      <div
                        className="ProductSummary-totalAmountContainer d-flex align-items-flex-end"
                        style={{ opacity: "1" }}
                      >
                        <span
                          style={{
                            fontSize: "28px",
                            margin: "2px 0 3px 0",
                            fontWeight: "600",
                            textAlign: "center",
                          }}
                        >
                          ₹{total}
                        </span>
                      </div>
                    </div>
                  </div> : <Skeleton  style={{width:"35%",height:"25px",borderRadius:"20px",marginTop:"20px"}}/>}
                </div>
              </div>
            </div>
          </div>

          <div
            className="App-payment "
            style={{
              backgroundColor: "white",
              paddingTop: "0",
              width: "100%",
              padding: "0 16px 16px",
            }}
          >
            <div
              className="CheckoutPaymentForm"
              style={{ margin: "0 auto", maxWidth: "380px" }}
            >
              <div
                className="PaymentRequestOrHeader position-relative"
                style={{ display: "inherit", height: "auto" }}
              >
                {!loading ? <div
                  className="PaymentHeaderContainer"
                  style={{ display: "block", opacity: "1", width: "100%" }}
                >
                  <div
                    className="PaymentHeader"
                    style={{ paddingBottom: "16px" }}
                  >
                    <div style={{ fontSize: "20px", fontWeight: "500" }}>
                      Pay with card
                    </div>
                  </div>
                </div> : <Skeleton style={{width:"42%",height:"26px",borderRadius:"16px"}}/>}
              </div>

              <div
                className="PaymentFormFixedHeightContainer d-flex flex-nowrap flex-column"
                style={{ height: "535px" }}
              >
                <form onSubmit={handleSubmit}>
                  <div style={{ height: "427px" }}>
                    <div style={{ opacity: "1" }}>
                      <div
                        className="App-Global-Fields d-flex flex-row flex-wrap"
                        style={{ marginBottom: "8px", margin: "-8px" }}
                      >
                        <div
                          style={{
                            padding: "8px",
                            width: "100%",
                            flex: "0 1 auto",
                          }}
                        >
                          {!loading ? <div className="FormFieldGroup">
                            <div className="d-flex justify-content-between flex-nowrap position-relative">
                              <label htmlFor="email-fieldset">
                                <span
                                  style={{
                                    color: "hsla(0,0%,10%,0.7)",
                                    fontWeight: "500",
                                    fontSize: "13px",
                                  }}
                                >
                                  Contact Information
                                </span>
                              </label>
                              <div style={{ opacity: "1", display: "none" }}>
                                <span
                                  style={{
                                    textTransform: "uppercase",
                                    color: "#dc2727",
                                    fontWeight: "500",
                                    fontSize: "11px",
                                  }}
                                >
                                  <span id="required-email">Required</span>
                                </span>
                              </div>
                            </div>
                            <fieldset
                              className="FormFieldGroup-Fieldset"
                              id="email-fieldset"
                              style={{
                                border: "none",
                                margin: "4px 0 0 0",
                                padding: "0",
                              }}
                            >
                              <div className="FormFieldGroup-Container d-flex flex-wrap position-relative">
                                <div
                                  className="FormFieldGroup-Child"
                                  style={{
                                    width: "100%",
                                    flex: "0 1 auto",
                                  }}
                                >
                                  <div className="FormFieldInput position-relative">
                                    <div className="CheckInputContainer position-relative">
                                      <div
                                        className="CheckInputContainer-placeholderIcon position-absolute z-3"
                                        style={{
                                          left: "12px",
                                          top: "calc(50% )",
                                          transform: "translateY(-50%)",
                                          paddingTop: "2px",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-envelope"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>
                                      </div>
                                      <span className="InputContainer">
                                        <input
                                          className="form-control email-input"
                                          type="text"
                                          placeholder="email@example.com"
                                          aria-label="default input example"
                                          name="email"
                                          id="email"
                                          inputMode="email"
                                          autoComplete="email"
                                          style={{
                                            background: "white",
                                            boxShadow:
                                              "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                            color: "hsla(0,0%,10%,0.9)",
                                            fontSize: "16px",
                                            height: "44px",
                                            lineHeight: "1.5",
                                            padding: "8px 12px",
                                            position: "relative",
                                            width: "100%",
                                            textIndent: "24px",
                                            overflow: "hidden",
                                          }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="FormFieldGroup-Child"
                                  style={{
                                    width: "100%",
                                    flex: "0 1 auto",
                                  }}
                                >
                                  <div className="FormFieldInput position-relative">
                                    <div className="PhoneNumberInput">
                                      <div className="PhoneNumberInput-inputWrapper position-relative">
                                        <div className="CheckInputContainer position-relative">
                                          <div
                                            className="CheckInputContainer-placeholderIcon z-3 position-absolute"
                                            style={{
                                              left: "12px",
                                              top: "calc(50% + 1px)",
                                              transform: "translateY(-50%)",
                                            }}
                                          >
                                            <div
                                              className="PhoneNumberCountryCodeSelect-wrapper"
                                              style={{
                                                position: "relative",
                                                cursor: "pointer",
                                                height: "16px",
                                                width: "16px",
                                              }}
                                            >
                                              <img
                                                src="https://js.stripe.com/v3/fingerprinted/img/FlagIcon-IN-6a39178b5f1aad80f20d542659e2ac98.svg"
                                                alt=""
                                                className="z-3"
                                                style={{
                                                  height: "16px",
                                                  width: "16px",
                                                  borderStyle: "none",
                                                  position: "absolute",
                                                  top: "0",
                                                  left: "0",
                                                }}
                                              />

                                              <select
                                                className="PhoneNumberCountryCodeSelect-select"
                                                style={{
                                                  appearance: "none",
                                                  backgroundColor: "inherit",
                                                  border: "none",
                                                  outline: "0",
                                                  position: "absolute",
                                                  padding: "8px",
                                                  height: "0",
                                                  top: "0",
                                                  left: "0",
                                                }}
                                              >
                                                <optgroup label="A">
                                                  <option value="Afghanistan">
                                                    Afghanistan (+93)
                                                  </option>
                                                  <option value="Albania">
                                                    Albania (+355)
                                                  </option>
                                                  <option value="Algeria">
                                                    Algeria (+213)
                                                  </option>
                                                </optgroup>
                                                <optgroup label="B">
                                                  <option value="Bahamas">
                                                    Bahamas (+1)
                                                  </option>
                                                  <option value="Belgium">
                                                    Belgium (+32)
                                                  </option>
                                                </optgroup>
                                                <optgroup label="C">
                                                  <option value="Cambodia">
                                                    Cambodia (+855)
                                                  </option>
                                                  <option value="Canada">
                                                    Canada (+1)
                                                  </option>
                                                </optgroup>
                                                <optgroup label="D">
                                                  <option value="Denmark">
                                                    Denmark (+45)
                                                  </option>
                                                  <option value="Dominica">
                                                    Dominica (+1)
                                                  </option>
                                                </optgroup>
                                              </select>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-check-circle-fill z-4"
                                                viewBox="0 0 16 16"
                                                style={{
                                                  width: "8px",
                                                  fill: "hsla(0,0%,10%,0.5)",
                                                  position: "absolute",
                                                  bottom: "-1px",
                                                  right: "-4px",
                                                  height: "8px",
                                                }}
                                              >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                              </svg>
                                            </div>
                                          </div>

                                          <span
                                            className="InputContainer"
                                            style={{
                                              position: "relative",
                                              margin: "0",
                                              padding: "0",
                                            }}
                                          >
                                            <input
                                              className="form-control phoneno-input"
                                              type="text"
                                              placeholder="081234 56789"
                                              aria-label="default input example"
                                              name="email"
                                              id="email"
                                              inputMode="email"
                                              autoComplete="email"
                                              style={{
                                                background: "white",
                                                boxShadow:
                                                  "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                                color: "hsla(0,0%,10%,0.9)",
                                                fontSize: "16px",
                                                height: "44px",
                                                lineHeight: "1.5",
                                                padding: "8px 12px",
                                                position: "relative",
                                                width: "100%",
                                                textIndent: "24px",
                                                transition:
                                                  "box-shadow 0.08s ease-in,color 0.08s ease-in,filter 50000s",
                                              }}
                                            />
                                          </span>
                                        </div>
                                        <div
                                          className="PhoneNumberInput-dynamicIcons d-flex align-items-center z-3"
                                          style={{
                                            gap: "8px",
                                            position: "absolute",
                                            right: "12px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                          }}
                                        >
                                          <div
                                            className="PhoneNumberInput-tooltipIconWrapper"
                                            style={{
                                              padding: "12px",
                                              margin: "-12px",
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              fill="currentColor"
                                              class="bi bi-info-circle"
                                              viewBox="0 0 16 16"
                                              style={{
                                                color: "hsla(0,0%,10%,0.5)",
                                              }}
                                            >
                                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>

                                      <div
                                        className="PhoneNumberInput-errorMessageAnimation"
                                        style={{
                                          display: "none",
                                          height: "0px",
                                          opacity: "0",
                                        }}
                                      >
                                        <span
                                          style={{
                                            color: "#dc2727",
                                            fontSize: "13px",
                                            transition: "all .3s ease",
                                            transformOrigin: "top left",
                                          }}
                                        >
                                          Required
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="Fielderror-Container"
                                  style={{ opacity: "0", height: "0px" }}
                                >
                                  <span
                                    className="Fielderror"
                                    style={{
                                      color: "#dc2727",
                                      fontSize: "13px",
                                      transition: "all .3s ease",
                                      transformOrigin: "top left",
                                    }}
                                  ></span>
                                </div>
                              </div>
                              <div
                                className="Fielderror-Container"
                                style={{ opacity: "0", height: "0px" }}
                              >
                                <span
                                  className="Fielderror"
                                  style={{
                                    color: "#dc2727",
                                    fontSize: "13px",
                                    transition: "all .3s ease",
                                    transformOrigin: "top left",
                                  }}
                                ></span>
                              </div>
                            </fieldset>
                          </div> : <Skeleton style={{width:"100%",height:"40px",marginTop:"40px",borderRadius:"8px"}}/>}
                        </div>
                      </div>

                      <div style={{ opacity: "1", height: "auto" }}>
                        <div>
                          <div
                            className="PaymentForm-paymentMethodForm d-flex flex-column flex-wrap"
                            style={{ margin: "-8px" }}
                          >
                            <div
                              style={{
                                padding: "8px",
                                width: "100%",
                                flex: "0 1 auto",
                              }}
                            >
                              {!loading ? <div className="FormFieldGroup">
                                <div
                                  className="FormFieldGroup-labelContainer"
                                  style={{
                                    position: "relative",
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <label htmlFor="cardNumber-fieldset">
                                    <span
                                      style={{
                                        color: "hsla(0,0%,10%,0.7)",
                                        fontSize: "13px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Card Information
                                    </span>
                                  </label>
                                  <div
                                    style={{
                                      opacity: "1",
                                      transform: "none",
                                      display: "none",
                                    }}
                                  >
                                    <span
                                      style={{
                                        textTransform: "uppercase",
                                        color: "#dc2727",
                                        fontSize: "11px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Required
                                    </span>
                                  </div>
                                </div>
                                <fieldset
                                  className="FormFieldGroup-Fieldset"
                                  id="cardNumber-fieldset"
                                  style={{
                                    border: "none",
                                    padding: "4px 0 0 0",
                                    padding: "0",
                                  }}
                                >
                                  <div
                                    className="FormFieldGroup-container d-flex flex-wrap position-relative"
                                    id="cardNumber-fieldset-inner"
                                  >
                                    <div
                                      className="FormFieldGroup-child"
                                      style={{
                                        width: "100%",
                                        flex: "0 1 auto",
                                      }}
                                    >
                                      <div className="FormFieldInput position-relative">
                                        <div className="CheckoutInputContainer position-relative">
                                          <span
                                            className="InputContainer position-relative"
                                            style={{
                                              margin: "0",
                                              padding: "0",
                                              display: "block",
                                            }}
                                          >
                                            <input
                                              className="form-control cardNumber-input"
                                              type="text"
                                              placeholder="1234 1234 1234 1234"
                                              aria-label="default input example"
                                              name="email"
                                              id="email"
                                              inputMode="email"
                                              autoComplete="email"
                                              style={{
                                                background: "white",
                                                boxShadow:
                                                  "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                                color: "hsla(0,0%,10%,0.9)",
                                                fontSize: "16px",
                                                height: "44px",
                                                lineHeight: "1.5",
                                                padding: "8px 12px",
                                                position: "relative",
                                                width: "100%",
                                                textIndent: "24px",
                                                transition:
                                                  "box-shadow 0.08s ease-in,color 0.08s ease-in,filter 50000s",
                                              }}
                                            />
                                          </span>
                                        </div>
                                        <div
                                          className="FormFieldInput-Icons d-flex align-items-center z-3"
                                          style={{
                                            opacity: "1",
                                            height: "100%",
                                            paddingRight: "8px",
                                            position: "absolute",
                                            top: "0",
                                            right: "0",
                                          }}
                                        >
                                          <div style={{ transform: "none" }}>
                                            <span
                                              className="FormFieldInput-IconsIcon d-flex align-items-center"
                                              style={{ paddingRight: "4px" }}
                                            >
                                              <img
                                                src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                                                alt="Visa"
                                                style={{ height: "16px" }}
                                              />
                                            </span>
                                          </div>
                                          <div style={{ transform: "none" }}>
                                            <span
                                              className="FormFieldInput-IconsIcon d-flex align-items-center"
                                              style={{ paddingRight: "4px" }}
                                            >
                                              <img
                                                src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                                                alt="Visa"
                                                style={{ height: "16px" }}
                                              />
                                            </span>
                                          </div>
                                          <div style={{ transform: "none" }}>
                                            <span
                                              className="FormFieldInput-IconsIcon d-flex align-items-center"
                                              style={{ paddingRight: "4px" }}
                                            >
                                              <img
                                                src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                                                alt="Visa"
                                                style={{ height: "16px" }}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="FormFieldGroup-child"
                                      style={{ width: "50%", flex: "0 1 auto" }}
                                    >
                                      <div className="FormFieldInput position-relative">
                                        <div className="CheckInputContainer position-relative">
                                          <span
                                            className="InputContainer position-relative"
                                            style={{
                                              margin: "0",
                                              padding: "0",
                                              display: "block",
                                            }}
                                          >
                                            <input
                                              className="form-control monthyear-input"
                                              type="text"
                                              placeholder="MM / YY"
                                              aria-label="default input example"
                                              name="email"
                                              id="email"
                                              inputMode="email"
                                              autoComplete="email"
                                              style={{
                                                appearance: "none",
                                                background: "white",
                                                boxShadow:
                                                  "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                                color: "hsla(0,0%,10%,0.9)",
                                                fontSize: "16px",
                                                height: "44px",
                                                lineHeight: "1.5",
                                                padding: "8px 12px",
                                                position: "relative",
                                                width: "100%",
                                                textIndent: "24px",
                                                transition:
                                                  "box-shadow 0.08s ease-in,color 0.08s ease-in,filter 50000s",
                                              }}
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="FormFieldGroup-child"
                                      style={{ width: "50%", flex: "0 1 auto" }}
                                    >
                                      <div className="FormFieldInput position-relative">
                                        <div className="CheckInputContainer position-relative">
                                          <span
                                            className="InputContainer position-relative"
                                            style={{
                                              margin: "0",
                                              padding: "0",
                                              display: "block",
                                            }}
                                          >
                                            <input
                                              className="form-control cvc-input"
                                              type="text"
                                              placeholder="CVC"
                                              aria-label="default input example"
                                              name="email"
                                              id="email"
                                              inputMode="email"
                                              autoComplete="email"
                                              style={{
                                                appearance: "none",
                                                background: "white",
                                                boxShadow:
                                                  "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                                color: "hsla(0,0%,10%,0.9)",
                                                fontSize: "16px",
                                                height: "44px",
                                                lineHeight: "1.5",
                                                padding: "8px 12px",
                                                position: "relative",
                                                width: "100%",
                                                textIndent: "24px",
                                                transition:
                                                  "box-shadow 0.08s ease-in,color 0.08s ease-in,filter 50000s",
                                              }}
                                            />
                                          </span>
                                        </div>

                                        <div
                                          className="FormFieldInput-Iconis-loaded z-3"
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            height: "100%",
                                            paddingRight: "12px",
                                            position: "absolute",
                                            top: "0",
                                            right: "0",
                                          }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-credit-card-2-back"
                                            viewBox="0 0 16 16"
                                            aria-label="CVC"
                                            style={{
                                              color: "hsla(0,0%,10%,0.5)",
                                            }}
                                          >
                                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        opacity: "0",
                                        height: "0px",
                                        display: "none",
                                      }}
                                    >
                                      <span
                                        className="FiledError"
                                        style={{
                                          transition: "all .3s ease",
                                          transformOrigin: "top right",
                                          color: "#dc2727",
                                          fontSize: "13px",
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        Required
                                      </span>
                                    </div>
                                  </div>
                                </fieldset>
                              </div> : <Skeleton  style={{width:"100%",height:"75px",marginTop:"30px",borderRadius:"8px"}}/>}
                            </div>
                            <div
                              className="BillingAddressForm-addressInput"
                              style={{
                                padding: "8px",
                                width: "100%",
                                flex: "0 1 auto",
                              }}
                            >
                              <div
                                style={{
                                  display: "block",
                                  pointerEvents: "auto",
                                  height: "auto",
                                  opacity: "1",
                                }}
                              >
                                <div
                                  className="d-flex flex-column flex-wrap"
                                  style={{ margin: "-8px" }}
                                >
                                  <div
                                    style={{
                                      padding: "8px",
                                      width: "100%",
                                      flex: "0 1 auto",
                                    }}
                                  >
                                    {!loading ? <div className="FormFieldGroup">
                                      <div className="FormFieldGroup-labelContainer d-flex flex-nowrap justify-content-between position-relative">
                                        <label htmlFor="billingName">
                                          <span
                                            style={{
                                              color: "hsla(0,0%,10%,0.7)",
                                              fontSize: "13px",
                                              fontWeight: "500",
                                            }}
                                          >
                                            Cardholder Name
                                          </span>
                                        </label>

                                        <div
                                          style={{
                                            opacity: "1",
                                            transform: "none",
                                            display: "none",
                                          }}
                                        >
                                          <span
                                            style={{
                                              textTransform: "uppercase",
                                              color: "#dc2727",
                                              fontSize: "11px",
                                              fontWeight: "500",
                                            }}
                                          >
                                            Required
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className="FormFieldGroup-Fieldset"
                                        id="billingName-fieldset"
                                        style={{
                                          border: "none",
                                          margin: "4px 0 0 0",
                                          padding: "0",
                                        }}
                                      >
                                        <div
                                          className="FormFieldGroup-Container d-flex flex-wrap position-relative"
                                          id="billingName-fieldset-inner"
                                        >
                                          <div
                                            className="FormFieldGroup-child"
                                            style={{
                                              width: "100%",
                                              flex: "0 1 auto",
                                            }}
                                          >
                                            <div className="FormFieldInput position-relative">
                                              <div className="CheckInputContainer position-relative">
                                                <span
                                                  className="InputContainer"
                                                  style={{
                                                    display: "block",
                                                    margin: "0",
                                                    padding: "0",
                                                    position: "relative",
                                                  }}
                                                >
                                                  <input
                                                    className="form-control nameOncard-input"
                                                    type="text"
                                                    placeholder="Full name on card"
                                                    aria-label="default input example"
                                                    name="email"
                                                    id="email"
                                                    inputMode="email"
                                                    autoComplete="email"
                                                    style={{
                                                      appearance: "none",
                                                      background: "white",
                                                      boxShadow:
                                                        "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                                      color:
                                                        "hsla(0,0%,10%,0.9)",
                                                      fontSize: "16px",
                                                      height: "44px",
                                                      lineHeight: "1.5",
                                                      padding: "8px 12px",
                                                      position: "relative",
                                                      width: "100%",
                                                      textIndent: "24px",
                                                      transition:
                                                        "box-shadow 0.08s ease-in,color 0.08s ease-in,filter 50000s",
                                                    }}
                                                  />
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div> : <Skeleton style={{width:"100%",height:"40px",marginTop:"25px",borderRadius:"8px"}}/>}
                                  </div>

                                  <div
                                    style={{
                                      padding: "8px",
                                      width: "100%",
                                      flex: "0 1 auto",
                                    }}
                                  >
                                    {!loading ? <div className="FormFieldGroup">
                                      <div className="FormFieldGroup-labelContainer d-flex flex-nowrap justify-content-between position-relative">
                                        <label htmlFor="country-fieldset">
                                          <span
                                            style={{
                                              color: "hsla(0,0%,10%,0.7)",
                                              fontSize: "13px",
                                              fontWeight: "500",
                                            }}
                                          >
                                            Country or region
                                          </span>
                                        </label>
                                      </div>

                                      <div
                                        className="FormFieldGroup-Fieldset"
                                        id="country-fieldset"
                                        style={{
                                          border: "none",
                                          margin: "4px 0 0 0",
                                          padding: "0",
                                        }}
                                      >
                                        <div
                                          className="FormFieldGroup-Container d-flex flex-wrap position-relative"
                                          id="country-fieldset-inner"
                                        >
                                          <div
                                            className="FormFieldGroup-child"
                                            style={{
                                              width: "100%",
                                              flex: "0 1 auto",
                                            }}
                                          >
                                            <div className="FormFieldInput position-relative">
                                              <div
                                                className="select"
                                                style={{
                                                  display: "flex",
                                                  position: "relative",
                                                }}
                                              >
                                                <select
                                                  className="select-source"
                                                  name="billingCountry"
                                                  id="billingCountry"
                                                  style={{
                                                    width: "100%",
                                                    borderRadius: "8px",
                                                    backgroundColor: "white",
                                                    border: "0",
                                                    boxShadow:
                                                      "0 0 0 1px #e0e0e0,0 2px 4px 0 rgba(0,0,0,0.07),0 1px 1.5px 0 rgba(0,0,0,0.05)",
                                                    color: "hsla(0,0%,10%,0.9)",
                                                    fontSize: "16px",
                                                    height: "44px",
                                                    lineHeight: "1.5",
                                                    padding: "8px 12px",
                                                    paddingRight: "32px",
                                                    transition:
                                                      "box-shadow 0.08s ease-in,color 0.08s ease-in,filter 50000s;",
                                                  }}
                                                >
                                                  <option value="India">
                                                    India
                                                  </option>
                                                  {countries.map(
                                                    (country, index) => (
                                                      <option
                                                        key={index}
                                                        value={country.value}
                                                      >
                                                        {country.label}
                                                      </option>
                                                    )
                                                  )}
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div> : <Skeleton style={{width:"100%",height:"75px",marginTop:"25px",borderRadius:"8px"}}/>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!loading ? <div
                    className="PaymentForm-confirmPaymentContainer"
                    style={{ marginTop: "16px", marginBottom: "32px" }}
                  >
                    <div style={{ width: "100%" }}>
                      <button
                        style={{
                          backgroundColor: "rgb(0, 116, 212)",
                          color: "white",
                          border: "0",
                          borderRadius: "6px",
                          boxShadow:
                            "inset 0 0 0 1px rgba(50,50,93,0.1),0 2px 5px 0 rgba(50,50,93,0.1),0 1px 1px 0 rgba(0,0,0,0.07)",
                          cursor: "pointer",
                          height: "44px",
                          width: "100%",
                          marginTop: "12px",
                          outline: "none",
                          overflow: "hidden",
                          padding: "0",
                          transform: "translateZ(0)",
                          transition: "all 0.2s ease,box-shadow .08s ease-in",
                          fontSize: "16px",
                        }}
                      >
                        {" "}
                        <span style={{ opacity: "0.6" }}>Pay</span>{" "}
                      </button>
                    </div>
                  </div> : <Skeleton style={{width:"100%",height:"40px",borderRadius:"8px"}}/>}
                </form>
              </div>
            </div>
          </div>

          <div
            className="App-Footer Footer"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1 1 auto",
              paddingBottom: "32px",
              paddingTop: "16px",
              width: "100%",
            }}
          >
            <div
              className="Footer-PoweredBy"
              style={{ padding: "4px", textAlign: "center", width: "100%" }}
            >
              <a
                href="https://stripe.com/en-in"
                style={{
                  color: "#0074d4",
                  cursor: "pointer",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "hsla(0,0%,10%,0.5)",
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  Powered By
                  <svg
                    class="InlineSVG Icon Footer-PoweredBy-Icon Icon--md"
                    focusable="false"
                    width="33"
                    height="15"
                    role="img"
                    aria-labelledby="stripe-title"
                    style={{
                      fill: "hsla(0,0%,10%,0.4)",
                      verticalAlign: "middle",
                      marginLeft: "3px",
                      marginBottom: "2px",
                      marginTop:"8px"                       
                    }}
                  >
                    <title
                      id="stripe-title"
                      style={{ fill: "hsla(0,0%,10%,0.4)", fontSize: "12px" }}
                    >
                      Stripe
                    </title>
                    <g fill-rule="evenodd">
                      <path d="M32.956 7.925c0-2.313-1.12-4.138-3.261-4.138-2.15 0-3.451 1.825-3.451 4.12 0 2.719 1.535 4.092 3.74 4.092 1.075 0 1.888-.244 2.502-.587V9.605c-.614.307-1.319.497-2.213.497-.876 0-1.653-.307-1.753-1.373h4.418c0-.118.018-.588.018-.804zm-4.463-.859c0-1.02.624-1.445 1.193-1.445.55 0 1.138.424 1.138 1.445h-2.33zM22.756 3.787c-.885 0-1.454.415-1.77.704l-.118-.56H18.88v10.535l2.259-.48.009-2.556c.325.235.804.57 1.6.57 1.616 0 3.089-1.302 3.089-4.166-.01-2.62-1.5-4.047-3.08-4.047zm-.542 6.225c-.533 0-.85-.19-1.066-.425l-.009-3.352c.235-.262.56-.443 1.075-.443.822 0 1.391.922 1.391 2.105 0 1.211-.56 2.115-1.39 2.115zM18.04 2.766V.932l-2.268.479v1.843zM15.772 3.94h2.268v7.905h-2.268zM13.342 4.609l-.144-.669h-1.952v7.906h2.259V6.488c.533-.696 1.436-.57 1.716-.47V3.94c-.289-.108-1.346-.307-1.879.669zM8.825 1.98l-2.205.47-.009 7.236c0 1.337 1.003 2.322 2.34 2.322.741 0 1.283-.135 1.581-.298V9.876c-.289.117-1.716.533-1.716-.804V5.865h1.716V3.94H8.816l.009-1.96zM2.718 6.235c0-.352.289-.488.767-.488.687 0 1.554.208 2.241.578V4.202a5.958 5.958 0 0 0-2.24-.415c-1.835 0-3.054.957-3.054 2.557 0 2.493 3.433 2.096 3.433 3.17 0 .416-.361.552-.867.552-.75 0-1.708-.307-2.467-.723v2.15c.84.362 1.69.515 2.467.515 1.879 0 3.17-.93 3.17-2.548-.008-2.692-3.45-2.213-3.45-3.225z"></path>
                    </g>
                  </svg>
                </span>
              </a>
            </div>

            <div className="Footer-Links" style={{ padding: "4px" }}>
              <a
                href="https://stripe.com/en-in/legal/consumer"
                style={{
                  textDecoration: "none",
                  marginRight: "12px",
                  color: "#0074d4",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <span
                  style={{
                    color: "hsla(0,0%,10%,0.5)",
                    fontWeight: "400",
                    fontSize: "12px",
                    margin: "0",
                  }}
                >
                  Terms
                </span>
              </a>
              <a
                href="https://stripe.com/en-in/privacy"
                style={{
                  textDecoration: "none",
                  color: "#0074d4",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <span
                  style={{
                    color: "hsla(0,0%,10%,0.5)",
                    fontWeight: "400",
                    fontSize: "12px",
                    margin: "0",
                  }}
                >
                  Privacy
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
