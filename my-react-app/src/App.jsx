import "./app.css";
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Resume from './Components/resume/Resume'
import Experience from "./Components/experience/Experience";



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/resume":
      component = <Resume />
      break
    case "/experience":
      component = <Experience />
      break
  }

  return (
  <>
  <Navbar />
  <div className="container">{component}</div>
  </>
  )
}

export default App
