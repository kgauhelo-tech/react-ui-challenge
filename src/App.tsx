import "./App.css";
import searchIcon from "./assets/icons/search-icon.png";
import menuIcon from "./assets/icons/menu-icon.png";
import heroImage from "./assets/hero-image.png";
import sectionImage from "./assets/section-image.jpg";

function App() {
  return (
    <>
      <div id="container">
        <header>
          <div id="logo">
            <p id="main-logo">HYKROX</p>
            <p id="tag-line">unique designs</p>
          </div>
          <div id="links">
            <ul>
              <li id="sm-hide">
                <a href="#">HOME</a>
              </li>
              <li id="sm-hide">
                <a href="#">DESIGNS</a>
              </li>
              <li id="sm-hide">
                <a href="#">SERVICES</a>
              </li>
              <li id="sm-hide">
                <a href="#">ABOUT US</a>
              </li>
              <li id="sm-hide">
                <a href="#">CONTACT US</a>
              </li>
              <li id="sm-hide">
                <img id="search-icon" src={searchIcon} alt="search button" />
              </li>
              <li>
                <img src={menuIcon} alt="" id="sm-menu" />
              </li>
            </ul>
          </div>

          <div id="hidden-nav">
            <div id="burger-links">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">DESIGNS</a>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">CONTACT US</a>
                </li>
                <li id="search">
                  <p>SEARCH</p>
                  <img id="search-icon" src={searchIcon} alt="search button" />
                </li>
              </ul>
            </div>
          </div>
        </header>

        <main>
          <div id="hero-section">
            <div className="hero-left">
              <p className="special">CREATIVE DESIGNERS</p>
              <h1 className="title">
                WE ARE <span className="special">CREATIVE</span> DESIGNERS
              </h1>
              <hr className="line" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                reprehenderit! Ratione, adipisci. Enim voluptate consectetur
                odit autem mollitia reiciendis accusantium aperiam numquam?
                Provident similique nesciunt voluptatibus maiores perferendis,
                architecto quisquam?
              </p>
            </div>

            <div className="hero-right">
              <img src={heroImage} alt="a woman illuminated by blue light" />
            </div>
          </div>

          <div className="services-section">
            <div className="left-services">
              <p className="special">OUR SERVICES</p>
              <h2 className="title">
                WHAT WE <span className="special">DO</span>?
                <hr className="line" />
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores ad reprehenderit doloremque cupiditate odio. Aliquam
                eum a optio aperiam et voluptates itaque veniam, officia neque
                qui in veritatis nam enim!
              </p>
            </div>
            <div className="right-services"></div>
          </div>
        </main>

        <footer>
          <p>
            DESIGNED BY <span className="special">HYKROX</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
