import React from 'react'
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { Face, Fingerprint } from '@material-ui/icons'

const styles = (theme) => ({
  padding: {
    padding: theme.spacing.unit,
    marginTop: '10%',
    minHeight: '200px',
    minWidth: '400px',
    display: 'inline-block',
    margin: '0 auto',
  },
  outerDiv: {
    width: '100%',
    textAlign: 'center',
  },
})

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleUsernameChange(value) {
    this.setState({
      username: value,
    })
  }
  handlePasswordChange(value) {
    this.setState({
      password: value,
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Grid className={classes.outerDiv}>
        <Paper className={classes.padding}>
          <Grid container style={{ padding: '15px' }}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item md sm xs>
                <TextField
                  id="username"
                  label="Username"
                  type="email"
                  fullWidth
                  autoFocus
                  required
                  onChange={(e) => this.handleUsernameChange(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Fingerprint />
              </Grid>
              <Grid item md sm xs>
                <TextField
                  id="username"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  onChange={(e) => this.handlePasswordChange(e.target.value)}
                />
              </Grid>
            </Grid>
            {/* <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Button
                  disableFocusRipple
                  disableRipple
                  style={{ textTransform: 'none' }}
                  variant="text"
                  color="primary"
                >
                  Forgot password ?
                </Button>
              </Grid>
            </Grid> */}
            <Grid container justify="center" style={{ marginTop: '30px' }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login)
