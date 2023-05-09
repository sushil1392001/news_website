import React from "react";
import PropType from 'prop-types'
export default function Post_story_props(props) {
    return (
        <>
            <div className="post">
                <div>
                    <div className="Post_Image">
                        <div>
                            <img src={props.url} />
                        </div>
                        <div>
                            <h4>{props.Name}</h4>
                            <p>{props.Location}</p>
                        </div>
                        <div>
                            <button className="post_button"><i className="material-icons">more_horiz</i></button>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="post_image" id="sushil">
                        <img src="" />
                    </div>
                </div>
                <div>
                    <div className="icon">
                        <div className="icon_write">
                            <div className="icon1">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                                <i className="material-icons">mode_comment</i>
                                <i className="material-icons">send</i>
                            </div>
                            <div>
                                <i className="material-icons">more_horiz</i>
                            </div>
                            <div>
                                <i className="material-icons">bookmark</i>
                            </div>
                        </div>
                        <div className="write">
                            <div>
                                <h4>{props.count} likes</h4></div>
                            <div>
                                <div><h4>{props.Name}</h4> Every moment is a fresh beginning.</div>
                            </div>
                            <div style={{ color: "gray" }}> View all 33 comments</div>
                            <div style={{ color: "gray" }}>4 day ago</div>
                        </div>
                        <div className="comment">
                            <div><i className="material-icons">sentiment_satisfied</i></div>
                            <div><input type="text" placeholder="Add a comment..." /></div>
                            <div><button className="button">post</button></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}