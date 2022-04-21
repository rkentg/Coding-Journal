import TaskList from "./TaskList";
import React, { useRef, useState } from "react";

const contactInfo = localStorage.getItem("contactDetails")
  ? JSON.parse(localStorage.getItem("contactDetails"))
  : [];

const TaskForm = () => {
  const [contactList, setContactList] = useState(contactInfo);

  const dateRef2 = useRef();

  const messageRef2 = useRef();

  const onFormSubmit2 = (event) => {
    event.preventDefault();

    // holds contact submission
    const contactObject = {
      id: Date.now(),
      date2: dateRef2.current.value,
      msg2: messageRef2.current.value,
    };
    console.log(contactObject);

    // list.push(contactObject);
    setContactList([...contactList, contactObject]);
    localStorage.setItem("contactDetails", JSON.stringify(contactList));

    console.log(contactObject);
    dateRef2.current.value = "";
    messageRef2.current.value = "";
  };

  return (
    <div className="firstDiv">
      <form className="nextForm" onSubmit={onFormSubmit2}>
        <div className="secondDiv">
          <strong className="tHeading">Task</strong>
          <label className="date">Date:</label>
          <input type="date" name="date" className="dateInput" ref={dateRef2} />
        </div>

        <div className="thirdDiv">
          <textarea
            name="message"
            cols="30"
            rows="10"
            ref={messageRef2}
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
      <TaskList contactsMap={contactList} />
    </div>
  );
};

export default TaskForm;
