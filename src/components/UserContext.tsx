import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserContextProps {
  userName: string | null;
  setUserName: (name: string | null) => void;
}

const UserContext = createContext<UserContextProps>({
  userName: null,
  setUserName: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
