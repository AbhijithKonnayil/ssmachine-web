import React, { Component } from 'react';
import WhyUsItem from './WhyUsItem';
import '../css/why-us-section.css';
class WhyUsSection extends Component {
    render() {
        return (

            <div class="why-us-area black-bg section-padding">
                <div class="container">
                    <div class="row">
                        <div className="section-title col-12">
                            <span>Why US?</span>
                            <p className="para-text">
                                {this.props.description}
                            </p>
                        </div>

                        <div className="col-12">
                            <WhyUsItem index="0" title="Affordable & Reliable"
                                description="We try to fix first and would only replace when it’s really required." />
                            <WhyUsItem index="3" title="Transparent Service"
                                description="Freedom to choose the type of service or spares you would like." />
                            <WhyUsItem index="1" title="Personalized Attention"
                                description="We listen to your problems first and will provide you the right advice to fix your car." />
                            <WhyUsItem index="2" title="Highest Customer Satisfaction"
                                description="We are flexible, committed and that’s why we have the highest ratings on Google." />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WhyUsSection;