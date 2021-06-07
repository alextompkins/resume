import React, { FunctionComponent } from 'react';
import { BasicData } from '../ResumeDataTypes';

type AboutProps = {
    basic: BasicData
}

export const About: FunctionComponent<AboutProps> = ({ basic }) => <section id="about">
    <div className="row">
        <div className="three columns">
            <img className="profile-pic" src={basic.profilePicPath} alt="Alex Tompkins Profile Pic"/>
        </div>
        <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{basic.bio}</p>
            <div className="row">
                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="location">
                        <span>{basic.name.first} {basic.name.last}</span><br/>
                        <span>{basic.location.city}, {basic.location.country}</span><br/>
                        <span>{basic.phone}</span><br/>
                        <span><a href={`mailto: ${basic.email}`}>{basic.email}</a></span>
                    </p>
                </div>
                <div className="columns download">
                    <p>
                        <a href={basic.pdfUrl} className="button"><i className="fa fa-download"/>Download Resume</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>;
