import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "edd4f6dc-5fb8-4d14-951c-9fe22f39b828");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Get in touch with us! Our team is ready to assist you with any questions, concerns, or inquiries you may have. Whether you're a student, alumni, or just curious about our college, we're here to help</p>
            <ul>
                <li><img src={mail_icon} alt="" />prashanthnelluri2005@gmail.com</li>
                <li><img src={phone_icon} alt="" />9014162309</li>
                <li><img src={location_icon} alt="" />Ghatkeshar, Hyderabad<br />India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text"  name='name' placeholder='Enter Ur Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Ur Mobile No' required/>
                <label>Write Ur Messages Here</label>
                <textarea name="message" rows="6" placeholder='Write Ur Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
