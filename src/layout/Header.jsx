function Header() {
  return (
    <nav className='teal accent-4'>
      <div className='nav-wrapper'>
        <a href='!#' className='brand-logo'>
          🎞️ Movies
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/MichaelVeselov' target='_blank'>
              GitHub
            </a>
          </li>
          <li>
            <a href='https://mve-react-movies-classes.vercel.app/' target='_blank'>
              Deploy
            </a>
          </li>
          <li>
            <a href='https://github.com/MichaelVeselov' target='_blank'>
              Author's Page
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
