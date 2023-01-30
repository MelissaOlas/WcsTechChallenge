import React, { useState, useEffect } from "react";
import { fetchMembers } from "./FetchMembers";
import { handleDelete } from "./HandleDelete";
import "./style.css";

export default function Table() {
  const members = fetchMembers();
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {members.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.role}</td>
            <td>
              <button
                className="send-button"
                onClick={() => handleDelete(row.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
