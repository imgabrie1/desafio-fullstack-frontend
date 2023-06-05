import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iRegisterFormValues } from "../pages/register";
import api from "../services/api";
import iLogin from "../interfaces/login.interface";

interface iAuthProviderProps {
  children: ReactNode;
}

interface iAuthContextType {
  userId: string | null;
  setUserId: (userId: string | null) => void;
}

interface iAuthContextValues {
  singIn: (data: iLogin) => void;
  loading: boolean;
  userLoaded: boolean;
  formRegister: (formData: iRegisterFormValues) => void;
  userId: iAuthContextType | null;
  user: iUser | undefined;
  handleLogout: () => void;
  deleteUser: () => Promise<void>;
}

export interface iUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  contacts: iContacts[];
}
export interface iContacts {
  user: iUser;
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const AuthContext = createContext<iAuthContextValues>(
  {} as iAuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<iAuthContextType | null>(null);
  const [user, setUser] = useState<iUser>();
  const [loading, setLoading] = useState(true);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("your-personal-schedule:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const id = localStorage.getItem("IDUser:ID");
      if (id) {
        try {
          const res = await api.get<iUser>(`users/${id}`);
          setUser(res.data);
        } catch (error) {
          console.log("Error getting customer data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("your-personal-schedule:token");
    localStorage.removeItem("IDUser:ID");
  };

  const singIn = async (data: iLogin) => {
    try {
      const res = await api.post("/login", data);
      const { token } = res.data;

      const tokenParts = token.split(".");
      const tokenBody = JSON.parse(atob(tokenParts[1]));

      const id = tokenBody.id;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("your-personal-schedule:token", token);
      localStorage.setItem("IDUser:ID", id);

      setUserLoaded(true);
      setUserId(id);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const formRegister = async (formData: iRegisterFormValues) => {
    try {
      setLoading(true);
      const res = await api.post("/users", formData);
      navigate("/");
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async () => {
    try {
      const id = localStorage.getItem("IDUser:ID");
      const token = localStorage.getItem("your-personal-schedule:token");

      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleLogout();
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        singIn,
        loading,
        formRegister,
        userId,
        user,
        handleLogout,
        userLoaded,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
