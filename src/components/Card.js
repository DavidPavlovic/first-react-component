import CardItem from './CardItem';

function Card(props) {
    return(

        <div className="card">
            {
                props.turtlesArr.map((item, index) => {
                    return(
                        <CardItem
                            key={index}
                            cardItem={item.img}
                            cardIndex={item.id}
                            cardName={item.name}
                            cardNickname={item.nickname}
                            cardColor={item.color}/>
                    )
                })

            }
        </div>
    );
}

export default Card;