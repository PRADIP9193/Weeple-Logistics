import Head from "next/head";
import CommonScripts from "../components/CommonScripts";
import CommonStyles from "../components/CommonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />

      <div>
        <section className="page-title">
          <div className="images-outer">
            <div className="image one">
              <img src="../assets/images/resource/page-title-1.jpg" alt="" />
            </div>
            <div className="image two">
              <img src="../assets/images/resource/page-title-2.jpg" alt="" />
            </div>
            <div className="image three">
              <img src="../assets/images/resource/page-title-3.jpg" alt="" />
            </div>
            <div className="image four">
              <img src="../assets/images/resource/page-title-4.jpg" alt="" />
            </div>
            <div className="image five">
              <img src="../assets/images/resource/page-title-5.jpg" alt="" />
            </div>
          </div>
          <div className="auto-container">
            <h1>Welcome to Airygo</h1>
            <p className="page-breadcrumb">
              Your ultimate destination for booking cargo transportation
              services!
            </p>
          </div>
        </section>

        <section className="intro-section-two">
          <div className="auto-container">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(../assets/images/resource/intro-2.png)",
              }}
            />
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title style-six">
                    <h1> Why Choose Us?</h1>
                    <div className="text">
                      <span>Airygo</span> stands out from its competitors with
                      its comprehensive selection of{" "}
                      <span>air cargo transportation services</span> that make
                      shipping easy no matter where you are in the world. From{" "}
                      <span>global</span> freight forwarding to{" "}
                      <span>door pick up</span> and
                      <span> delivery options</span>, <span>our team</span> is
                      dedicated to trying best that your shipment process is
                      seamless from <span>start </span>to <span>finish</span>.
                    </div>
                    <div className="text">
                      We offer convenient <span>tracking</span> options so
                      customers can always stay updated about their orders every
                      step of the way. Add in our{" "}
                      <span>professional network</span> of qualified agents and
                      experienced staff members who are available 12/7
                      worldwide.
                    </div>
                    <div className="text">
                      it’s clear why so many people choose Airygo when looking
                      for a comprehensive freight forwarding solution!
                    </div>
                  </div>
                  <a href="/contact" className="lightbox-image video-box">
                    <span className="fa fa-play">
                      <i className="ripple" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="image">
                    <img src="../assets/images/resource/intro-1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="service-block-two col-lg-12 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="content">
                    <div className="icon-outer">
                      <div className="icon-box">
                        <span className="icon flaticon-shield" />
                      </div>
                    </div>
                    <h2>
                      <a href="service-detail.html">
                        Multiple Logistics Companies:
                      </a>
                    </h2>
                    <div className="text">
                      At Airygo,
                      <br /> we provide customers access to multiple logistics
                      companies in order to ensure hassle free shipping
                      experience by providing a wide range of transport modes
                      land, rail or sea being just some examples. Customers no
                      longer have worry about whether they have selected the
                      right mode or not; with assistance from our professional
                      team they can save time, money as well as effort knowing
                      they have chosen what is best suitable for their needs!
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="content">
                    <div className="icon-outer">
                      <div className="icon-box">
                        <span className="icon flaticon-security-1" />
                      </div>
                    </div>
                    <h2>
                      <a href="service-detail.html">Live Tracking:</a>
                    </h2>
                    <div className="text">
                      Don't let distance be an issue when it comes getting
                      information on your order; <br />
                      Airygo provides customers with live tracking capabilities
                      so they can check where exactly their shipment is at any
                      given moment without needing extra effort or resources.
                      This powerful feature has made life easier than ever
                      before because now clients don’t need wait until their
                      package reaches them.
                      <br /> instead get all updates about status directly from
                      wherever may be sitting around world! Gone days when had
                      wonder ‘Is my package still route?’ Thanks us this
                      question will never arise again once book through us!
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Block Two */}
              <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="content">
                    <div className="icon-outer">
                      <div className="icon-box">
                        <span className="icon flaticon-network-1" />
                      </div>
                    </div>
                    <h2>
                      <a href="service-detail.html">Professional Team:</a>
                    </h2>
                    <div className="text">
                      At AiryGo,
                      <br /> we understand importance having experienced staff
                      members backing up operations hence hire only top
                      professionals who come with years expertise field offering
                      unrivaled support anyone might require anytime .<br />
                      Their skills set ensures smooth sailing process from
                      beginning end no matter how complex task may appear .
                      <br />
                      All personnel backed by our commitment towards excellence
                      thus assure each project handled perfectly accordance
                      industry standards safety regulations international
                      protocols target satisfaction every instance .
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-block-two col-lg-12 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="content">
                    <div className="icon-outer">
                      <div className="icon-box">
                        <span className="icon flaticon-network-1" />
                      </div>
                    </div>
                    <h2>
                      <a href="service-detail.html">
                        Thousands Cities Covered Worldwide:
                      </a>
                    </h2>
                    <div className="text">
                      No Worries About Where You Are Located
                    </div>
                    <div className="text">
                      One best things working Appergeo family that many places
                      covered there will never worry being distant client do
                      airlines run routes small towns outskirts suburbs because
                      thanks amazing network partner organizations thousands
                      cities worldwide filled promise high speed returns
                      important documents packages goods via airways something
                      else none other organisations able boast! This means
                      stress free journey locate, even remotest locations relax
                      enjoy feeling secure knowledge shipments travel hands
                      trustworthy reliable company engineers take care
                      everything along way .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* About Section Two */}
        <section className="about-section-two">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <div className="image">
                    <img src="../assets/images/resource/about-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title style-six"></div>
                  <ul className="list-style-two">
                    <li>
                      Land, rail or sea being just some examples. Customers no
                      longer have worry about whether they have selected the
                      right mode or not; with assistance from our professional
                      team they can save time, money as well as effort knowing
                      they have chosen what is best suitable for their needs!
                    </li>
                    <li>
                      Keep Tabs on Your Order Anytime Anywhere! Don't let
                      distance be an issue when it comes getting information on
                      your order; Airygo provides customers with live tracking
                      capabilities so they can check where exactly their
                      shipment is at any given moment without needing extra
                      effort or resources. This powerful feature has made life
                      easier than ever before because now clients don’t need
                      wait until their package reaches them instead get all
                      updates about status directly from wherever may be sitting
                      around world! Gone days when had wonder ‘Is my package
                      still route?’ Thanks us this question will never arise
                      again once book through us
                    </li>
                  </ul>
                </div>
              </div>
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

        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-circle-up" />
        </div>
      </div>

      <Footer />
      <CommonScripts />
    </>
  );
}
