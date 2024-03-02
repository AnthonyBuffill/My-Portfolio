import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'


const Contact = () => {
    const form = useRef();
    const [completed, setcompleted] = useState(false)
    const [incomplete, setIncomplete] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setcompleted(false)
        setIncomplete(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setIncomplete(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "service_k39fenv",
        "template_4nh0n7w",
        form.current,
        "YQ7qpZXUUcS3eLhmK"
      )
      
      .then(
        (result) => {
          console.log(result.text);
          setcompleted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact Me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className="not-done" >{incomplete && "Please, fill all required input fields"}</span>
                <Button type="submit" className="button" disabled={completed}>Send</Button>
                <span className="done">{completed && "Thank you for contacting me.  Your email has been successfully submitted. if you have sent me your contact information, rest assured i will be in touch at the earliest convenience."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact