import React, { FunctionComponent } from 'react';
import { ProjectData } from '../ResumeDataTypes';

type PortfolioProps = {
    projects: ProjectData[],
}

const Project: FunctionComponent<{ info: ProjectData }> = ({ info }) =>
    <div key={info.title} className="columns portfolio-item">
        <div className="item-wrap">
            <a href={info.url} title={info.title}>
                <img alt={info.title} src={`images/portfolio/${info.image}`}/>
                <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{info.title}</h5>
                        <p>{info.tagline}</p>
                    </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"/></div>
            </a>
        </div>
    </div>;

export const Portfolio: FunctionComponent<PortfolioProps> = ({ projects }) =>
    <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {projects.map(project => <Project info={project} key={project.title}/>)}
                </div>
            </div>
        </div>
    </section>;
