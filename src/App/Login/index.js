import React from 'react'
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from '@material-ui/core'
import { Face, Fingerprint } from '@material-ui/icons'
import { getStgToken, getProdToken } from '@utils'

const styles = (theme) => ({
  padding: {
    padding: theme.spacing.unit,
    width: '800px',
    marginTop: '10%',
    margin: '0 auto',
  },
  outerDiv: {
    width: '100%',
    textAlign: 'center',
  },
})

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loginError: '',
    loading: false,
  }

  handleLoginInfo(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  async login() {
    const { email, password } = this.state
    const { handleLogin } = this.props
    if (email.includes('@agilemedia.jp')) {
      this.setState({
        loginError: '',
        loading: true,
      })
      let stgToken = ''
      let prodToken = ''
      try {
        stgToken = await getStgToken({ email: email, password: password })
      } catch {
        stgToken = ''
      }
      try {
        prodToken = await getProdToken({ email: email, password: password })
      } catch {
        prodToken = ''
      }
      if (stgToken || prodToken) {
        console.log('auth is true')
        handleLogin()
      } else {
        this.setState({
          loginError: 'Wrong email and/or password.',
        })
      }
      this.setState({
        loading: false,
      })
    } else if (!email || !password) {
      this.setState({
        loginError: 'Please input both your email and password.',
      })
    } else {
      this.setState({
        loginError: 'Please use an @agilemedia.jp email.',
      })
    }
  }

  render() {
    const { loading, loginError } = this.state
    const { classes } = this.props
    return (
      <Grid className={classes.outerDiv}>
        <Paper className={classes.padding}>
          <Grid container style={{ padding: '15px' }}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item lg>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  autoFocus
                  required
                  onChange={(e) => this.handleLoginInfo(e)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Fingerprint />
              </Grid>
              <Grid item lg>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  onChange={(e) => this.handleLoginInfo(e)}
                />
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '20px' }}>
              <Grid item xs style={{ color: 'red' }}>
                {loginError}
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              style={{ marginTop: '20px', marginBottom: '15px' }}
            >
              {!loading ? (
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: 'none' }}
                  onClick={() => this.login()}
                >
                  Login
                </Button>
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login)
