import './App.css';
import Navbar from './components/Navbar';
import Hero  from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {
  const cards = data.map(card=>{
    return ( <Card
      key={card.id}
      {...card}
     />);
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
       {cards}
      </section>
      
    </div>
  );
}

export default App;