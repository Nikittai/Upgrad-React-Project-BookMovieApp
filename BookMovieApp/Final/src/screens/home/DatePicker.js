import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(null);
   
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
   
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd-MM-yyyy"
          placeholder="dd-mm-yyyy"
          margin="normal"
          shrink="true"
          label={props.val}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> 

    </MuiPickersUtilsProvider>
  );
}
