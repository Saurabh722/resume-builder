import React from 'react';

import utility from '../../utility/util';

const Head = ({
    name,
    title,
    description,
    socialLinks
}) => {
    return <div className="resume-header">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="social-links">
            <div className="icons-wrapper">
                {
                    socialLinks.map(social => <a href={social.link} className="icon" key={social.name}><img src={utility.getUrl(`/images/icons/${social.icon}.png`)} alt={social.title}/>{social.name}</a>)
                }
            </div>  
        </div>
    </div>;
}

export default Head;