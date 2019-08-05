import React, { Fragment } from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
const ContactPage = () => {
  return (
    <Fragment>
      <Hero img={contactBcg} />
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact Us" />
            <form
              action="https://formspree.io/asuraj20@yahoo.com"
              method="POST"
              className="mt-5"
            >
              {/* Name */}
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="suraj adhikari"
                />
              </div>
              {/* Email */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email@email.com"
                />
              </div>
              {/* Subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="important !!"
                />
              </div>
              {/* Message */}
              <div className="form-group">
                <textarea
                  name="message"
                  rows="10"
                  className="form-control"
                  placeholder="Send Us Enquiry !!!"
                />
              </div>
              {/* Send */}
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Send"
                  className="form-control bg-primary text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactPage;
