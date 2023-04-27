import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"
export default function Footer() {
    return (
        <div className="container footer">
            <p>&#169; Copyright Shobeedobee. Website Thougtfully design by {" "}
                <a href="">Ahmrizn</a>
            </p>
            <div className="footer_socials">
                <BsInstagram />
                <BsFacebook />
                <BsTwitter />
            </div>
        </div>
    )
}