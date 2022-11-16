import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
    },
  });
  const onSubmit = (data) => netlify.handleSubmit(null, data);

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

  return (
    <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
        <Honeypot />
        {netlify.success && (
          <p sx={{ variant: "alerts.success", p: 3 }}>
            Thanks for contacting us!
          </p>
        )}
        {netlify.error && (
          <p sx={{ variant: "alerts.muted", p: 3 }}>
            Sorry, we could not reach servers. Because it only works on Netlify,
            our GitHub demo does not provide a response.
          </p>
        )}
        {/* <div>
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" name="name" required />
        </div> */}
        <div>
          <label htmlFor="email" sx={{ variant: "forms.label" }}>
            Email:
          </label>

          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
            sx={{
              variant: "forms.input",
            }}
          />
          {errors.email && (
            <div sx={{ variant: "text.error" }}>{errors.email.message}</div>
          )}
        </div>
        {/* <div>
          <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
          </p>
        </div> */}
        <div sx={{ pt: 3 }}>
          <button type="submit" sx={{ variant: "buttons.success" }}>
            Submit
          </button>
          <button
            type="reset"
            onClick={() => reset()}
            sx={{ variant: "buttons.danger" }}
          >
            Reset
          </button>
        </div>
      </NetlifyFormComponent>
    </NetlifyFormProvider>
  );
  // const [populated, setPopulated] = useState(false);
  // const defaultValues = {
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // };
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
  // return (
  //   <>
  //     <section className="contact content skinny">
  //       <p>
  //         If you’d like to discuss your appointment or have any questions
  //         regarding massage or your treatment with me, please fill in the form
  //         below.
  //       </p>
  //       {/* <form
  //         name="contact"
  //         method="post"
  //         netlify="true"
  //         netlify-honeypot="bot-field"
  //       >
  //         <input type="hidden" name="form-name" value="contact" />
  //         <p>
  //           <label htmlFor="name">Name</label> <br />
  //           <input type="text" id="name" name="name" required />
  //         </p>
  //         <p>
  //           <label htmlFor="email">Email</label> <br />
  //           <input type="email" id="email" name="email" required />
  //         </p>
  //         <p>
  //           <label htmlFor="message">Message</label> <br />
  //           <textarea id="message" name="message" required></textarea>
  //         </p>
  //         <p>
  //           <input type="submit" value="Submit message" />
  //         </p>
  //       </form> */}
  //       {/* <form
  //         data-netlify="true"
  //         netlify-honeypot="bot-field"
  //         onSubmit={handleSubmit(onSubmit, handleError)}
  //         name="contact"
  //       >
  //         <input type="hidden" name="form-name" value="contact" />
  //         <input
  //           type="text"
  //           placeholder="Name"
  //           name="name"
  //           {...register("name", registerOptions.name)}
  //         />
  //         <small className="error-message">{errors.name && errors.name}</small>
  //         <input
  //           type="text"
  //           name="email"
  //           placeholder="Email"
  //           {...register("email", registerOptions.email)}
  //         />
  //         <small className="error-message">
  //           {errors.email && errors.email}
  //         </small>
  //         <input
  //           type="text"
  //           placeholder="Subject"
  //           name="subject"
  //           {...register("subject", registerOptions.subject)}
  //         />
  //         <small className="error-message">
  //           {errors.subject && errors.subject}
  //         </small>
  //         <input
  //           type="textarea"
  //           placeholder="Message"
  //           name="message"
  //           {...register("message", registerOptions.message)}
  //         />
  //         <small className="error-message">
  //           {errors?.message && errors.message}
  //         </small>
  //         <button type="submit">Send</button>
  //       </form> */}
  //     </section>
  //   </>
  // );
};

export default Contact;
