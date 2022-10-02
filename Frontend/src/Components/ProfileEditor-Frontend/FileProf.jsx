import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./styles.css";
const FileProf = () => {
  const inputRef = useRef();
  const [name, setName] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          inputRef.current.click();
        }}
        className="super-btn"
      >
        Upload Photo
      </button>
      <div>{name}</div>
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(e) => {
          setName(e.target.files[0].name);
        }}
      />
    </div>
  );
};

export default FileProf;
