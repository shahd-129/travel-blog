import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Login from '../../auth/Login';

export default function ModalAuth({ open, onClose }) {

  return (
    <Box>

      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <Login />
      </Modal>
    </Box>
  );
}
