import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      
      <section className="card">      
        <Card 
          photo="./images/card-swim.png" alt="swim" rating="5.0" review="6"
          country="USA" msg="Life lessons with Katie Zaferes" price="136"
        />
        <Card 
          photo="./images/card-wedding.png" alt="wedding" rating="5.0" review="6"
          country="USA" msg="Learn wedding photography" price="125"
        />
        <Card 
          photo="./images/card-bike.png" alt="bike" rating="4.8" review="6"
          country="USA" msg="Group Mountain Biking" price="50"
        />
    </section>
    </>
   
  )
}
export default App;