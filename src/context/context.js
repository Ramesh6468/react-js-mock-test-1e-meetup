import React from 'react'

const Context = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default Context
