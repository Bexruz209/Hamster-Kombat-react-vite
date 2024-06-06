// import { Col, Container, Row } from "react-bootstrap"
import imm from "../../assets/Navbar/user-128.png"
import i from "../../assets/Navbar/1.webp"
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="emmer">
                <div className="emmer_smoll">
                    <div className="emmer_left">
                        <i class="fa-solid fa-x"></i>
                        <h1>Hamster Kombat</h1>
                    </div>
                    <div className="emmer_right">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech_smoll">
                        <div className="tech_left">
                            <img src={imm} alt="" className="img" />
                            <h1>Users</h1>
                        </div>
                        <div className="tech_right">
                            <img src={i} alt="" className="bint"/>
                            <h1>BingX</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
