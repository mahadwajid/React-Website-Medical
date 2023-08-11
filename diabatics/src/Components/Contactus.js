import '../Assessts/Contactus.css';
import Footer from './Footer';
function Contactus(){
    return(
        <div>
    <div className='Contact'>
      <h1>Contact US</h1>
      <p>
        Feel Free To Contact Us if you Have Any Problem.
      </p>
    </div>

    
     <div id="contact-container">
      <h1 className="contact-title">Contact Form</h1>
      <form className="contact-form">
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject"  />
        </div>
        <div className="input-wrapper">
          <label htmlFor="message">Message</label>
          <textarea id="message" ></textarea>
        </div>
        <button id="form-button">Submit</button>
      </form>
     
    </div>
    <Footer />
   </div>
    )
}
export default Contactus;