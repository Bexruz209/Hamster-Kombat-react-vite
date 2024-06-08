import img from "../../assets/Header/36.png"
import img_1 from "../../assets/Header/34.png"
import imm from "../../assets/Header/00.jpg"
import logo from "../../assets/Header/logo.png"
import logo2 from "../../assets/Header/logo2.webp"
import { useState } from 'react'
import "./Header.css"

export default function Header() {
  const [count, setCount] = useState(0)
  return (
    <div className='Heder'>
      <div className="page">
        <div className="page_smoll">
          <div className="page__smoll">
            <p className='page_smoll_p'>Earn per tap</p>
            <div className="page__smol">
              <img src={img} alt="" className="im" />
              <h1 className="h1">+16</h1>
            </div>
          </div>
          <div className="page__smoll">
            <p className="page_smoll__p">Coins to level up</p>
            <h1 className="h1">50M</h1>
          </div>
          <div className="page__smoll">
            <p className="page_smoll____p">Profit per hour</p>
            <div className="page__smol">
              <img src={img} alt="" className="imgg" />
              <h5 className="h5">+102.04K</h5>
            </div>
          </div>
        </div>
        <div className="time">
          <div className="time_smoll">
            <img src={img} alt="" className="imm" />
            <h1>{count}</h1>
          </div>
        </div>
        <div className="w">
          <img src={img_1} alt="" className="i" />
        </div>
        <div className="out">
          <div className="out_smoll">
            <button className="out_smoll_button" style={{ background: "transparent" }} onClick={() => setCount((count) => count + 1)}>
              <img src={imm} className="out_smoll_img" alt="" />
            </button>
          </div>
        </div>
        <div className="box">
          <div className="box_left">
            <img src={logo} alt="" className="logo"/>
            <p>8000/8000</p>
          </div>
          <div className="box_left">
            <img src={logo2} alt="" className="logo"/>
            <p>Boost</p>
          </div>
        </div>
      </div>
    </div>
  )
}
