import React, { createContext, ReactNode, useState } from 'react'

type AuthContextType = {
  toggleDock: boolean
  setToggleDock: (value: boolean) => void
}
export const AuthContext = createContext({})

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
