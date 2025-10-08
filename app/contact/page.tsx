export default function Contact() {
  return (
    <div className="container">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <section className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always interested in hearing about new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <a href="mailto:your.email@example.com">
                your.email@example.com
              </a>
            </div>
            
            <div className="contact-method">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </div>
            
            <div className="contact-method">
              <h3>GitHub</h3>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send Me a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
