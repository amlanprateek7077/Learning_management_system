import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/footer.css"
import {Link } from "react-router-dom";
import {  faFacebook, faLinkedin, faInstagram, faTwitter,faYoutube, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"



export default () => {

    const [contact, setContact] = useState("")
    const handleSubmit = () => {
        axios.post("contact", {contact})
        toast("Submitted")
    }

    return (
        <footer>
            <div className="footer">
                <div className="about">
                    <h1><img src={`/logo.png`} />Edu<span>Web</span></h1>
                    <p>© 2024 EduWeb. All rights reserved. Empowering minds, one course at a time. Connect with us on social media for updates and exclusive content. Have questions? Reach out to our support team anytime.</p>
                    <div className="contact">
                        <p><span>Call:</span> +91 8249744319</p>
                        <p><span>Email:</span> info@eduweb.com</p>
                    </div>

                </div>
                <div className="about1">
                    <h3>Online Platform</h3>
                    <p><Link to="/about">About</Link></p>
                    <p><a href="">Home</a></p>
                </div>
                <div className="about1">
                    <h3>Links</h3>
                    <p><Link to="/contact">Contact</Link></p>
                    <p><Link to={`/login/student`}>Student Login</Link></p>
                    <p><Link to={`/login/teacher`}>Teacher Login</Link></p>
                </div>
                <div className="about2">
                    <h3>Contacts</h3>
                    <p>Enter Your contact No. To Subcribe<br />EduWeb subscription</p>
                    <input type="email" placeholder="Your contact No. or @Mail" onChange={(e) => setContact(e.target.value)}/>
                    <button onClick={handleSubmit}>Subscribe <i className="fa-solid fa-arrow-right"></i></button>
                    <div className="media-icons">
                        <a href="">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="">
                        <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}