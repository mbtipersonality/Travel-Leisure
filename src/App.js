import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `https://www.google.com/search?q=site%3Atravelandleisure.com+${randSearch}&sca_esv=a6e40fb14bf67fea&sca_upv=1&ei=Ce4YZuHhNtzv4-EP5di2uAc&ved=0ahUKEwihirqxnryFAxXc9zgGHWWsDXcQ4dUDCBA&uact=5&oq=site%3Atravelandleisure.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiG3NpdGU6dHJhdmVsYW5kbGVpc3VyZS5jb20gYUiUPVD1OVj1OXADeACQAQCYAckBoAHJAaoBAzItMbgBA8gBAPgBAvgBAZgCAKACAJgDAIgGAZIHAKAHLQ&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
