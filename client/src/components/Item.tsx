interface ItemProps {
    videoId: string,
    title: string,
    thumbnail: string
}

const Item:  React.FC<ItemProps> = (props) => {
    return ( 
        <div className="parentItem flex justify-center items-center m-3 hover:shadow-md hover:opacity-85 shadow-md">
            <div className="item w-3/4 flex justify-around">
                <img src={props.thumbnail} alt="Error loading img" className="h-32 w-48 rounded-md mr-5"/>
                <div className="flex items-center w-1/2 ">
                    <p className="text-sm font-extralight tracking-wide">{props.title}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Item;