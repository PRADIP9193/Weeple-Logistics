import Head from "next/head";
import CommonScripts from "../components/CommonScripts";
import CommonStyles from "../components/CommonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
export default function Contact() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Us & Calculate Rates</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      {}
      <div>
        {}
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
            <h1>Contact Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
        {}
        <div classname="scroll-to-top scroll-to-target" data-target="html">
          <span classname="fa fa-arrow-circle-up"></span>
        </div>
      </div>
      <Form />
      <Footer />

      <CommonScripts />
    </>
  );
}
