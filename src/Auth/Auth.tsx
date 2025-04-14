import { createContext, ReactNode, useState } from 'react'

type AuthContextType = {
  toggleDock: boolean
  setToggleDock: (value: boolean) => void
}

const defaultAuth: AuthContextType = {
  toggleDock: false,
  setToggleDock: () => {},
}

export const AuthContext = createContext<AuthContextType>(defaultAuth)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [toggleDock, setToggleDock] = useState<boolean>(false)

  const contextValues: AuthContextType = { toggleDock, setToggleDock }
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
