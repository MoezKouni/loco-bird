import React from "react";
import { govs } from "./UpdateProfile";
import { IconButton } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const PersonalInfo = ({
  info: { first_name, last_name, gender, address, city, gov, date_of_birth },
  handleChange,
  next,
}) => {
  return (
    <div className="col-md-6 col-6 update__body">
      <div className="Input" style={{ marginTop: 30 }}>
        <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Fistname"
          style={{ color: "black" }}
          name="first_name"
          value={first_name}
          onChange={handleChange}
        />
        <label htmlFor="input" className="Input-label">
          Fistname
        </label>
      </div>
      <div className="Input" style={{ margin: "30px 0" }}>
        <input
          type="text"
          id="input"
          className="Input-text"
          placeholder="Lastname"
          style={{ color: "black" }}
          name="last_name"
          value={last_name}
          onChange={handleChange}
        />
        <label htmlFor="input" className="Input-label">
          Lastname
        </label>
      </div>
      <div className="select-container">
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="">None</option>
          <option value="men">Male</option>
          <option value="women">Female</option>
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 30 }}>
        <div className="Input" style={{ width: "60%" }}>
          <input
            type="text"
            id="input"
            className="Input-text"
            placeholder="Address"
            style={{ color: "black" }}
            name="address"
            value={address}
            onChange={handleChange}
          />
          <label htmlFor="input" className="Input-label">
            Address
          </label>
        </div>
        <div className="Input" style={{ width: "40%" }}>
          <input
            type="text"
            id="input"
            className="Input-text"
            placeholder="City"
            style={{ color: "black" }}
            name="city"
            value={city}
            onChange={handleChange}
          />
          <label htmlFor="input" className="Input-label">
            City
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <div className="select-container" style={{ flexBasis: "59%" }}>
          <select name="gov" value={gov} onChange={handleChange}>
            <option value="none">None</option>
            {govs.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>

        <div className="Input" style={{ flexBasis: "39%" }}>
          <input
            type="date"
            className="date_of_birth_input Input-text"
            id="dob"
            style={{ color: "black" }}
            name="date_of_birth"
            value={date_of_birth}
            onChange={handleChange}
          />
          <label
            htmlFor="dob"
            className="Input-label"
            style={{
              top: "20%",
              bottom: "100%",
            }}
          >
            Date of birth
          </label>
        </div>
      </div>
      {first_name &&
        last_name &&
        address &&
        city &&
        gov &&
        gender &&
        date_of_birth && (
          <IconButton style={{ alignSelf: "center" }} onClick={next}>
            <ArrowDownwardIcon />
          </IconButton>
        )}
    </div>
  );
};

export default PersonalInfo;
