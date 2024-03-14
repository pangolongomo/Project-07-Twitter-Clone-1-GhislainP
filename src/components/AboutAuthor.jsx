import React from "react";
import { Link } from "react-router-dom";

function AboutAuthor({ name, otherDetails, IconDesc, handle }) {
  return (
    <Link to={`/${handle}`} className="flex flex-col">
      <div className="text-nowrap">
        <span className="text-wrap font-medium">{name}</span>{" "}
        {IconDesc && <IconDesc className="inline" />}
      </div>
      <div className="text-[#6e767d]">{otherDetails || `${handle}`}</div>
    </Link>
  );
}

export default AboutAuthor;
