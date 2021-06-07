import React, { FunctionComponent } from 'react';
import { SocialData } from '../ResumeDataTypes';

export const Socials: FunctionComponent<{ socials: SocialData[] }> = ({ socials }) => <React.Fragment>
    {socials.map(network =>
        <li key={network.name}>
            <a href={network.url}>
                <i className={network.className}/>
            </a>
        </li>
    )}
</React.Fragment>;
