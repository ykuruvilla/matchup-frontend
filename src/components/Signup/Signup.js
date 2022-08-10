import React from "react";
import axios from "axios";
import "./Signup.scss";

const Signup = ({ setCurrentUser, checked, setChecked, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const registerUser = async () => {
      try {
        const getCoordinates = await axios.get(
          `http://api.postcodes.io/postcodes/${form.postcode.value}`
        );
        const newUser = {
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          email: form.email.value,
          postcode: form.postcode.value,
          bio: form.bio.value,
          latitude: getCoordinates.data.result.latitude,
          longitude: getCoordinates.data.result.longitude,
          tennis: form.tennis.checked,
          squash: form.squash.checked,
          badminton: form.badminton.checked,
          tableTennis: form.tableTennis.checked,
          bowling: form.bowling.checked,
          golf: form.golf.checked,
        };

        await axios
          .post(`http://localhost:5050/users`, newUser)
          .then((response) => {
            setCurrentUser(response.data);
            setIsLoggedIn(true);
          });
      } catch (err) {
        window.alert(err.message);
      }
    };
    registerUser();
  };

  return (
    <div className="signup-container">
      <form
        className="signup__form"
        onSubmit={handleSubmit}
        action="/users"
        method="POST"
      >
        <label className="signup__form-label">
          First Name
          <input
            className="signup__form-text-input"
            type="text"
            name="firstName"
            id="firstName"
          />
        </label>
        <label className="signup__form-label">
          Last Name
          <input
            className="signup__form-text-input"
            type="text"
            name="lastName"
            id="lastName"
          />
        </label>
        <label className="signup__form-label">
          Email
          <input
            className="signup__form-text-input"
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label className="signup__form-label">
          Postcode
          <input
            className="signup__form-text-input"
            type="text"
            name="postcode"
            id="postcode"
          />
        </label>
        <label className="signup__form-label">
          Bio
          <textarea
            className="signup__form-text-input"
            name="bio"
            id="bio"
            placeholder="A few sentences about yourself..."
          ></textarea>
        </label>
        <div className="signup__form-sports">
          <label className="signup__form-label signup__form-label--sport">
            Badminton
            <input
              type="checkbox"
              className="signup__form-checkbox"
              name="badminton"
              id="badminton"
              defaultChecked={checked.badminton}
              onChange={() =>
                setChecked({ ...checked, badminton: !checked.badminton })
              }
            />
          </label>
          <label className="signup__form-label signup__form-label--sport">
            Bowling
            <input
              type="checkbox"
              className="signup__form-checkbox"
              name="bowling"
              id="bowling"
              defaultChecked={checked.bowling}
              onChange={() =>
                setChecked({ ...checked, bowling: !checked.bowling })
              }
            />
          </label>
          <label className="signup__form-label signup__form-label--sport">
            Golf
            <input
              type="checkbox"
              className="signup__form-checkbox"
              name="golf"
              id="golf"
              defaultChecked={checked.golf}
              onChange={() => setChecked({ ...checked, golf: !checked.golf })}
            />
          </label>
          <label className="signup__form-label signup__form-label--sport">
            Squash
            <input
              type="checkbox"
              className="signup__form-checkbox"
              name="squash"
              id="squash"
              defaultChecked={checked.squash}
              onChange={() =>
                setChecked({ ...checked, squash: !checked.squash })
              }
            />
          </label>

          <label className="signup__form-label signup__form-label--sport">
            Table Tennis
            <input
              type="checkbox"
              className="signup__form-checkbox"
              name="tableTennis"
              id="tableTennis"
              defaultChecked={checked.tableTennis}
              onChange={() =>
                setChecked({ ...checked, tableTennis: !checked.tableTennis })
              }
            />
          </label>
          <label className="signup__form-label signup__form-label--sport">
            Tennis
            <input
              type="checkbox"
              className="signup__form-checkbox"
              name="tennis"
              id="tennis"
              defaultChecked={checked.tennis}
              onChange={() =>
                setChecked({ ...checked, tennis: !checked.tennis })
              }
            />
          </label>
        </div>
        <button className="signup__form-button">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
