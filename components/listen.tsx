"use client";
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'next/navigation';
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react'
import { Repeat } from 'lucide-react';
import { titleAtom } from '@/app/store/atoms';
import { useAtomValue } from 'jotai';


export default function Listen({params} : any) {
    const { videoId } = useParams();
    const [ playing, setPlaying ] = useState<boolean>(false);
    const playerRef = useRef<any>(null);
    const title = useAtomValue(titleAtom); 


    const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    const url = `https://www.youtube.com/watch?v=${videoId}`

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10); // Forward 10 seconds
    };

    const handleBackward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10); // Backward 10 seconds
    };

    const handleRewind = () => {
        playerRef.current.seekTo(0); // Seek to the start of the audio
    };

    return <div className="flex justify-center mt-20">
        <div className="flex flex-col justify-center">
            <div className="card w-80 sm:w-auto border border-slate-300 rounded-lg shadow-sm p-4">
                <div className="card-header mt-4">
                    <img className="w-80 sm:w-96 border rounded-sm" src={thumbnail} alt="" />
                    <div className="flex justify-center p-4 font-semibold text-md">
                        {title.slice(0,30)}
                    </div>
                </div>
                <div className="card-body">
                    <ReactPlayer
                            ref={playerRef}
                            url={url}
                            playing={playing}
                            controls={true}
                            width="0%" 
                            height="0px" // Set it to zero so no video plays
                            config={{
                            youtube: {
                                playerVars: {
                                controls: 0,
                                disablekb: 1,
                                modestbranding: 1,
                                origin: window?.location.origin
                                }
                            }
                            }}
                    />

                    <div className="flex">
                        <div className="ml-18 sm:ml-30">
                            <button onClick={handleBackward} className="m-3"><SkipBack fill="black"/></button>
                            <button onClick={handlePlayPause} className="m-3">
                                {!playing && <Play fill="black"/>}
                                {playing && <Pause fill="black"/>}
                            </button>
                            <button onClick={handleForward} className="m-3"><SkipForward fill="black"/></button>
                        </div>
                        
                        <div className="ml-auto">
                            <button onClick={handleRewind} className="m-3"><Repeat/></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}

