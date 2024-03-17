import './Footer.css'


const Footer = () => {
  return (
    <>
      <footer className="footer bg-light border-top text-center pt-4 fixed-bottom">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md">
            <ul className="nav-list">
              <li className="list-inline-item"><a href="/" className="text-dark">HOME</a></li>
              <li className="list-inline-item"><a href="/scoreboard" className="text-dark">SCOREBOARD</a></li>
              <li className="list-inline-item"><a href="/standings" className="text-dark">STANDINGS</a></li>
              <li className="list-inline-item"><a href="/ranking" className="text-dark">RANKING</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md">
            <ul className="list-icon">
              <li className="list-icon-item">
                <a href="/" className="icon-link">
                  <img src="/facebook.svg" alt="Facebook" width="25" height="25" />
                </a>
              </li>
              <li className="list-icon-item">
                <a href="/" className="icon-link">
                  <img src="/youtube.svg" alt="YouTube" width="25" height="25" />
                </a>
              </li>
              <li className="list-icon-item">
                <a href="/" className="icon-link">
                  <img src="/instagram.svg" alt="Instagram" width="25" height="25" />
                </a>
              </li>
              <li className="list-icon-item">
                <a href="/" className="icon-link">
                  <img src="/x-twitter.svg" alt="Twitter" width="25" height="25" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md">
            <p className="text-muted">&copy; 2024 Sport App</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer