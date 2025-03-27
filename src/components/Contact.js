import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import emailjs from '@emailjs/browser';


function Contact() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  let localStorageData = localStorage.getItem("user-register");
  let userArray = [];
  const [userData, setUserData] = useState({
    id: "",
    fname: "",
    lname: "",
    address: "",
    phone: "",
    email: "",
    message: "",
  });

  const addUser = (e) => {
    e.preventDefault();
    if (
      userData.fname === "" ||
      userData.lname === "" ||
      userData.address === "" ||
      userData.phone === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.message === ""
    ) {
      setErr(true);
    } else {
      if (localStorageData) {
        userArray = JSON.parse(localStorageData);
      }
      userArray.push(userData);
      localStorage.setItem("user-register", JSON.stringify(userArray));
      alert("Successfuly registered, continue to Login");
      navigate("/login");
      setUserData({
        fname: "",
        lname: "",
        address: "",
        phone: "",
        email: "",
        message: "",
      });
      setErr(false);
    }

    // emailjs.sendForm('service_id' 'template_id', e.target, 'public_key');
    alert("submit")
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   window.location.href = `mailto:unleashcounseling@gmail.com?subject=Enquiry from Website&body=${userData.message}`;
  //   setUserData({
  //    ...userData,
  //     message: "",
  //   });
  //   setErr(false);
    
  // }

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
            <form className="form" onSubmit={addUser}>
              <div className="row1">
                <div className="val1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={userData.fname}
                    onChange={(e) =>
                      setUserData({ ...userData, fname: e.target.value })
                    }
                  />
                  {err === true && userData.fname === "" ? (
                    <span>Full name required</span>
                  ) : null}
                </div>
                {/* <div className="val2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={userData.lname}
                    onChange={(e) =>
                      setUserData({ ...userData, lname: e.target.value })
                    }
                  />
                  {err === true && userData.lname === "" ? (
                    <span>Last name required</span>
                  ) : null}
                </div> */}
              </div>
              <div className="row2">
                <div className="val1">
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                  {err === true && userData.email === "" ? (
                    <span>Email required</span>
                  ) : null}
                </div>
                {/* <div className="val2">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                  />
                  {err === true && userData.phone === "" ? (
                    <span>Phone number required</span>
                  ) : null}
                </div> */}
              </div>
              <div className="row3">
                {/* <div className="val1"> */}
                <textarea
                  name="message"
                  className="field"
                  placeholder="Enter your message"
                  value={userData.message}
                  onChange={(e) =>
                    setUserData({ ...userData, message: e.target.value })
                  }
                ></textarea>
                {err === true && userData.message === "" ? (
                  <span>Field required</span>
                ) : null}
                {/* </div> */}
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
