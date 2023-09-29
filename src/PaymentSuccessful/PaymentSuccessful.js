import React from "react";
import "./PaymentSuccessful.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccessful = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pay-successful-section">
        <div className="wrapperAlert">
          <div className="contentAlert">
            <div className="topHalf">
              <p>
                <svg viewBox="0 0 512 512" width="100" title="check-circle">
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                </svg>
              </p>
              <h1>Congratulations Payment Received</h1>

              <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="bottomHalf">
              <p>
                We received your payment. Thank you for your purchase at
                <span> MyProteinWriter.com</span>
              </p>

              <button id="alertMO" onClick={() => navigate("/")}>
                Back to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
