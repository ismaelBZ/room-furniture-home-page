import {useState} from 'react';
import { Header } from './../../components/Header';
import { HeroCard } from './../../components/HeroCard';
import { AboutCard } from '../../components/AboutCard';
import { SwitchCard } from './../../components/SwitchCard';
import './styles.css';

function Home() {
  const [index, setIndex] = useState(0);

  const nextCard = ()  => {
    if (index === 2) {
      setIndex(0);
      console.log(index)
    } else {
      setIndex(index + 1);
      console.log(index)
    }
  }

  const previousCard = () => {
    if (index === 0) {
      setIndex(2);
      console.log(index);
    } else {
      setIndex(index -1);
      console.log(index);
    }
  }

  return (
    <div className='page-wrapper'>
      <Header />
      <HeroCard className="hero-card" index={index}/>
      <SwitchCard nextCard={nextCard} previousCard={previousCard} />
      <AboutCard />
    </div>
  );
}

export default Home;


// Solução encontrada, importar os dados aqui e passar eles via props para os filhos, depois veremos como resolver a questão das imagens.