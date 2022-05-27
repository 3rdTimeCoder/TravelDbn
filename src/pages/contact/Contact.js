import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact__wrapper">
            <form>
                <input type="text" name="Name" placeholder="Name" required />
                <input type="email" name="Enail" placeholder="Email" required />
                <textarea placeholder="Talk to us..."></textarea>
                <button>Submit</button>
            </form>
        </div>
        <div id="footer">
            <p>Website developed by <a href="http://github.com/3rdtimecoder" target="_blank" rel="noopener noreferrer">3rdTimeCoder</a></p>
        </div>
    </section>
  )
}

export default Contact