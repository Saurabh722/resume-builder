import React, { Component } from "react";

import Head from './components/Head';
import Detail from './components/Detail';
import Skill from './components/Skill';
import resume from './resume';

// styles
import './index.scss'; 

class Resume extends Component {
    render() {
        return  (
            <div className="darkpiece-resume">
                <button className="print-btn" onClick={window.print} title="Print this page"></button>
                <div className="resume-container">
                    <Head {...resume}></Head>
                    <div className="resume-body">
                        <Detail experienceAndEducation={resume.experienceAndEducation}/>
                        <Skill skills={resume.skills}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;