import img from "../../assets/Header/9.png"
import "./Header.css"

export default function Header() {
  return (
    <div className='Heder'>
      <div className="page">
        <div className="page_smoll">
          <div className="page__smoll">
            <p className='page_smoll_p'>Earn per tap</p>
            <div className="page__smol">
              <img src={img} alt="" className="imgg" />
              <h1 className="h1">+16</h1>
            </div>
          </div>
          {/* <div className="page_smoll">
            <p className="page_smoll__p">Coins to level up</p>
          </div>
          <div className="page_smoll">
            <p className="page_smoll____p">Profit per hour</p>
            <div className="page__smoll">
              <img src={img} alt="" className="imgg" />=
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
