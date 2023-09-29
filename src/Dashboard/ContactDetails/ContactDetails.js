import React, { useEffect, useState } from "react";
import "./ContactDetails.css";
import axios from "axios";

const ContactDetails = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    axios
      .get("https://protien.catkinsofttech-bd.com/api/share-sucess-story/")
      .then((res) => {
        setContactData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="contact-details-section">
        <div className="contact-details-title">
          <p>Contact Details</p>
        </div>

        <div className="dashboard-user-table-container">
          <table className="dashboard-user-table">
            <thead style={{ height: ".2rem" }}>
              <th>Email</th>
              <th>
                What it was like designing protein <br />
                sequences before and the improvements
                <br /> you made since becoming a Protein Writer?
              </th>
              <th>What led you to become a Protein Writer?</th>
              <th>
                What advice would you share with <br /> other Protein Writers to
                help them to <br /> be as successful as you are?
              </th>
            </thead>
            <tbody>
              {contactData.map((data, key) => (
                <tr>
                  <td data-label="Email">{data.user_email || "No email"}</td>
                  <td data-label="what it was like...">{data.answer1}</td>
                  <td data-label="What led you...">{data.answer2}</td>
                  <td data-label="What advice would...">{data.answer3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
