function Header() {
  // <header> should contain a <nav> element

  // links
  //     Homepage
  //     Cities - Dropdown
  //     About
  //     Contact
  //     Blog

  // Make sure the header is fully responsive in mobile device and visually appealing
  return (
    <>
      <header className="main-header header-style-two">
        <div className="header-top">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="brand-column col-lg-6 col-md-12 col-sm-12">
                <div className="text">
                  <span>New</span>Air Cargo and Freight Transportation Services
                </div>
              </div>

              <div className="links-column col-lg-6 col-md-12 col-sm-12">
                <ul>
                  <li>
                    <a href="/contact">Get Support</a>
                  </li>
                  <li>
                    <a href="/contact">Sign in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-upper">
          <div className="outer-container">
            <div className="clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <a href="/">
                    <img src="../assets/images/logo-2.png" alt="title" />
                  </a>
                </div>
              </div>
              <div className="nav-outer clearfix">
                <div className="mobile-nav-toggler">
                  <span className="icon flaticon-menu" />
                </div>

                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className="navbar-collapse show collapse clearfix"
                    id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      <li className="current">
                        <a href="/">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="/contact">Cities</a>
                        <ul>
                          <li>
                            <a href="/contact">City 01</a>
                          </li>
                          <li>
                            <a href="/contact">City 02</a>
                          </li>
                          <li>
                            <a href="/contact">City 03</a>
                          </li>
                          <li>
                            <a href="/contact#">City 04</a>
                          </li>
                          <li>
                            <a href="/contact">City 05</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                    </ul>
                  </div>
                </nav>

                <div className="outer-box">
                  <ul className="button-box">
                    <a href="/contact" className="theme-btn btn-style-four">
                      <span className="txt">Get Started Now</span>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-multiply"></span>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/">
                <img src="../assets/images/logo-2.png" alt="title"></img>
              </a>
            </div>
            <div className="menu-outer"></div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
