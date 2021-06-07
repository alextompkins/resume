import React, { FunctionComponent } from 'react';
import { TestimonialData } from '../ResumeDataTypes';

export const Testimonials: FunctionComponent<{ testimonials: TestimonialData[] }> = ({ testimonials }) =>
    <section id="testimonials">
        <div className="text-container">
            <div className="row">

                <div className="two columns header-col">
                    <h1><span>Client Testimonials</span></h1>
                </div>

                <div className="ten columns flex-container">
                    <ul className="slides">
                        {testimonials.map(function (testimonials) {
                            return <li key={testimonials.author}>
                                <blockquote>
                                    <p>{testimonials.text}</p>
                                    <cite>{testimonials.author}</cite>
                                </blockquote>
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </section>;
