
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './index.css';

const InfiniteLoader = (props) => {
    const [ data, setData] = useState(props.dataSet);
    const [count, setCount] = useState({
        prev: 0,
        next: 40
    });

    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState( data.slice(count.prev, count.next) )
    const getMoreData = () => {
        if (current.length === data.length) {
        setHasMore(false);
        return;
        }
        setTimeout(() => {
        setCurrent(current.concat(data.slice(count.prev + 40, count.next + 40)))
        }, 500)
        setCount((prevState) => ({ prev: prevState.prev + 40, next: prevState.next + 40 }))
    }

    return (
        <InfiniteScroll
            dataLength={current.length} //This is important field to render the next data
            next={getMoreData}
            hasMore={hasMore}
            loader={<img src="https://c.tenor.com/qzuj7-PoJTcAAAAC/loading.gif" width="100" height="100" />}
            key={ current[0].id}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
                </p>
            }
         
            >
            <div className="row">
                {current && current.map(((item, index) => (
                <div key={index} className="_inf-scroll-detail-wrap col-md-4">
                    <ul className="_inf-scroll-detail ">
                        <li>
                            <div style={{ textAlign: 'center', padding: '10px 0'}}>
                                <img src={ item.actor.avatar_url } />
                            </div>
                        </li>
                        <li><b>Name: </b>{ item.actor.login }</li>
                        <li><b>Repo: </b>{ item.repo.name }</li>
                        <li style={{ wordBreak: "break-word"}}>Ref Type : <b><a href={`${  item.repo.url }`} target="_blank" >{ item.repo.url }</a></b></li>
                        <li>Default Branch : <b>{ item.payload.master_branch ? item.payload.master_branch:"None"}</b></li>
                        <li><b>Description : </b>{ item.payload.description? item.payload.description: "Not specified" }</li>
                        <li><b>Pusher Type : </b>{ item.payload.pusher_type? item.payload.pusher_type: "N/A"}</li>

                    </ul>
                </div>
                )))
                }
            </div>
        </InfiniteScroll>
    )
}

export default InfiniteLoader;