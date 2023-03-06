import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Form } from '../Form/Form';
import { Nav } from '../Nav/Nav';
import { Message } from '../Message/Message';
import { Response } from '../../interfaces/IApi';
import { FormEdit } from '../FormEdit/FormEdit';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

interface Props {
  open: boolean;
  handleClose: () => void;
  type?: 'edit' | 'create' | 'delete';
  id?: number;
  data?: Response;
}

export const Modalc : React.FC<Props> = (props) : JSX.Element => {

  const {open, handleClose, type, id, data} = props;

  return (
    <> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            type === 'create' ?   <div><Nav text='Create Insurance'></Nav> <Form handleClose={handleClose}></Form></div> 
          : type === 'edit' ? <div><Nav text='Edit Insurance'></Nav> <FormEdit id={id} data = {data} handleClose = {handleClose}></FormEdit></div> 
          : type === 'delete' ? <Message handleClose={handleClose} id={id}></Message> : null
          }                   
        </Box>
      </Modal>
    </>
  )
}
