
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
     minWidth: 180,
    //maxWidth: 1000,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //width: 250,
    },
  },
};


export default function MultipleSelectGenre(props) {
    const classes = useStyles();
    const [artistName, setArtistName] = React.useState([]);
    //setting the artistNames from the props
    const artistNames=props.artists.map((art)=>{
      let name = `${art.first_name} ${art.last_name}`;
      return name;
    });
   
    const handleChange = (event) => {
      setArtistName(event.target.value);
       props.onChange(event.target.value);
    };
  

  
    return (
      <div>
  
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Artist</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={artistName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {artistNames.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={artistName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
       
       
       
      </div>
    );
  }
  