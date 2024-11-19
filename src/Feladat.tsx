import React, { useState } from "react";

function Szamolo() {
  const [szam1, setSzam1] = useState(0);
  const [szam2, setSzam2] = useState(0);
  const [eredmeny, setEredmeny] = useState(0);
  const [muvelet, setMuvelet] = useState("");

  const Szamol = () => {
     
  };

  const Szamlalo = () => {
    if (muvelet == "*") {
      setEredmeny(szam1 * szam2);
    }
    if (muvelet == "+") {
      setEredmeny(szam1 + szam2);
    }
    if (muvelet == "-") {
      setEredmeny(szam1 - szam2);
    }
    if (muvelet == "/") {
      setEredmeny(szam1 / szam2);
    }
  };

  return (
    <div className="App">
      <input
        type="number"
        value={szam1}
        onChange={(e) => setSzam1(Number(e.target.value))}
      />
      <select onChange={(e) => setMuvelet(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={szam2}
        onChange={(e) => setSzam2(Number(e.target.value))}
      />
      {eredmeny}
      <button onClick={Szamol}>Számol</button>
    </div>
  );
}

export default Szamolo;
