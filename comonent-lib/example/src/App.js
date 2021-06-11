import { Button, TextField } from 'library';
import { useStyle } from './Style';

function App() {
  const classes = useStyle;
  return (
    <div>
      <Button text='DTPButton' color='secondary' className={classes.useStyle} />
      <TextField label='DTPTextFiled' id='DTP' variant='filled' />
    </div>
  );
}

export default App;
