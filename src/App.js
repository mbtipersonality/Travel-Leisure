import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `https://www.google.com/search?q=site%3Afinance.yahoo.com+${randSearch}&sca_esv=88aa776b28e671aa&sca_upv=1&ei=9-oXZpnADorb4-EPgYGh6AM&ved=0ahUKEwjZl6yop7qFAxWK7TgGHYFACD0Q4dUDCBA&uact=5&oq=site%3Afinance.yahoo.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHNpdGU6ZmluYW5jZS55YWhvby5jb20gYUjckwJQk5MCWJOTAnADeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgBwA&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
