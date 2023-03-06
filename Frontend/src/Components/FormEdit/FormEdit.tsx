import { TextField, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useForm } from "../../hooks/useForm";
import { ButtonC } from '../Button/ButtonC';
import { useApi } from "../../hooks/useApi";
import { Response } from "../../interfaces/IApi";
import UseOpen from '../../hooks/useOpen';


interface Props {
  id?: number;
  data?: Response;
  handleClose: () => void;
}

export const FormEdit : React.FC<Props> = (props) : JSX.Element => {
  const {id, data, handleClose} = props;
  const dataEditar = data?.data.find((item) => item.id === id);
  const { onInputChange, formState } = useForm(dataEditar?.name, dataEditar?.commission);
  const { name, commission} = formState;
  const {  put } = useApi();
  const update = () => {
    if(regularExpression.test(name) && commission > 0 && commission < 0.25) {
      put(formState, Number(id));
      handleClose();
    }
  }
  
  const regularExpression = /^[\s\S]{1,46}$/;

  return (
    <div className="formulario">

      <TextField 
        sx={{marginTop: 5}}
        size='small'
        id="outlined-error-helper-text"
        label="Name"
        name="name"
        onChange={onInputChange}
        value={name}
        error = {
          regularExpression.test(name) ? false : true
        }
        helperText = {
          regularExpression.test(name) ? "" : "Minimo 1 caracter y Maximo 45 caracteres"
        }
      />

      <TextField
        size='small'
        sx={{marginTop: 2}}
        id="outlined-error-helper-text"
        label="Comission"
        name="commission"
        onChange={onInputChange}
        value={commission}
        error = {
          commission > 0 && commission < 0.26 ? false : true
        }
        helperText = {
          commission > 0 && commission < 0.26 ? "" : "Minimo 0 y Maximo 0.25"
        }
        />

      <div className="radios">
        <FormControl sx= {{marginTop: 4}}>
          <FormLabel id="demo-radio-buttons-group-label">State</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={dataEditar?.state}
            name="state"
            onChange={onInputChange}
          >
           <Box display='flex'>
             <FormControlLabel value={true} control={<Radio />} label="Active" />
             <FormControlLabel  value={false} control={<Radio />} label="Inactive"  />
           </Box>
          </RadioGroup>
        </FormControl>
      </div>

      <div className="button">
        <ButtonC variant="contained" text="Send" isEndIcon={true} onclick ={update}></ButtonC>
      </div>
    </div>
  )
}
