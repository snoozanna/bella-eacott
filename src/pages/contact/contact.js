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

export const Contact = ({ initialValues }) => {
  // const [populated, setPopulated] = useState(false);
  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log("form data", data);
  //   reset(defaultValues);
  // };
  // const handleError = (errors) => {
  //   console.log(errors);
  // };

  // const registerOptions = {
  //   name: { required: "Name is required" },
  //   email: {
  //     required: true,
  //     pattern: /^\S+@\S+$/i,
  //     message: "Email is required",
  //   },
  //   subject: { required: "Subject is required" },
  //   message: { required: "Message is required" },
  // };

  // console.log(errors);
  return (
    <>
      <section className="contact content skinny">
        <p>
          If you’d like to discuss your appointment or have any questions
          regarding massage or your treatment with me, please fill in the form
          below.
        </p>
        <form
          name="contact"
          method="post"
          netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
          </p>
          <p>
            <input type="submit" value="Submit message" />
          </p>
        </form>
        {/* <form
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit, handleError)}
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="Name"
            name="name"
            {...register("name", registerOptions.name)}
          />
          <small className="error-message">{errors.name && errors.name}</small>
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", registerOptions.email)}
          />
          <small className="error-message">
            {errors.email && errors.email}
          </small>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            {...register("subject", registerOptions.subject)}
          />
          <small className="error-message">
            {errors.subject && errors.subject}
          </small>
          <input
            type="textarea"
            placeholder="Message"
            name="message"
            {...register("message", registerOptions.message)}
          />
          <small className="error-message">
            {errors?.message && errors.message}
          </small>
          <button type="submit">Send</button>
        </form> */}
      </section>
    </>
  );
};

export default Contact;
