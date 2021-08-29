
import './CardComponent.css';

const CardComponent = (props) => {
    return (
        <div className="card-component">
            <div className="card-component-detail">
                { props.title }
            </div>
        </div>
    )
}

export default CardComponent;