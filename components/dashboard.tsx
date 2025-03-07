"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios';
import { AlertComponent } from '@/components/alert';
import {ListItems} from '@/components/listitem';


interface Item {
    videoId: string;
    title: string;
    thumbnail: string;
}

export const Dashboard = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [alert, setAlert] = useState(false);


    async function search(){
        if(query === ""){
            setAlert(true);
        }
        else setAlert(false);
        
        try{    
            const response = await axios.post('/api/songs', { query});
            setItems(response.data.videos);
            console.log(response.data);
        } catch (err) {
            console.log(`${err}`);
        }
    }

    return <div className="flex h-screen justify-center">
                <div className="flex flex-col justify-center">
                    <div className="w-80 sm:w-auto">
                        <div className="flex justify-center">
                            <div className="mb-3 h-48 w-64">
                                <img className="border rounded-lg" src="/cover.gif" alt="Logo" />
                            </div>
                        </div>
                        <div className="font-bold text-3xl sm:text-4xl mb-2 flex justify-center">Groove<span className="text-orange-500 font-bold">Sync</span></div>
                        <div className="mb-6">Unlock the rhythm of YouTube, streaming songs for free!</div>
                        <Input className="mb-3 border rounded-md" placeholder="Enter Song Name" onChange={e => setQuery(e.target.value)}/>
                        <div className="flex justify-center">
                            <Button
                             onClick={() => search()}
                             className="w-32 mb-3 border rounded-md">Search</Button>
                        </div>
                        { alert && <AlertComponent/>}
                        <div>
                            <ListItems items={items}/> 
                        </div>
                    </div>
                </div>
           </div>
}