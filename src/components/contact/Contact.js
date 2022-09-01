import React, { useState } from "react";
import './Contact.module.scss';
import {Box} from '@mui/material'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/34970600-2a01-11ed-a7a0-3f26160640a2"; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
               <h1>Contact Me</h1>
               <p>Lets create something together!</p>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send it! </button>
      </div>
    </form>
    </Box>
  );
};

export default Contact;