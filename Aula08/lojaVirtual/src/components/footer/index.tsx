import './styles.css'

const Footer = () => {
    return (
        <div className='container'>
        <footer className="footer">
            <span>Meios de pagamento:</span>
            <div className="payment-icons">
                <img src="https://img.icons8.com/color/48/000000/visa.png"/>
                <img src="https://img.icons8.com/color/48/000000/mastercard.png"/>
                <img src="https://img.icons8.com/color/48/000000/paypal.png"/>
            </div>
        </footer>
        </div>
    );
};

export default Footer