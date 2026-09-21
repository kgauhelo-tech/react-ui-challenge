import "./App.css";
import { useState, useRef } from "react";

import FooterCard from "./components/footer-card";
import SectionCard from "./components/section-card.tsx";
import AboutGrid from "./components/grid-element.tsx";

import searchIcon from "./assets/icons/search-icon.png";
import menuIcon from "./assets/icons/menu-icon.png";
import closeIcon from "./assets/icons/close-icon.png";
import heroImage from "./assets/hero-image.png";
import sectionImage from "./assets/section-image.png";
import folderIcon from "./assets/icons/folder-icon.png";
import chartIcon from "./assets/icons/chart-icon.png";
import personIcon from "./assets/icons/person-icon.png";
import groupIcon from "./assets/icons/group-icon.png";
import eyeIcon from "./assets/icons/eye-icon.png";

// section icons
import editIcon from "./assets/icons/edit-icon.png";
import gridIcon from "./assets/icons/grid-icon.png";
import webIcon from "./assets/icons/code-icon.png";
import designIcon from "./assets/icons/design-icon.png";
import modernDesign from "./assets/icons/modern-design.png";

function App() {
  const menuOpenRef = useRef<HTMLDivElement | null>(null);
  const blurRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  function show() {
    setIsOpen(true);
    menuOpenRef.current!.style.display = "block";
    blurRef.current?.classList.add("blur");
  }

  function collapse() {
    setIsOpen(false);
    blurRef.current?.classList.remove("blur");
    menuOpenRef.current!.style.display = "none";
  }

  return (
    <>
      <div id="container">
        <div className="background-text">
          <h1>Y</h1>
          <h1>K</h1>
          <h1>R</h1>
          <h1>H</h1>
          <h1>O</h1>
          <h1>X</h1>
        </div>
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
                <a href="#services">SERVICES</a>
              </li>
              <li id="sm-hide">
                <a href="#about">ABOUT US</a>
              </li>
              <li id="sm-hide">
                <a href="#">CONTACT US</a>
              </li>
              <li id="sm-hide">
                <img id="search-icon" src={searchIcon} alt="search button" />
              </li>
              <li>
                {
                  <img
                    src={isOpen ? closeIcon : menuIcon}
                    onClick={isOpen ? collapse : show}
                    alt="A hamburger menu logo"
                    id="sm-menu"
                  />
                }
              </li>
            </ul>
          </div>
        </header>
        <div ref={menuOpenRef} id="hidden-nav">
          <div id="burger-links">
            <ul>
              <li>
                <a href="#" onClick={collapse}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#" onClick={collapse}>
                  DESIGNS
                </a>
              </li>
              <li>
                <a href="#services" onClick={collapse}>
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#about" onClick={collapse}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" onClick={collapse}>
                  CONTACT US
                </a>
              </li>
              <li id="search" onClick={collapse}>
                <p>SEARCH</p>
                <img id="search-icon" src={searchIcon} alt="search button" />
              </li>
            </ul>
          </div>
        </div>

        <main className={isOpen ? "blur" : ""}>
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

          <div id="services" className="services-section">
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

              <p className="separator">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ea, repellendus doloremque maxime nostrum doloribus
                voluptate est natus culpa molestiae, aperiam, sint veniam nihil.
                Modi fuga quae atque alias amet!
              </p>
              <button>VIEW ALL</button>
            </div>

            <div className="right-services">
              <SectionCard
                type={1}
                imageUrl={webIcon}
                title="Website Design"
                content="We can design and host your website"
              ></SectionCard>

              <div className="box-right">
                <SectionCard
                  type={2}
                  imageUrl={gridIcon}
                  title="Mobile & Desktop App"
                  content="We can create mobile and desktop apps for you"
                ></SectionCard>
              </div>

              <div className="box-left">
                <SectionCard
                  type={2}
                  imageUrl={designIcon}
                  title="UI & UX Design"
                  content="We can design and prototype your digital products"
                ></SectionCard>
              </div>

              <SectionCard
                type={1}
                imageUrl={editIcon}
                title="Editing Photos"
                content="We can edit your pictures to your liking"
              ></SectionCard>
            </div>
          </div>

          <div id="about" className="about">
            <div className="left-about">
              <img src={sectionImage} alt="A girl with headphones on" />
            </div>

            <div className="right-about">
              <p className="special">ABOUT US</p>
              <h2 className="title">
                WHO ARE <span className="special">WE</span>?
              </h2>
              <hr className="line" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti accusantium pariatur, cupiditate, dolores fuga expedita
                eaque, quidem necessitatibus rerum illo dicta explicabo
                molestias.
              </p>

              <div className="about-grid">
                <AboutGrid
                  path={eyeIcon}
                  title="Clean Code"
                  body="
                  Lorem ipsum dolor amet consectetur adipisicing."
                ></AboutGrid>
                <AboutGrid
                  path={modernDesign}
                  title="Modern Design"
                  body="Lorem ipsum dolor amet consectetur adipisicing."
                ></AboutGrid>
              </div>
            </div>
          </div>
        </main>

        <footer className={isOpen ? "blur" : ""}>
          <div className="footer-cards">
            <FooterCard
              description="PROJECTS"
              icon={folderIcon}
              quantity="300+"
            ></FooterCard>

            <FooterCard
              description="PLEASURE"
              icon={chartIcon}
              quantity="8,9"
            ></FooterCard>

            <FooterCard
              description="CUSTOMER"
              icon={personIcon}
              quantity="3000+"
            ></FooterCard>

            <FooterCard
              description="TEAM MEMBERS"
              icon={groupIcon}
              quantity="300+"
            ></FooterCard>
          </div>
          <p className="credit">
            DESIGNED BY <span className="special">HYKROX</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
