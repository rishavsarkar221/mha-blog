import React from 'react';

const Contents = (props) => {
    return(
        <React.Fragment>
            <div className="matches">
                <img className="content_image" src={props.content_image} alt={props.alt}/>
                <h2 className="content_title">{props.content_title}</h2>
                <span className="content">{props.content}</span>
            </div>
        </React.Fragment>
    )
}

export default Contents;