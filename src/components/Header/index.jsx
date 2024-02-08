import {ReactComponent as Hamburguer} from './../../imgs/icon-hamburger.svg';

const Header = () => {
  return(
    <header>
      <Hamburguer fill="#000" />
      <nav>
        <ul>
          <li className="nav-item">
            <a href="#" target="_blank" className="nav-link">
              home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" target="_blank" className="nav-link">
              shop
            </a>
          </li>
          <li className="nav-item">
            <a href="#" target="_blank" className="nav-link">
              about
            </a>
          </li>
          <li className="nav-item">
            <a href="#" target="_blank" className="nav-link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };