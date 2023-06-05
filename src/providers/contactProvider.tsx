import { ReactNode, createContext, useState, useEffect } from "react";
import api from "../services/api";
import { iContacts } from "./authProvider";

interface iContactProviderProps {
  children: ReactNode;
}

interface iContactContextType {
  contactId: string | null;
  setContactId: (userId: string | null) => void;
}

export interface iRegisterFormNewContactValues {
  name: string;
  email: string;
  phone: string;
}

interface iContactContextValues {
  deleteContact: (contactId: string) => Promise<void>;
  handleDeleteContact: (contactId: string | null) => void;
  contactId: iContactContextType | null;
  handleEditContact: () => Promise<void>;
  editingContact: iContacts | null;
  setEditingContact: React.Dispatch<React.SetStateAction<iContacts | null>>;
  contacts: iContacts[];
  handleCreateContact: (data: iRegisterFormNewContactValues) => void;
}

export const ContactContext = createContext<iContactContextValues>(
  {} as iContactContextValues
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [contacts, setContacts] = useState<iContacts[]>([]);
  const [contactId, setContactId] = useState<iContactContextType | null>(null);
  const [editingContact, setEditingContact] = useState<iContacts | null>(null);

  const handleCreateContact = async (data: iRegisterFormNewContactValues) => {
    try {
      const res = await api.post<iContacts>("contact", data);
      const newContact = res.data;
      setContacts([...contacts, newContact]);
    } catch (error) {
      console.log("Error creating contact:", error);
    }
  };

  useEffect(() => {
    const fetchContactsData = async () => {
      const id = localStorage.getItem("IDUser:ID");
      if (id) {
        try {
          const res = await api.get<iContacts[]>("contact");
          const filteredContacts = res.data.filter(
            (contact) => contact.user && contact.user.id === Number(id)
          );
          setContacts(filteredContacts);
        } catch (error) {
          console.log("Error getting customer data:", error);
        }
      }
    };

    fetchContactsData();
  }, []);

  const handleEditContact = async () => {
    try {
      if (!editingContact) {
        return;
      }

      const res = await api.patch(
        `/contact/${editingContact.id}`,
        editingContact
      );
      const updatedContact = res.data;

      setEditingContact(null);

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
    } catch (error) {
      console.log("Error updating contact:", error);
    }
  };

  const deleteContact = async (contactId: string) => {
    try {
      await api.delete(`contact/${contactId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "your-personal-schedule:token"
          )}`,
        },
      });

      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      )
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  const handleDeleteContact = async (contactId: string | null) => {
    if (contactId) {
      await deleteContact(contactId);
      setContactId(null);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        deleteContact,
        handleDeleteContact,
        contactId,
        handleEditContact,
        editingContact,
        setEditingContact,
        contacts,
        handleCreateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
