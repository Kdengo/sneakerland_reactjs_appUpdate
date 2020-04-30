import React from 'react';
import { Container, FormControl, InputLabel, Input, FormHelperText} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Formulario() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Container>
            <div align='center'>
            <FormControl>
                <InputLabel htmlFor=""/>Email<InputLabel/>
                <Input id="email" type="email" aria-describedby="email-helper"/>
                <FormHelperText id="email-herper">Ingresa tu email personal</FormHelperText>
            </FormControl></div>
            <div align='center'>
            <FormControl>
                <InputLabel htmlFor=""/>Direccion<InputLabel/>
                <Input  aria-describedby="email-helper"/>
                <FormHelperText id="email-herper">Ingresa tu direccion de destino</FormHelperText>
            </FormControl></div>
            <div align='center'>
            <FormControl>
                <FormGroup row>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Hombre"
                    />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Mujer" />



                </FormGroup>
            </FormControl></div>
            <div align='center'>
            <FormControl>
                <form  noValidate>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </FormControl></div>
        </Container>
    );
}