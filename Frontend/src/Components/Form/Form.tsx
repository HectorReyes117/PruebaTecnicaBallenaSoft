import { TextField, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useForm } from "../../hooks/useForm";
import { ButtonC } from '../Button/ButtonC';
import { useApi } from "../../hooks/useApi";

interface Props {
  handleClose: () => void;
}

export const Form : React.FC<Props> = (props) : JSX.Element => {

  const { handleClose } = props;
  const { onInputChange, formState } = useForm("",0);
  const { name, commission} = formState;
  const { post } = useApi();
  const insert = () =>{
    if(regularExpression.test(name) && commission > 0 && commission < 0.25){
      post(formState)
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
        error = {
          regularExpression.test(name) ? false : true
        }
        helperText = {
          regularExpression.test(name) ? "" : "Minimo 1 caracter y Maximo 45 caracteres"
        }
        name="name"
        onChange={onInputChange}
        value={name}
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
            defaultValue={false}
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
        <ButtonC variant="contained" text="Send" isEndIcon={true} onclick ={ insert}></ButtonC>
      </div>
      
    </div>
  )
}
