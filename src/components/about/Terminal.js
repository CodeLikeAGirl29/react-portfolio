import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

function Terminal(props) {
   const {text} = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
           width={{xs: '80%', md: '50%'}} borderRadius={'0.5rem'} mb={'3.6rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
  
         </Box>
         <Box py={{xs: '0.7rem', md: '1.5rem'}} px={{xs: '1.7rem', md: '1.5rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: '#27242f'}} fontSize={'1.3rem'} fontFamily={'Poppins, sans-serif'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;