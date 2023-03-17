import React, { useRef } from "react";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const userDetails = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      };
      await fetch(
        "https://react-ecomm-be8ea-default-rtdb.firebaseio.com/contactDetails.json",
        {
          method: "POST",
          body: JSON.stringify(userDetails),
          header: {
            "Contetnt-Type": "application/json",
          },
        }
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneNumberRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' ref={nameRef} required />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' ref={emailRef} required />

        <label htmlFor='message'>Phone Number</label>
        <input
          type='number'
          id='message'
          name='message'
          ref={phoneNumberRef}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
