import { Chip } from '@mui/material';

function Genre({ name }) {
  return <Chip label={name} type="button" className='btn'/>;
}
export default Genre;
