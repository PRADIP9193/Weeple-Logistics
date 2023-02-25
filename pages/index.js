import Head from "next/head";
import CommonScripts from "../components/CommonScripts";
import CommonStyles from "../components/CommonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />

      <div>
        <section className="banner-section-two">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="title">
                    Your One Stop Professional Freight Logistics Platform.
                  </div>
                  <h1>Airygo</h1>

                  <p>
                    Airygo -
                    <span>Air Cargo and Freight Transportation Services</span>
                    at Your Fingertips Are you looking for a reliable air
                    freight or air cargo transportation solution? At Airygo, we
                    offer the
                    <span>most comprehensive logistics solutions</span> for all
                    your needs! With our <span>door-to-door pickup</span>,{" "}
                    <span>doorstep delivery</span> and{" "}
                    <span>live tracking services</span>, Airygo makes it easy to
                    ensure optimal service. Our professional team allows us to
                    provide services in more than{" "}
                    <span>200 logistics companies </span>
                    worldwide, covering all modes of transport including road,
                    rail, air and sea. Whether you’re shipping across cities or
                    around the world, Airygo provides a{" "}
                    <span>fast and efficient</span> shipping experience that is
                    tailored to meet all your requirements.
                  </p>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="image">
                    <img src="../assets/images/resource/banner-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div
                    className="pattern-layer"
                    style={{
                      backgroundImage:
                        "url(../assets/images/icons/pattern-1.png)",
                    }}
                  />
                  <div className="image">
                    <img src="../assets/images/resource/about-1.jpg" alt="" />
                  </div>
                </div>
                <div
                  className="image-content wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div
                    className="icon-box"
                    style={{
                      backgroundImage: "url(../assets/images/icons/icon-2.png)",
                    }}
                  />
                  <div className="circle-box" />
                  <h4>
                    Lorem, ipsum dolor. <br /> Lorem, ipsum.
                  </h4>
                  <ul>
                    <li>
                      <span className="icon flaticon-discount" />
                      shipment 12/7
                    </li>
                    <li>
                      <span className="icon flaticon-network-1" />
                      network of supplier
                    </li>
                  </ul>
                </div>
              </div>

              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title style-two">
                    <h1>
                      Worldwide Coverage with
                      <br /> Airygo
                    </h1>
                  </div>
                  <div className="text">
                    At AiryGo,we understand the importance of reaching locations
                    both
                    <span> near and far</span>. That's why we offer coverage in
                    <span> thousands of cities</span> worldwide. We make sure
                    that you get your <span> goods</span> wherever it needs to
                    be as quickly as possible so that you have one less thing to
                    worry about. We can handle whatever size or type of shipment
                    <span> 12/7</span> <br /> No job is too big or small for us!
                    With our wide-reaching <span>network of suppliers</span>, we
                    can always help find the most economical route from point A
                    to point B no matter where it’s located on the{" "}
                    <span> globe</span>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="seo-section">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title style-two centered">
              <h1>The Advantages of Booking with Airygo </h1>
            </div>
            <div className="row clearfix">
              {/* Column */}
              <div className="left-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  {/* Seo Block */}
                  <div className="seo-block">
                    <div className="inner-box px-auto">
                      <div className="text">
                        <span>Global Freight Forwarding </span>: Our vast
                        supplier network stretches around the globe, allowing us
                        to source competitively priced solutions &amp; options
                        locally which would not be available otherwise.
                      </div>
                      <div className="text">
                        <span>Multiple Logistics Companies</span> : With over
                        200+ logistics partners operating worldwide you're
                        targeted access to competitive rates & amp; quality
                        services
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="seo-block style-two">
                    <div className="inner-box px-auto">
                      <div className="text">
                        <span>Door Pickup &amp; Delivery</span> : Our
                        door-to-door pick up &amp; delivery services give you
                        full control over when &amp; where packages are shipped
                        without having to worry about transporting goods
                        yourself
                      </div>
                      <div className="text">
                        <span>Live Tracking</span> : Keep track of shipments in
                        real time with live tracking on our web platform —so
                        you'll always know exactly what's happening with
                        deliveries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-software-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="sec-title style-two">
                    <h1>Trustworthy Professional Team </h1>
                  </div>
                  <div className="text">
                    We take <span>safety</span> very seriously here at AiryGo
                    .Our <span>professional team</span> works hard everyday to
                    ensure that every shipment is properly handled from start
                    til finish . You can rest assured knowing that your goods
                    are traveling safely with experienced hands. Our staff also
                    offers<span> personalised support</span>
                    throughout the entire process —so if there are ever any
                    queries along the way we will answer them
                    <span> quickly and responsibly</span> .
                  </div>
                  <div className="row clearfix">
                    <div className="number-block col-lg-6 col-md-6 col-sm-12">
                      <div className="block-inner">
                        <div className="number">01</div>
                        <h4>Personalised Support</h4>
                        <div className="block-text">
                          Keep track of shipments in real time with live
                          tracking on our web platform
                        </div>
                      </div>
                    </div>

                    <div className="number-block col-lg-6 col-md-6 col-sm-12">
                      <div className="block-inner">
                        <div className="number">02</div>
                        <h4>Traveling Safely</h4>
                        <div className="block-text">
                          so you'll always know exactly what's happening with
                          deliveries
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="images-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="circle-layer" />
                  <div className="images">
                    <div className="image">
                      <img
                        src="../assets/images/resource/software-1.png"
                        alt=""
                      />
                    </div>
                    <div className="image">
                      <img
                        src="../assets/images/resource/software-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="agency-section">
          <div className="agents-images">
            <div className="agent">
              <img src="../assets/images/resource/agent-1.jpg" alt="" />
            </div>
            <div className="agent-1">
              <img src="../assets/images/resource/agent-2.jpg" alt="" />
            </div>
            <div className="agent-2">
              <img src="../assets/images/resource/agent-3.jpg" alt="" />
            </div>
            <div className="agent-3">
              <img src="../assets/images/resource/agent-4.jpg" alt="" />
            </div>
            <div className="agent-4">
              <img src="../assets/images/resource/agent-5.jpg" alt="" />
            </div>
          </div>
          <div
            className="pattern-layer"
            style={{
              backgroundImage: "url(../assets/images/background/pattern-3.png)",
            }}
          />
          <div className="auto-container">
            <div className="section-icon">
              <span className="icon flaticon-internet-1" />
            </div>

            <div className="sec-title style-two light centered">
              <h1>
                Choose Air Go for <br /> All Your Freight Needs
              </h1>
            </div>

            <div className="buttons-box text-center">
              <a href="/contact" className="theme-btn btn-style-six">
                <span className="txt">Get Started Now</span>
              </a>
              <a href="/contact" className="theme-btn btn-style-five">
                <span className="txt">Signup Now</span>
              </a>
            </div>
          </div>
        </section>

        <section className="featured-section-two">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">
                <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="upper-box">
                      <div className="icon far fa-envelope" />
                      <h5>
                        <a href="/contact">Global Freight Forwarding</a>
                      </h5>
                      <div className="arrow flaticon-right-arrow-3" />
                    </div>
                    <div className="text">
                      Experience the convenience and ease of Airygo’s
                      international freight forwarding services. Select from
                      over 200+ logistics companies for a wide variety of
                      transport modes including road, rail, air and sea. With
                      thousands of destinations covered around the world, Airygo
                      makes it easy to move your goods cost-effectively and
                      securely.
                    </div>
                    <div className="big-icon far fa-envelope" />
                  </div>
                </div>

                <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="upper-box">
                      <div className="icon fas fa-mobile-alt" />
                      <h5>
                        <a href="/contact">Door Pickup &amp; Delivery</a>
                      </h5>
                      <div className="arrow flaticon-right-arrow-3" />
                    </div>
                    <div className="text">
                      Let Airygo take care of all your door pickup and delivery
                      needs for both local or global freight forwarding. Our
                      professional team is experienced in handling urgent orders
                      with extreme levels of accuracy so you can get the job
                      done on time - every time!
                    </div>
                    <div className="big-icon fas fa-mobile-alt" />
                  </div>
                </div>

                <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="upper-box">
                      <div className="icon fas fa-mobile-alt" />
                      <h5>
                        <a href="/contact">Live Tracking</a>
                      </h5>
                      <div className="arrow flaticon-right-arrow-3" />
                    </div>
                    <div className="text">
                      Let Airygo take care of all your door pickup and delivery
                      needs for both local or global freight forwarding. Our
                      professional team is experienced in handling urgent orders
                      with extreme levels of accuracy so you can get the job
                      done on time - every time!
                    </div>
                    <div className="big-icon fas fa-mobile-alt" />
                  </div>
                </div>

                <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="upper-box">
                      <div className="icon fas fa-mobile-alt" />
                      <h5>
                        <a href="/contact">Professional Team</a>
                      </h5>
                      <div className="arrow flaticon-right-arrow-3" />
                    </div>
                    <div className="text">
                      Airygo employs an experienced team dedicated to providing
                      you with professional service during each shipping process
                      trying best everything goes as smooth as possible no
                      matter where it needs to go! Benefit from their vast
                      experience in managing complex orders so you can rest
                      assured knowing your items are in good hands with us at
                      every step of the journey worldwide!
                    </div>
                    <div className="big-icon fas fa-mobile-alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="auto-container">
            <div className="sec-title style-two centered">
              <h1>ChooseAir Go for All Your Freight Needs </h1>
            </div>
            <div className="row clearfix">
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="price-box-two col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <div className="text text-content">
                          When it comes time for large scale shipments within
                          domestic borders or across international lines
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="price-box-two col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <div className="text text-content">
                          Look no further thanAir Go! Whit an extensive global
                          partner networkcomprising more than 200+ logistics
                          providers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-box-two col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box">
                      <div className="content">
                        <div className="text text-content">
                          Together we can accommodate even complicated shipping
                          specifications like temperature control, oversize
                          items etc. Whether its rail taxis air cargoor any
                          other modeoftransport
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="version-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="days text-left">
                    Our dedicated team will work closely togetherwith yours
                    create abespoke solution just form iou! Get premium end to
                    end service and full visibilityon shipments costs times and
                    status to make sure everything goes according to plan when
                    booking with Airy Go today!
                  </div>
                  <div className="image col-12">
                    <img src="../assets/images/resource/version.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-circle-up" />
        </div>
      </div>

      <Footer />
      <CommonScripts />
    </>
  );
}
