import React from "react";
import axios from "axios";

export const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8800/member/${id}`);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
