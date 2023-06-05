import { useContext } from "react";
import { ContactContext } from "../providers/contactProvider";

const ContactAuth = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};

export default ContactAuth;
