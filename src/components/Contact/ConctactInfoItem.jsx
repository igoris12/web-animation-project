import React, { useContext } from "react";
import OptionsContext from "../../reducers/OptionsContext";

function ConctactInfoItem({ icno, text, type = "def" }) {
  const { optionsState } = useContext(OptionsContext);

  return (
    <div className="contactInfoItem">
      <span className="icon" style={{ color: optionsState.color }}>
        {icno}
      </span>
      {type === "email" ? (
        <a className="sectionSecondaryHeader" href={"mailto:" + text}>
          {text}
        </a>
      ) : (
        <p className="sectionSecondaryHeader">{text}</p>
      )}
    </div>
  );
}

export default ConctactInfoItem;
