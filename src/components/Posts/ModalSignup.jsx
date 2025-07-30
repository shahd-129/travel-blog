import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignUp from '../../auth/signUp';
export default function ModalSignup({open , onClose}) {
  return (
     <Box>

      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <SignUp />
      </Modal>
    </Box>
  )
}


