// <!-- Header section -->
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import "./style.css";

export default function Home() {
  return (
    <div className="homeBody">
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      {/* <!-- Main section --> */}
      <main>
        {/* <!-- New member form --> */}
        <h2>Ajouter un(e) Argonaute</h2>
        <Form />

        {/* <!-- Member list --> */}
        <h2>Membres de l'équipage</h2>
        <Table />
      </main>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}
