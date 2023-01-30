import React, { useState, useEffect } from "react";
import axios from "axios";

export const fetchMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/member/get");
        setMembers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMembers();
  }, []);

  console.log(members);

  return members;
};
