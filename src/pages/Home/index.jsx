import { Header } from './../../components/Header';
import { HeroCard } from './../../components/HeroCard';
import { AboutCard } from '../../components/AboutCard';

import styles from './styles.css';

function Home() {
  return (
    <div className="home-wrapper">
      {/* <Header /> */}
      <HeroCard className="hero-card" />
      <AboutCard />
    </div>
  );
}

export default Home;
