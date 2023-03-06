import { useState } from "react"


 interface IuseOpen {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  handleOpen2: () => void;
  handleClose2: () => void;
  open2: boolean;
  haddleOpenFuntion :(event: any) => void;
  haddleOpenFuntion2: (id: number) => void;
  id: number
}

const UseOpen = () : IuseOpen => {

  const [id, setId] = useState<number>(0);

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () : void => setOpen(true);
  const handleClose = () : void => setOpen(false);

  const [open2, setOpen2] = useState<boolean>(false);
  const handleOpen2 = () : void => setOpen2(true);
  const handleClose2 = () : void => setOpen2(false);

  const haddleOpenFuntion = (id: number) : void => {
      handleOpen();
      setId(id);
  }

  const haddleOpenFuntion2 = (id: number) : void => {
    handleOpen2();
    setId(id);
}


  return {
    handleOpen,
    handleClose,
    open,
    handleOpen2,
    handleClose2,
    open2,
    haddleOpenFuntion,
    haddleOpenFuntion2,
    id
  }
}

export default UseOpen;
