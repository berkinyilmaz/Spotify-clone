import React from "react";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material-next/Slider';



import "./Footer.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function Footer() {

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

 return(

    //https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg
        <div className="footer">

            <div className="footer__left">
                <img className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d0000b273f2d2010c33473f24d1446284" alt=""/>
                <div className="footer__songInfo">
                    <h4>Toprak Yağmura</h4>
                    <p>Canozan</p>
                </div>
            </div>


            
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>

            </div>
                                  
            <div className="footer__right">

                    <Box sx={{ width: 450 }}>
                        <Stack spacing={3} direction="row" sx={{ mb: 1 }} alignItems="center" justifyContent={"right"}>
                        <PlaylistPlayIcon />
                        <VolumeDownIcon />
                            <Slider sx={{
                                    '& .MuiSlider-thumb': {
                                        color: "white"
                                    },
                                    '& .MuiSlider-track': {
                                        color: "#1ed15e"
                                    },
                                    '& .MuiSlider-rail': {
                                        color: "yellow"
                                    },
                                    '& .MuiSlider-active': {
                                        color: "yellow"
                                    }
                            }} 
                            aria-label="Volume"
                            value={value}
                            onChange={handleChange} 

                            />
                        </Stack>
            
                    </Box>


            </div>         
        </div>
 );
}

export default Footer;