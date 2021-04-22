function CardItem(props) {
    const styleObj = {
        color: props.cardColor,
    }

    return(
        <figure id={props.cardIndex} className="card__item">
            <img src={props.cardItem} alt={`turtle ` + props.cardNickname}/>
            <figcaption style={styleObj}>This is {props.cardName}</figcaption>
        </figure>
    );
}

export default CardItem;