import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

interface Props {
  text: string;
}

export const Nav: React.FC<Props> = (props) : JSX.Element => {
  const { text } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 4 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
