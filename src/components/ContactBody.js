import React, { Component } from 'react';
import '../css/contact.css'
import axios from 'axios';

class ContactBody extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: '',
        }
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <iframe width="680" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.ae/maps?sll=25.241286,55.363288&amp;sspn=0.007453,0.0109864&amp;cid=4732508519836095240&amp;q=Seven+Seas+Machinery&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=25.241286,55.363288&amp;spn=0.006295,0.006295&amp;output=embed"></iframe>
                        <br />
                        <small>
                            <a href="https://maps.google.ae/maps?sll=25.241286,55.363288&amp;sspn=0.007453,0.0109864&amp;cid=4732508519836095240&amp;q=Seven+Seas+Machinery&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=25.241286,55.363288&amp;spn=0.006295,0.006295&amp;source=embed" target="_blank">
                                Click Here to View Full Screen
                                </a>
                        </small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form action="https://formspree.io/moqlwegj" method="post"
                            class="form-contact contact_form" onSubmit={this.submitForm}
                            enctype="text/plain" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter Message'"
                                            placeholder="Enter your Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter your name'"
                                            placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="phone" id="phone" type="text"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter your Phone'"
                                            placeholder="Enter your Phone" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter email address'"
                                            placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter Subject'"
                                            placeholder="Enter Subject"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                {status === "SUCCESS" ? <p>Thanks! </p> : <input type="submit" class="boxed-btn" />}
                                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>P.O. Box: 36796</h3>
                                <p> Dubai - U.A.E.</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+971 4 2858758</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>info@ssmachin.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ContactBody;