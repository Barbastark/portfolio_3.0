import React from "react"

const Footer = props => {

    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer id="footer">
            <section>
              <ul>
                  <li>
                      <a href="https://www.linkedin.com/in/niklas-lindberg-4695b659/" target="_blank">
                          <i className="fa fa-linkedin fa-4x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/Barbastark?tab=repositories" target="_blank">
                          <i className="fa fa-git fa-4x"></i>
                      </a>
                  </li>
              </ul>
          </section>
          <section>
              <ul>
                 <li>
                     <p>
                         <strong>
                             <i className="fa fa-envelope"></i> Email:
                        </strong> 
                        <a href="mailto:niklas.lindb3rg@gmail.com" target="_blank">
                            niklas.lindb3rg@gmail.com
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