import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>want to get in touch?</h3>
            <p>
              We're always updating our recipes with lots of fun delicious
              dishes
            </p>
            <p>
              Join our newsletter to get exciting new recipes straight to your
              inbox just add you email and enjoy the flavors!
            </p>
            <p>Don't be shy contact us now!</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>{" "}
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>{" "}
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>{" "}
                <input type="textarea" name="message" id="message" />
              </div>
              <button className="btn block">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
