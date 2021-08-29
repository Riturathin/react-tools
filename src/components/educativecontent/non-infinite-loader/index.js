

const NonInfiniteLoader = (props) => {
    return (
        
            <div className="row">
                
                {props.data && props.data.map(((item, index) => (
                <ul key={index} className="nobel-prize-details col-md-4">
                    <li>{ item.year }</li>
                    <li>{ item.category } </li>
                </ul>
                )))
                }
            </div>
     
    )
}

export default NonInfiniteLoader;