import React from "react"
import {footerData} from "../mock_data/mockData"
import SocialLink from "./footer_components/SocialLink" 

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    
    const {mailIcon, mailTo, email, socialLinks: links} = footerData
    
    const socialLinks = links.map(({key, link, icon}) => (
        <SocialLink 
            key={key} 
            link={link} 
            icon={icon}  
        />
    ))
    
    return(
        <footer className="site-footer">
            <section>
              <ul>
                  {socialLinks}
              </ul>
          </section>
          <section>
              <ul>
                 <li>
                     <p>
                        <strong>
                             <i className={mailIcon}></i> Email:
                        </strong> 
                        <a href={mailTo} target="_blank">
                            {email}
                        </a>
                    </p>
                </li>
              </ul>
          </section>
          <section>
              <p>&copy; {year} Design by Niklas Lindberg</p>
          </section>
    </footer>
    )
}

export default Footer