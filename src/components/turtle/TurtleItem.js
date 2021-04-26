import './TurtleItem.css';

const CardItem = (props) => {
    return(
        <figure id={props.cardIndex}>
            <img src={props.cardItem} alt={`turtle ` + props.cardNickname}/>
            <figcaption style={{color: props.cardColor}}>This is {props.cardName}</figcaption>
        </figure>
    );
}

export default CardItem;