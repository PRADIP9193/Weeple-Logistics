// This is a component that will be used in the pages\blog.js and pages\contact.js

// Fields: Type of Service (select), Name (input - text), Contact (input - number), Message (textarea), Submit (button)

export default function Form() {
  return (
    <>
      {/* Contact Page Section */}
      <div className="form-column col-lg-12 col-md-12 col-sm-12 p-5 ">
              <div className="inner-column ">
                {/* Contact Form */}
                <h2 className="sub-title pb-2">Get a Quote</h2>
                <div className="contact-form">
                  <form
                    method="post"
                    action="/contact"
                    id="contact-form"
                    className="quote-form ">
                    <div className="form-group ">
                      <label className="input-title">Type of Service</label>
                      <select
                        className="select-product"
                        name="type"
                        id="select-area">
                        <option value="Life-Insurance">Life Insurance</option>
                        <option value="Car-Insurance">Car Insurance</option>
                        <option value="House-Insurance">House Insurance</option>
                        <option value="Accident-Insurance">
                          Accident Insurance
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="input-title">From</label>
                      <input
                        type="text"
                        name="source"
                        placeholder="From City"
                        required
                      />
                    </div>
                    <div className=" form-group ">
                      <label className="input-title">To City</label>
                      <input
                        type="text"
                        placeholder="To City"
                        name="destination"
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-title">Goods Details</label>
                      <textarea
                        name="message"
                        placeholder="Enter your Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-title">Contact</label>
                      <input
                        className="col-12"
                        type="number"
                        placeholder="Contact Number"
                        name="contact"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="site"
                      defaultValue="MoveExpress"
                    />
                    <input
                      type="hidden"
                      name="url"
                      id="url"
                      defaultValue="/test-url"
                    />
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="theme-btn btn-style-four">
                        <span className="txt">Submit</span>
                      </button>
                    </div>
                  </form>
                  <p className="review-text">
                    Been here before? <a href="">Review your quotes.</a>
                  </p>
                </div>
                {/*End Contact Form*/}
              </div>
            </div>
      
    </>
  );
}
