import React from "react";
import PropType from 'prop-types'
export default function Side_menu(props) {
    return (
        <>
            <div className="Image">
                <img src={props.url}/>
                 <p title={props.title}>{props.name}</p>
            </div>
        </>
    )
}
