import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  
  const [theme, setTheme] = useState(true) 
  
  
  const handleToggle = () => {
    setTheme(prevTheme => !prevTheme)
    localStorage.setItem("colorTheme", JSON.stringify(!theme) )
  
  }
  
  useEffect(() => {
  let getTheme = localStorage.getItem("colorTheme") === null? theme: JSON.parse(localStorage.getItem("colorTheme"))
  console.log('getheme',getTheme)

    setTheme(getTheme)
  }, [])

  return (
    <div className="app mx-auto">
      <Header
        theme={theme}
        handleToggle={handleToggle}
      />
      <Main
        theme={theme}
      />
    </div>
  );
}

export default App;
