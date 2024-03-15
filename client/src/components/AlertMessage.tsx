import { Alert } from "@material-tailwind/react";

const AlertMessage:React.FC = () => {
    return (    
        <Alert variant="outlined">
            <span>Search for a song, mate!!</span>
        </Alert>);
}

export default AlertMessage;