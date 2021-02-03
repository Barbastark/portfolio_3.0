import React from "react"

const SocialLink = ({link, icon}) => {
    return (
        <li>
            <a href={link} target="_blank">
                <i className={icon}></i>
            </a>
        </li>
    )
}

export default SocialLink