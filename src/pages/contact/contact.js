import { useForm } from "react-hook-form";
import { useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import "./contact.css";

// const schema = yup.object().shape({
//   name: yup.string().required().min(2).max(20),
//   // email: yup.string().required().min(2).max(20),
//   subject: yup.string().required().min(2).max(5),
//   category: yup.mixed().oneOf(productCategories).required(),
// });
const onSubmit = async (event, setSubmitText) => {
  event.preventDefault();
  setSubmitText("Submitting ...");
  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    // or some other cheeky error message
    setSubmitText("It looks like you filled out too many fields!");
  } else {
    const filledOutElements = validFormElements
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value),
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements,
    })
      .then(() => {
        setSubmitText("Successfully submitted!");
      })
      .catch((_) => {
        setSubmitText(
          "There was an error with your submission, please email me using the address above.",
        );
      });
  }
};

export const Contact = ({ initialValues }) => {
  const [submitText, setSubmitText] = useState(null);
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({ mode: "onBlur" });

  return (
    <>
      <form
        id="contact"
        name="contact-form"
        method="POST"
        data-netlify="true"
        onSubmit={(e) => onSubmit(e, setSubmitText)}
      >
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you expect to hear from me!
            <input name="bot-field" />
          </label>
        </p>
        <input
          style={{ display: "none" }}
          name="form-name"
          value="contact-form"
          readOnly={true}
        />
        <p>
          <label htmlFor="name">
            Your Name:{" "}
            <input type="text" id="name" name="name" required={true} />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email:{" "}
            <input type="email" id="email" name="email" required={true} />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:{" "}
            <textarea required={true} id="message" name="message"></textarea>
          </label>
        </p>
        <button type="submit" name="SendMessage">
          Send
        </button>
      </form>
      {submitText}
    </>
  );
};

export default Contact;
