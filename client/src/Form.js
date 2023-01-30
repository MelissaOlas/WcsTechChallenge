import axios from "axios";
import React from "react";
import { useState } from "react";
import "./style.css";

const Form = () => {
  const [member, setMember] = useState({
    name: "",
    role: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/member/add", member);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="new-member-form">
      <input
        className="member_item"
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <textarea
        className="member_item"
        type="text"
        placeholder="Role"
        name="role"
        onChange={handleChange}
      />
      <button className="send-button" onClick={handleSubmit}>
        Envoyer
      </button>
      {error && "Something went wrong!"}
    </div>
  );
};

export default Form;
