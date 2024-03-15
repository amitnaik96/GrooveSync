import Item from "./Item";
import { Link } from "react-router-dom";

interface item {
    videoId: string,
    title: string,
    thumbnail: string
}

interface ListItemsProps {
    items: item[];
}

const ListItems: React.FC<ListItemsProps> = (props) => {
    return (  
        <div className="listItems">
            {
                props.items.map((item => {
                   return   <Link to = {`/audios/${item.videoId}`}>
                                <Item videoId={item.videoId} title={item.title} thumbnail={item.thumbnail}/>
                            </Link>
                }))
            }
        </div>
    );
}
 
export default ListItems;