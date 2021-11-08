import React from 'react';

const Detail = ({
    experienceAndEducation
}) => {
    return <div className="left-content">
    <div className="block-type-1">
        {
            experienceAndEducation.map(list => 
                <React.Fragment key={list.title}>
                    <h4 className="main-title">{list.title}</h4>
                    {
                        list.items.map(item => 
                            <React.Fragment key={item.title}>
                                <div className="detail-bock">
                                    <h3>
                                        <span className="block-title">{item.title}</span>
                                        <span className="duration">{item.duration}</span>
                                    </h3>
                                    <h4>{item.subTitle}</h4>
                                    {
                                        item.list && <ul> {
                                            item.list.map((text, idx) => <li key={idx}>{text}</li>)
                                            }
                                        </ul>
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }
                </React.Fragment>
            )
        }
    </div>
</div>
;
}

export default Detail;