import React, { useEffect } from "react";
import { useRef } from "react";
const DomPractical = () => {
  const handleSubmit = (e) => e.preventDefault();

  const inputRef = useRef({});

  useEffect(() => {
    inputRef.current.firstName.style.backgroundColor = "red";
    inputRef.current.lastName.style.backgroundColor = "blue";
  }, []);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} action="#" className="border p-10">
        <div className="w-full">
          <label>Username : </label>
          <input
            ref={(e) => (inputRef.current.firstName = e)}
            type="text"
            className="border"
          />
        </div>
        <br />
        <div className="w-full">
          <label>lastName : </label>
          <input
            ref={(e) => (inputRef.current.lastName = e)}
            type="text"
            className="border"
          />
        </div>
        <button className="border mt-5 py-1 px-5 cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default DomPractical;
