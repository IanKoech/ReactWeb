import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
const fields = {
    sections : [
        [
            {name:"name", elementName:"input", type:"text", placeholder:"Your name"},
            {name:"email", elementName:"input", type:"email", placeholder:"Your email"},
            {name:"phone", elementName:"input", type:"text", placeholder:"Your phone number"},
        ],
        [
            {name:"message", elementName:"textarea", type:"text", placeholder:"Type your message"}
        ]
    ]
};

class Contact extends Component{
    
    render(){
        return (
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            
                <form onSubmit={this.props.handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        {fields.sections.map((section, sectionIndex) => {
                            console.log("Rendering section ",sectionIndex, " with ",section);
                            return (
                                <div className='col-md-6' key={sectionIndex}>
                                    {section.map((field, i) => {
                                        return <Field 
                                           {...field}
                                           key={i}
                                           value={this.props.values[field.name]}
                                           name={field.name}
                                           onChange={this.props.handleChange}
                                           onBlur={this.props.handleBlur}
                                           touched={(this.props.touched[field.name])}
                                           errors={this.props.errors[field.name]}
                                        />
                                    })}
                                </div>
                            )
                        })}
                    </div>
                   
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                     
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase enabled" 
                        id="submitButton" 
                        type="submit"
                        onClick={e => this.submitForm(e)}
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

export default withFormik({
    mapPropsToValues : () => ({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "C'mon bro, enter a longer name").required("Please enter your name"),
        email: Yup.string().email("Enter correct email format").required("Please enter a valid email address"),
        phone: Yup.string().min(10,"Enter a valid phone number").max(15,"Enter a valid phone number").required(
            "Enter a valid phone number"
        ),
        message: Yup.string().min(50, "Message should be at least 50 words").required()
    }),
    handleSubmit : (values, {setSubmitting}) => {
        console.log('The values', JSON.stringify(values));
    }
})(Contact);