import Head from "next/head";
import BlogScripts from "../components/BlogScripts";
import BlogStyles from "../components/BlogStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta name="description" content="" />
        <BlogStyles />
      </Head>
      <Header />
      
      <div className="page-wrapper">
        <div className="auto-container px-3">
          <h1>News Details</h1>
          <div>
            
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="sidebar-page-container">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar sticky-top">
                  <div className="sidebar-inner">
                    
                    <div className="sidebar-widget categories-widget">
                      <div className="widget-content">
                        <div className="sidebar-title">
                          <h5>Categories</h5>
                        </div>
                        <ul className="blog-cat">
                          <li>
                            <b>
                              Business <span>26</span>
                            </b>
                          </li>
                          <li>
                            <b>
                              Consultant <span>30</span>
                            </b>
                          </li>
                          <li>
                            <b>
                              Creative <span>71</span>
                            </b>
                          </li>
                          <li>
                            <b>
                              UI/UX <span>56</span>
                            </b>
                          </li>
                          <li>
                            <b>
                              Technology <span>60</span>
                            </b>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="sidebar-widget add-widget">
                      <div className="image">
                        <img src="../assets/images/resource/add.jpg" alt />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              
              <div className="content-side col-lg-8 col-md-12 col-sm-12">
                <div className="blog-detail">
                  <div className="inner-box">
                    <div className="image">
                      <img src="../assets/images/resource/news-10.jpg" alt />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia.
                    </p>
                      <Form/>
                    
                    <div className="my-5">
                      <ul className="list-style-five">
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do.
                        </li>
                      </ul>
                    </div>
                    <div className="my-5">
                      <table className="table table-bordered table-striped ">
                        <tbody>
                          <tr>
                            <td>Data</td>
                            <td>Data</td>
                          </tr>
                          <tr>
                            <td>Data</td>
                            <td>Data</td>
                          </tr>
                          <tr>
                            <td>Data</td>
                            <td>Data </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h2 className="my-3">This is a title</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Maiores numquam a impedit veniam expedita nihil,
                        asperiores, temporibus atque illum totam voluptatem
                        rerum, itaque quidem quos optio possimus. Ullam, esse
                        facilis est voluptates ex vitae, ipsa blanditiis facere
                        expedita asperiores, laboriosam unde tenetur illo
                        aspernatur quae perspiciatis eaque nihil nobis corporis.
                      </p>
                    </div>
                    
                    <div className="comments-area">
                      <div className="comment-box">
                        <div className="comment">
                          <h3 className="comment-info clearfix">
                            <strong>Rosalina Kelian</strong>
                          </h3>
                          <p className="comment-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                      <div className="comment-box">
                        <div className="comment">
                          <h3 className="comment-info clearfix">
                            <strong>Rosalina Kelian</strong>
                          </h3>
                          <p className="comment-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div classname="scroll-to-top scroll-to-target" data-target="html">
  <span classname="fa fa-arrow-circle-up">
  </span></div>

      </div>

      <Footer />
      <BlogScripts />
    </>
  );
}
