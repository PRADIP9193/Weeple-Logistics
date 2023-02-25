// 3 divs in footer with equal width (col-lg-4)

// 1st div: Logo (img) and text (p) (provided by us in footer_content file) +  email address (p)

// 2nd div: Quick links (h4) - 5 links (a) to pages (Home, About, Contact, Privacy Policy, Terms and Conditions)

// 3rd div: Disclaimer (h4) - text (p) (lorem ipsum)

function Footer() {
  return (
    <>
      {}
      <footer className="main-footer style-five">
        <div className="auto-container">
          {}
          <div className="widgets-section">
            <div className="row clearfix">
              {}
              <div className="big-column col-lg-12 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {}
                  <div className="footer-column col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-widget links-widget text-left ">
                      <div className="logo-box">
                        <div className="logo">
                          <img src="../assets/images/logo-2.png" alt="title" />
                        </div>
                      </div>
                      <div>
                        <p>
                          {" "}
                          Airygo, a brand of Weeple Logistics Solution Private
                          Limited, is an online platform for booking freight and
                          cargo transportation services. With over 200+
                          logistics companies covered, global forwarding options
                          and door-to-door pickup & delivery services,
                          Airygo offers an unparalleled experience that makes it
                          easy to ship anything safely and quickly. Live
                          tracking, multiple transport modes (road/rail/air/sea)
                          and thousands of cities across the world are just some
                          of our top features that make us a reliable carrier.
                        </p>
                      </div>
                    </div>
                  </div>
                  {}
                  <div className="footer-column col-lg-4 col-md-4 col-sm-12">
                    <div className="footer-widget links-widget text-left">
                      <h4>Community</h4>
                      <ul className="list-link">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/tnc">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {}
                  <div className="footer-column col-lg-4 col-md-4 col-sm-12 ">
                    <div className="footer-widget links-widget text-left font-white">
                      <h4>Disclimer</h4>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, sequi porro officiis vero at eaque illum
                        tempore incidunt distinctio molestias. In modi maiores
                        omnis cupiditate voluptas error vel est odit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">
                {}
                <div className="copyright-column col-lg-12 col-md-12 col-sm-12">
                  <div className="copyright">
                    Copyright By <a href="/contact">@Airygo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {}

      {}
    </>
  );
}
export default Footer;
