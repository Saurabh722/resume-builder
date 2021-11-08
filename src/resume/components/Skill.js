import React from 'react';

const Skill = ({
    skills
}) => {
    return <div className="right-content">
        {
            skills.map(list =>
                <div key={list.title} className="block-type-2">
                    <h4 className="main-title">{list.title}</h4>
                    {
                        list.items.map((item, idx) => 
                            <div key={item.title ? item.title: `${list.title}-${idx}`} className={`row ${list.type === "badges" ? "skill" : ""}`}>
                                {item.title && <h5>{item.title}</h5>}
                                {
                                    item.list.map(skill => {
                                        if (list.type === "rating") {
                                            return <h5 key={skill.item} className={skill.className}>{skill.item}</h5>
                                        } else if (list.type === "badges") {
                                            return <span key={skill.item} className={skill.className}>{skill.item}</span>
                                        }
                                        return <p key={skill.item} className={skill.className}>{skill.item}</p>;
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            )
        }
    </div>
;
}

export default Skill;