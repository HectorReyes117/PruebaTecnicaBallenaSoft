import {
  Table, TableBody,TableCell,TableContainer,
  TableHead,TableRow,Paper,Box,IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UseOpen from '../../hooks/useOpen';
import { Modalc } from '../ModalC/ModalC';
import { useApi } from '../../hooks/useApi';
import {  Data } from '../../interfaces/IApi';


export const TableData : React.FC = () : JSX.Element => {
  

  const { data} = useApi();
  
  const {open, handleClose, open2, handleClose2, haddleOpenFuntion, haddleOpenFuntion2, id} = UseOpen();

  return (
   <div>
     <Box display='flex' justifyContent='start'>
       <TableContainer component={Paper} sx={{maxWidth: 1000, marginTop: 3}}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table" >
           <TableHead>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell align="right">Comission</TableCell>
               <TableCell align="right">State</TableCell>
               <TableCell align="right">Actions</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
            {
               data?.data.map((item: Data) => (
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key ={item.id}>
                <TableCell component="th" scope="row">{item.name}</TableCell>
                <TableCell align="right">{ item.commission }</TableCell>
                <TableCell align="right">{ item.state ? 'Active' : 'Inactive' }</TableCell>
                <TableCell align="right">
                <IconButton aria-label="delete" size="large" name= 'delete' onClick={(e) => haddleOpenFuntion2(parseInt(e.currentTarget.id))} id= {`${item.id}`}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit"  onClick={(e) => haddleOpenFuntion(parseInt(e.currentTarget.id))} name= 'edit' size="large"  id= {`${item.id}`}>
                   <EditIcon />
                </IconButton>
                </TableCell>
              </TableRow>
               ))
            }
           
           </TableBody>
         </Table>
       </TableContainer>
     </Box>
     <Modalc open={open} handleClose={handleClose} type='edit' data={data} id={id}></Modalc>
     <Modalc open={open2} handleClose={handleClose2} type='delete' id={id}></Modalc>
   </div>
  )
}
