import { useState } from "react";
import emailjs from "@emailjs/browser";
import conf from "../../conf";
import { toast } from "react-toastify";

const useSendPassword = (form) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendPassword = async () => {
    try {
      const response = await emailjs
        .sendForm(
          conf.mailServiceID,
          conf.mailTemplateID,
          form.current,
          conf.mailPublicKey
        )
        .then(
          (response) => {
            setSuccess(true);
            toast.success("Password has been sent!");
            return response;
          },
          (error) => {
            setError(error.text);
            toast.error("Password has been not sent!");
            return error;
          }
        );
      return response;
    } catch (error) {
      setError(error.text);
      setSuccess(false);
      return error;
    }
  };

  return { sendPassword, success, error };
};

export default useSendPassword;
