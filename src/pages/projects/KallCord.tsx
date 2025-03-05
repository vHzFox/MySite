import React from "react";
import { useParams } from "react-router-dom";

const KallCord: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();

  return (
    <div className="project-detail">
      <h1>{projectName}</h1>
      <h3>
        KallCord Är en Discord klon
      </h3>
    </div>
  );
};

export { KallCord };
