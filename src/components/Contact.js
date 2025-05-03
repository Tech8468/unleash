import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [err, setErr] = useState(false);
  const emailSecret = process.env.REACT_APP_EMAIL_SECRET;

  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      userData.fname === "" ||
      userData.email === "" ||
      userData.message === ""
    ) {
      setErr(true);
    } else {
      setErr(false);

      emailjs
        .sendForm('service_k7rwmag', 'template_r5palpt', form.current, emailSecret)
        .then(
          () => {
            alert("Message sent successfully!");
            setUserData({
              fname: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <div className="contact">
      <div className="registerForm">
        <div className="container">
          <div className="col1">
            <div className="row1">
              <h1>Need help?</h1>
            </div>
            <div className="row2">
              <h2>Office Address</h2>
              <p>📍 12 Ajoke Estate, Fagba, Lagos</p>
            </div>
            <div className="row2">
              <h2>Customer Service</h2>
              <p>📞 +234 9030413637</p>
              <p>📞 +234 8094352991</p>
            </div>
            <div className="row3">
              <h2>Send Enquiry</h2>
              <p>📧 unleashcounseling@gmail.com</p>
            </div>
          </div>
          <div className="col2">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="row1">
                <div className="val1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="user_name"
                    value={userData.fname}
                    onChange={(e) =>
                      setUserData({ ...userData, fname: e.target.value })
                    }
                  />
                  {err && userData.fname === "" ? (
                    <span>Full name required</span>
                  ) : null}
                </div>
              </div>
              <div className="row2">
                <div className="val1">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="user_email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                  {err && userData.email === "" ? (
                    <span>Email required</span>
                  ) : null}
                </div>
              </div>
              <div className="row3">
                <textarea
                  name="message"
                  className="field"
                  placeholder="Enter your message"
                  value={userData.message}
                  onChange={(e) =>
                    setUserData({ ...userData, message: e.target.value })
                  }
                ></textarea>
                {err && userData.message === "" ? (
                  <span>Field required</span>
                ) : null}
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="board">
          <p>
            Join our community today and unlock a world of personalized support,
            whether you're looking to nurture your mental wellness, navigate
            relationship dynamics, or embark on a journey of self-improvement
            with our seasoned coaches and counselors.
          </p>
          <p>
            Click <Link to="https://chat.whatsapp.com/CdhUtW0vrMp0ijqSTKV1P5" className="link">here to join community</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
