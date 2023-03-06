import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface props {
  variant: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success';
  size?: 'small' | 'medium' | 'large';
  text: string;
  href?: string;
  onclick?: () => void;
  isEndIcon?: boolean;
}

export const ButtonC : React.FC<props> = (props) : JSX.Element => {

  const { variant, color, size, text, href, onclick, isEndIcon } = props;
  
  return (
     <Button
     sx={{marginTop: 6}} 
     variant={variant}
     color={color}
     size={size}
     href={href}
     endIcon= {isEndIcon ? <SendIcon /> : null}
     onClick={ onclick }
     >{text} </Button>
  )
}
