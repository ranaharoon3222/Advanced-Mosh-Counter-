// import { makeStyles } from '@material-ui/styles';

const Styles = {
  container: {
    marginTop: '30px',
  },
  csButton: {
    marginLeft: '20px',
    minWidth: '45px',
    marginTop: '20px',
    '& span': {
      fontSize: '20px',
      lineHeight: '1',
    },
    '&:hover': {
      backgroundColor: 'green',
    },
  },
  csBadge: {
    marginTop: '20px',
    minWidth: '56px',
    '& span': {
      height: '30px',
      minWidth: '30px',
      marginRight: '20px',
      position: 'static',
      transform: 'none',
    },
  },
  headings: {
    marginTop: '20px',
  },
  error: {
    backgroundColor: 'red',
    color: 'white',
  },
};

export default Styles;
