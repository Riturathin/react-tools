import { useEffect, useState } from "react";
import InfiniteLoader from '../infinite-loader';
import NonInfiniteLoader from '../non-infinite-loader';

const LargeJSONComponent = () => {

    const [ data, setData] = useState([]);

    const getDataSet = async () => {
        // const response = await fetch( "http://api.nobelprize.org/v1/prize.json" );
        debugger
        const response = await fetch( "https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json" );
        const data  = await response.json();
        setData(data);
        console.log( data )
    }

    
    useEffect(() => {
        getDataSet();
    }, []);

    

    return ( 
        <div className="row">
            { data.length >0 && <InfiniteLoader key={data} dataSet={ data }/> }
            {/* { data.length >0 && <NonInfiniteLoader dataSet={ data }/> } */}
        </div>
    )
}

export default LargeJSONComponent ;