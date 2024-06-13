import './style.css'

const Button = ({ label }) => {
  const handleClick = () => {
    alert(label);
  };
  return (
      <button  onClick={handleClick}>
        {label}
      </button>
  );
};

export default Button;
