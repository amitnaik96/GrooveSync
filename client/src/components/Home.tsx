import { useState } from "react";
import axios from 'axios';
import ListItems from "./ListItems";
import AlertMessage from "./AlertMessage";
import { Avatar } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Home:React.FC = () => {
    interface item {
        videoId: string,
        title: string,
        thumbnail: string
    }

    const [query, setQuery] = useState<string>('');
    const [items, setItems] = useState<item[]>([]);
    const [alert, setAlert] = useState<boolean>(false);

    const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
        if(query === ""){
            setAlert(true);
        }
        else setAlert(false);
        e.preventDefault();
        try {
            const response = await axios.post<item[]>('http://localhost:3000', {search : query}); // local server link
            // const response = await axios.post<item[]>('https://groovesync-server.vercel.app/', {search : query});
            setItems(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error searching videos', error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }


    return ( 
        <div className="main flex flex-col justify-center items-center p-4 mt-5">

            <div className="middle flex justify-center items-center mb-4">
                <div className="home flex flex-col justify-center">
                    <Avatar src="/Logo.jpeg" alt="avatar" size="xxl" variant="rounded" placeholder=""/>
                    <h1 className="font-semibold text-3xl p-4 pl-0">GrooveSync</h1>
                    <p className="tracking-normal pb-4">Unlock the rhythm of YouTube, streaming songs for free!</p>
                        <form className="w-72 pb-4" onSubmit={handleSearch}>
                            <Input label="Enter Song Name" type="text" value={query} onChange={handleChange} placeholder="" crossOrigin="anonymous"/>
                            <Button className="w-24 mt-3" type="submit" placeholder="Search">Search</Button>
                
                        </form>
                </div>
            </div>
            {
                alert && 
                (
                    <div className="alert w-1/2">
                        <AlertMessage />
                    </div>
                )
            }
    
            <div className="items">
                <ListItems items = { items }/>
            </div>
        </div>

     );
}
 
export default Home;