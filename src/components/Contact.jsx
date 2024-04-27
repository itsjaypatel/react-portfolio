import React, { useState } from "react";
import locationIcon from '../images/contact/location.svg'
import mailIcon from '../images/contact/mail.svg'
import dialIcon from '../images/contact/call.svg'
import {Form,Button } from "react-bootstrap";
import { submitForm } from "../api/helper";
export const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <h2 className="section-title">
                CONTACT
            </h2>
            <div className="contact-container">
                <div className="contact-detail-container">
                    <ContactDetail icon={locationIcon} title="Location" description="Surat,Gujarat,India" url="https://maps.app.goo.gl/jn47DUS73AUKXCrR6" />
                    <ContactDetail icon={mailIcon} title="Email" description="jaybpatel908@gmail.com" url="mailto:jaybpatel908@gmail.com"/>
                    <ContactDetail icon={dialIcon} title="Call" description="(+91) 99999 99999" url="" />
                </div>
                <div className="contact-form-container">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

const ContactDetail = ({ icon, title, description,url }) => {
    return (
        <div className="contact-detail">
            <a href={url} aria-hidden="false">
            <img src={icon} alt="" className="contact-detail-icon" />
            </a>
            <div className="contact-detail-body">
                <h5 className="contact-detail-title">{title}</h5>
                <p className="contact-detail-description">{description}</p>
            </div>
        </div>
    )
}

const ContactForm = () => {
    const [isFormSubmit,setFormSubmit] = useState();
    const onSubmit = (event) => {
        event.preventDefault();
        submitForm(event.target).then(res => {
            setFormSubmit(res.success ? true : false);
        });
      };
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Control size="" type="text" placeholder="Your Name" name="name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control size="" type="email" placeholder="Your Email" name="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Control size="" type="text" placeholder="Subject" name="subject" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control size="" as="textarea" rows={8} placeholder="Message" name="message" required minLength={1} maxLength={500} />
            </Form.Group>
            <div className="d-grid gap-2">
            {isFormSubmit !== undefined && <Button variant={isFormSubmit ? "outline-success": "outline-danger"} disabled  size="sm">
                {isFormSubmit ? "Message received. We'll be in touch soon!" : "Something went wrong. Please try again later"}
            </Button>}
            {isFormSubmit === undefined && <Button variant="primary"  type="submit" size="sm">
                Submit
            </Button>}
            </div>
        </Form>
    )
}