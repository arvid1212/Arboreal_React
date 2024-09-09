import React from "react";
import "./Embed.css";
import PropTypes from "prop-types";
import { dividerClasses } from "@mui/material";

const YoutubeEmbed = ({embedId}) => (

<div className="video-responsive" >

    <iframe
    
    width="853"
    height ="430"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"

    
    />




</div>




);
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;