import React, { useRef, useState } from "react";
import ThoughtsList from "./ThoughtsList";

const contactInfo = localStorage.getItem("contactDetails")
  ? JSON.parse(localStorage.getItem("contactDetails"))
  : [];

const ThoughtsForm = () => {
  const [contactList, setThoughtsForm] = useState(contactInfo);

  // console.log(contactList)

  const dateRef = useRef();

  const messageRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();

    // holds contact submission
    const contactObject = {
      id: Date.now(),
      date: dateRef.current.value,
      msg: messageRef.current.value,
    };
    console.log(contactObject);

    // list.push(contactObject);
    setThoughtsForm([...contactList, contactObject]);
    localStorage.setItem("contactDetails", JSON.stringify(contactList));

    console.log(contactObject);

    dateRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="firstDiv">
      <form onSubmit={onFormSubmit}>
        <div className="secondDiv">
          <strong className="tHeading">Thoughts for the day</strong>
          <label className="date">Date:</label>
          <input type="date" name="date" className="dateInput" ref={dateRef} />
        </div>

        <div className="thirdDiv">
          <textarea
            name="message"
            cols="30"
            rows="10"
            ref={messageRef}
            placeholder="Input Fields for thoughts"
          ></textarea>

          <br />
        </div>

        <input
          type="submit"
          value="Save"
          name="submit"
          className="submitButton"
        />
      </form>
      <ThoughtsList contactsMap={contactList} />
    </div>
  );
};

export default ThoughtsForm;
