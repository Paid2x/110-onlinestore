import "./Contact.css";
import { useState } from "react";

function Contact() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleMessage(e) {
        const text = e.target.value;
        const name = e.target.name;

        const copy = { ...message };
        copy[name] = text;
        setMessage(copy);
    }

    function send() {
        console.log(message);
    }
    return (
        <div className="contact page">
            <h1>Do you want to say hello?</h1>
            <p>Use the form below to get in touch</p>

            <div className='form'>
                <div>
                    <label className='form-label'>Name</label>
                    <input className='form-control' type='text' onBlur={handleMessage} name="name"></input>
                </div>
                <div>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type='email' onBlur={handleMessage} name="email"></input>
                </div>
                <div>
                    <label className='form-label'>Message</label>
                    <input className='form-control' type='text' onBlur={handleMessage} name="message" ></input>
                    <div className='controls'>
                        <button className='btn btn-primary' onClick={send}> Send message</button>
                    </div>

                </div>
            </div>
        </div >
    )
}


export default Contact;