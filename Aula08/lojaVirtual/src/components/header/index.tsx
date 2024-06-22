import './styles.css'
import imagem1 from '../../assets/img/image1.png'


const Header = () => {
    return <header className="header">
        <div className="logo">
            <img src={imagem1} alt="logoArnia" />
        </div>
        <div className="title">Loja Virtual</div>

    </header>;
}

export default Header