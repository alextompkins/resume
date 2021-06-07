import React, { FunctionComponent } from 'react';
import { BasicData, SocialData } from '../ResumeDataTypes';
import { Socials } from './Socials';

type FooterProps = {
    basic: BasicData,
    socials: SocialData[],
}

export const Footer: FunctionComponent<FooterProps> = ({ basic, socials }) => <footer>
    <div className="row">
        <div className="twelve columns">
            <ul className="social-links">
                <Socials socials={socials}/>
            </ul>

            <ul className="copyright">
                <li>&copy; Copyright 2021 {basic.name.first} {basic.name.last}</li>
                <li>Design by <a title="Styleshout" href="https://www.styleshout.com/">Styleshout</a></li>
            </ul>

        </div>
        <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"/>
            </a>
        </div>
    </div>
</footer>;
