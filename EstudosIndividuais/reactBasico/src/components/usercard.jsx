import "./style.css";

const UserCard = ({ name, age, email }) => {
    return (
        <div className="user-card">
  <div className="compDiv">
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h3>{email}</h3>
  </div>;
  </div>
  );
};

export default UserCard;
