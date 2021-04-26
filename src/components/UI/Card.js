import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    const id = '' + props.id;

    return(
        <div className={classes} id={id}>
           {props.children}
        </div>
    );
}

export default Card;