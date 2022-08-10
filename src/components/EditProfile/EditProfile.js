// import axios from "axios";
import axios from "axios";
import React from "react";
import "./EditProfile.scss";

const EditProfile = ({ currentUser, setCurrentUser, checked, setChecked }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updateUser = async () => {
      try {
        const getCoordinates = await axios.get(
          `http://api.postcodes.io/postcodes/${form.postcode.value}`
        );

        const updatedUser = {
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
          .put(`http://localhost:5050/users/${currentUser._id}`, updatedUser)
          .then((response) => setCurrentUser(response.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    updateUser();
  };
  return (
    <div className="edit-profile-container">
      <form
        className="edit-profile__form"
        onSubmit={handleSubmit}
        action="/users"
        method="POST"
      >
        <label className="edit-profile__form-label">
          First Name
          <input
            className="edit-profile__form-text-input"
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={currentUser.firstName}
          />
        </label>
        <label className="edit-profile__form-label">
          Last Name
          <input
            className="edit-profile__form-text-input"
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={currentUser.lastName}
          />
        </label>
        <label className="edit-profile__form-label">
          Email
          <input
            className="edit-profile__form-text-input"
            type="email"
            name="email"
            id="email"
            defaultValue={currentUser.email}
          />
        </label>
        <label className="edit-profile__form-label">
          Postcode
          <input
            className="edit-profile__form-text-input"
            type="text"
            name="postcode"
            id="postcode"
            defaultValue={currentUser.postcode}
          />
        </label>
        <label className="edit-profile__form-label">
          Bio
          <textarea
            className="edit-profile__form-text-input"
            name="bio"
            id="bio"
            defaultValue={currentUser.bio}
          ></textarea>
        </label>
        <div className="edit-profile__form-sports">
          <label className="edit-profile__form-label edit-profile__form-label--sport">
            Badminton
            <input
              className="edit-profile__form-checkbox"
              type="checkbox"
              name="badminton"
              id="badminton"
              defaultChecked={checked.badminton}
              onChange={() =>
                setChecked({ ...checked, badminton: !checked.badminton })
              }
            />
          </label>
          <label className="edit-profile__form-label edit-profile__form-label--sport">
            Tennis
            <input
              className="edit-profile__form-checkbox"
              type="checkbox"
              name="tennis"
              id="tennis"
              defaultChecked={checked.tennis}
              onChange={() =>
                setChecked({ ...checked, tennis: !checked.tennis })
              }
            />
          </label>
          <label className="edit-profile__form-label edit-profile__form-label--sport">
            Squash
            <input
              className="edit-profile__form-checkbox"
              type="checkbox"
              name="squash"
              id="squash"
              defaultChecked={checked.squash}
              onChange={() =>
                setChecked({ ...checked, squash: !checked.squash })
              }
            />
          </label>
          <label className="edit-profile__form-label edit-profile__form-label--sport">
            Golf
            <input
              className="edit-profile__form-checkbox"
              type="checkbox"
              name="golf"
              id="golf"
              defaultChecked={checked.golf}
              onChange={() => setChecked({ ...checked, golf: !checked.golf })}
            />
          </label>
          <label className="edit-profile__form-label edit-profile__form-label--sport">
            Table Tennis
            <input
              className="edit-profile__form-checkbox"
              type="checkbox"
              name="tableTennis"
              id="tableTennis"
              defaultChecked={checked.tableTennis}
              onChange={() =>
                setChecked({ ...checked, tableTennis: !checked.tableTennis })
              }
            />
          </label>
          <label className="edit-profile__form-label edit-profile__form-label--sport">
            Bowling
            <input
              className="edit-profile__form-checkbox"
              type="checkbox"
              name="bowling"
              id="bowling"
              defaultChecked={checked.bowling}
              onChange={() =>
                setChecked({ ...checked, bowling: !checked.bowling })
              }
            />
          </label>
        </div>
        <button className="edit-profile__form-button">Submit</button>
      </form>
    </div>
  );
};

export default EditProfile;
