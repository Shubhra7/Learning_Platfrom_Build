import { initalSignInFormData, initalSignUpFormData } from "@/config";
import { registerService } from "@/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initalSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initalSignUpFormData);

  async function handleRegisterUser(e) {
    e.preventDefault()
   const data = await registerService(signUpFormData)
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
