import "./styles/Card.css"
const Card = (props) => {
    return (
        <div className="Card">
        <button className='CardButton'onClick={() => props.handleClick(props.Egg.id)}>
        <img src={props.Egg.img} alt='' className='CardImg'/>
            <h2>{props.Egg.name}</h2>
        </button>
        </div>
        
    )
}


export default Card;