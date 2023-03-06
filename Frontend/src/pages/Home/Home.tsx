import React from 'react'
import { ButtonC } from '../../Components/Button/ButtonC';
import { Modalc } from '../../Components/ModalC/ModalC';
import { Nav } from '../../Components/Nav/Nav';
import { TableData } from '../../Components/Table/TableData';
import useOpen  from '../../hooks/useOpen';

export const Home : React.FC = (): JSX.Element => {

  const {open, handleClose, handleOpen} = useOpen(); 
  
  return (
    <div>
      <Nav text='INSURANCES'></Nav>
      
      <ButtonC variant='contained' text='Add Insurance' onclick={handleOpen} color='primary' size='medium'></ButtonC>
      <Modalc open = {open} handleClose={handleClose} type='create'></Modalc>

      <div className='table'>
          <TableData></TableData>
      </div>
    </div>
  )
}

