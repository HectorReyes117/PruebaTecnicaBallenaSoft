import { Box, Button } from "@mui/material"
import { useApi } from '../../hooks/useApi';

interface Props {
  handleClose: () => void;
  id?: number;
}

export const Message : React.FC<Props> = (props) : JSX.Element => {
const {handleClose, id} = props;
const { deleteInsu } = useApi();

const deleteInsurance = () => { 
  deleteInsu(Number(id)) 
  handleClose();
 }


  return (
    <div>
       <Box display='flex' justifyContent='center'>
            <p>¿Esta Seguro que desea Eliminar la Insurance?</p>
          </Box>
         <Box display='flex' justifyContent='center'>
           <Button variant='contained' color='primary' size='medium' onClick={deleteInsurance}>Aceptar</Button>
           <Button variant='contained' color='secondary' size='medium' onClick={handleClose} sx={{marginLeft: 2}}>Cancelar</Button>
         </Box>
    </div>
  )
}
