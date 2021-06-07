import React, { FunctionComponent } from 'react';
import { EducationData, ExperienceData, SkillData, WorkData } from '../ResumeDataTypes';

type ExperienceProps = {
    experience: ExperienceData,
    skills: SkillData[],
}

const Education: FunctionComponent<{ education: EducationData }> = ({ education }) =>
    <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em
            className="date">{education.graduated}</em></p>
        <p>{education.description}</p>
    </div>;

const Work: FunctionComponent<{ work: WorkData }> = ({ work }) =>
    <div key={work.company}><h3>{work.company}</h3>
        <p className="info">{work.title}<span>&bull;</span><em
            className="date">{work.years}</em></p>
        <p>{work.description}</p>
    </div>;

const Skill: FunctionComponent<{ skill: SkillData }> = ({ skill }) =>
    <li key={skill.name}>
        <span style={{ width: skill.level }}
            className={`bar-expand ${skill.name.toLowerCase()}`}/>
        <em>{skill.name}</em>
    </li>;


export const Experience: FunctionComponent<ExperienceProps> = ({experience: {experienceMessage, education, work}, skills}) =>
    <section id="resume">
        <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        {education.map(education => 
                            <Education education={education} key={education.school}/>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
                {work.map(work =>
                    <Work work={work} key={work.company}/>
                )}
            </div>
        </div>

        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
                <p>{experienceMessage}</p>
                <div className="bars">
                    <ul className="skills">
                        {skills.map(skill =>
                            <Skill skill={skill} key={skill.name}/>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </section>;
