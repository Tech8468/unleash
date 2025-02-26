import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  };

  return (
    <div className="contact">
      <div className="registerForm">
        <div className="col1">
          <div className="row1">
            <h1>Need help?</h1>
          </div>
          <div className="row2">
            <h2>Customer Service</h2>
            <p>+234-702-0000-000</p>
          </div>
          <div className="row3">
            <h2>Send Enquiry</h2>
            <p>unleash@gmail.com</p>
          </div>
        </div>
        <div className="col2">
          <form className="form" onSubmit={addUser}>
            <div className="row1">
              <div className="val1">
                <input
                  type="text"
                  placeholder="First Name"
                  value={userData.fname}
                  onChange={(e) =>
                    setUserData({ ...userData, fname: e.target.value })
                  }
                />
                {err === true && userData.fname === "" ? (
                  <span>First name required</span>
                ) : null}
              </div>
              <div className="val2">
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
              </div>
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
                  <span>Last name required</span>
                ) : null}
              </div>
              <div className="val2">
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
              </div>
            </div>
            <div className="row3">
              {/* <div className="val1"> */}
                <textarea name="message" className="field" placeholder="Enter your message" value={userData.message} onChange={(e) => setUserData({ ...userData, message: e.target.value })}></textarea>
                {err === true && userData.message === "" ? (
                  <span>Field required</span>
                ) : null}
              {/* </div> */}
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
