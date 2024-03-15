import { useParams } from "react-router-dom";
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player'; // to play youutbe videos
import { Link } from "react-router-dom";
import {Card, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faForward, faPause, faRepeat} from '@fortawesome/free-solid-svg-icons';


// 'https://i.ytimg.com/vi/bkOeoWpefds/hqdefault.jpg' demo url

const Listen:React.FC = () => {
    const { videoId } = useParams();
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef<any>(null);

    //getting url and thumbnail from videoId
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

    return (
        <div className="listen flex justify-center items-center h-full mt-6">
            <Card className="mt-6 w-96 shadow-xl" placeholder="">
                <CardHeader color="blue-gray" className="relative h-65" placeholder="">
                <img
                    src= {thumbnail}
                    alt="card-image"
                />
                </CardHeader>
                <CardBody className="pt-0 pb-0" placeholder="">

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
                            origin: window.location.origin
                            }
                        }
                        }}
                    />
                    <div className="controls flex justify-between">
                        <div className="primary">
                            <button onClick={handleBackward} className="m-3"><FontAwesomeIcon icon={faBackward} /></button>
                            <button onClick={handlePlayPause} className="m-3">
                                {!playing && <FontAwesomeIcon icon={faPlay} />}
                                {playing && <FontAwesomeIcon icon={faPause} />}
                            </button>
                            <button onClick={handleForward} className="m-3"><FontAwesomeIcon icon={faForward} /></button>
                        </div>
                        
                        <div className="secondaryControls">
                            <button onClick={handleRewind} className="m-3"><FontAwesomeIcon icon={faRepeat} /></button>
                        </div>
                    </div>
                </CardBody>
                <CardFooter placeholder="">
                    <div className="home flex flex-col justify-center">
                        <Link to='/'>
                            <Avatar src="/Logo.jpeg" alt="avatar" size="lg" variant="rounded" placeholder=""/>
                            <h1 className="font-semibold text-1xl p-3 pl-0" style={{color: "black"}}>GrooveSync</h1>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>


    );
}

export default Listen;
