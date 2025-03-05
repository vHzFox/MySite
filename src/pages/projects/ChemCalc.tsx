import React from "react";
import { useParams } from "react-router-dom";

const ChemCalc: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();

  return (
    <div className="project-detail">
      <h1>{projectName}</h1>
      <p>Detaljer om {projectName}</p>
      <h3>
        ChemCalc är en kemisk kalkylator som kan användas för att beräkna molar massa, koncentration och massa för olika kemiska föreningar.
      </h3>
    </div>
  );
};

export { ChemCalc };
