import './ContactPage.css'

function ContactPageBody() {
  return (
    <div className="body">
      <div className="contact-left-section">
        <p className='highlight get-in-touch'>Get in Touch</p>
        <h3 className='highlight'>I'd like to hear from you!</h3>
        <div className="gmail link-container">
          <img className='uploaded-img' src="gmail.png" alt="gmail" />
          <span className='margin-left-20'>
            <a className='no-color no-underline gmail' href="mailto:daniloalvaro031717@gmail.com">daniloalvaro031717@gmail.com</a>
          </span>
        </div>
        <div className="linkedin link-container">
          <img className='uploaded-img' src="linkedin.png" alt="linkedin" />
          <span className='margin-left-20'>Let’s connect professionally and grow our network.</span>
        </div>
        <div className="github link-container">
          <img className='uploaded-img border-radius-half' src="github.png" alt="github" />
          <span className='margin-left-20'>Check out my open-source projects and code experiments.</span>
        </div>
        <div className="facebook link-container">
          <img className='uploaded-img' src="fb.png" alt="facebook" />
          <span className='margin-left-20'>Like me on Facebook</span>
        </div>
        <div className="viber link-container">
          <img className='uploaded-img' src="viber.png" alt="viber" />
          <span className='margin-left-20'>Reach out instantly through Viber.</span>
        </div>
        <div className="youtube link-container">
          <img className='uploaded-img' src="yt.png" alt="youtube" />
          <span className='margin-left-20'>Watch my projects and tutorials on YouTube.</span>
        </div>
  
      </div>
      <div className="contact-right-section">

      </div>
    </div>
  );
}

export default ContactPageBody