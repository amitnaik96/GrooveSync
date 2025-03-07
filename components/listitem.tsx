import Link from "next/link";
import { Item } from './item';
import { titleAtom } from '@/app/store/atoms';
import { useSetAtom } from 'jotai';

interface Props {
    videoId: string;
    title: string;
    thumbnail: string;
};

export const ListItems = ({items}: { items: Props[]}) => {
    const setTitle = useSetAtom(titleAtom);
    return <div>
        {   
            items.map(((item:any) => {
                return <Link 
                            key={item.title}
                            href={`/audios/${item.videoId}`} 
                            onClick={() => {setTitle(item.title)}}
                        >
                            <Item title={item.title} thumbnail={item.thumbnail} />
                       </Link>
            }))
        }
    </div>
}