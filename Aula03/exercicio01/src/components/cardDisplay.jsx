import './styles.css'
const cardDisplay = ({title, subtitle, text, linkCard, anotherLink}) => {
    return (
      <>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        <a href={linkCard}>LinkCard</a>
        <a href={anotherLink}>AnotherLink</a>
      </div>
      </>
    )
  }

export default cardDisplay