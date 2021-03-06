import React, { FunctionComponent } from 'react';
import Typist from 'react-typist';
import { RestartingTypist } from './RestartingTypist';
import { BasicData, SocialData } from '../ResumeDataTypes';
import { Socials } from './Socials';
import 'react-typist/dist/Typist.css';

type HeaderProps = {
    basic: BasicData,
    socials: SocialData[],
}

export const Header: FunctionComponent<HeaderProps> = ({ basic, socials }) => <header id="home">
    <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Works</a></li>
            {/*<li><a href="#testimonials">Testimonials</a></li>*/}
            {/*<li><a href="#contact">Contact</a></li>*/}
        </ul>
    </nav>

    <div className="row banner">
        <div className="banner-text">
            <h1 className="responsive-headline">Hey. I'm {basic.name.first}.</h1>
            <h3>I'm a {basic.location.city}-based
                <RestartingTypist avgTypingDelay={30} cursor={{blink: true}}>
                    {basic.identities.map(identity =>
                        <span style={{ display: 'inline' }} key={identity}>
                            {identity}
                            <Typist.Delay ms={4000}/>
                            <Typist.Backspace count={identity.length}/>
                        </span>
                    )}
                </RestartingTypist>
            </h3>
            <h3>
                {basic.description}
            </h3>
            <hr/>
            <ul className="social">
                <Socials socials={socials}/>
            </ul>
        </div>
    </div>

    <p className="scrolldown">
        <a href="#about"><i className="icon-down-circle"/></a>
    </p>

</header>;
