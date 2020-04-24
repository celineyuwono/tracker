import React from 'react'
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { Face, Fingerprint } from '@material-ui/icons'
import { UiContext } from '@context'
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
  static contextType = UiContext

  state = {
    email: '',
    password: '',
    loginError: '',
    loading: false,
  }
  componentDidMount() {
    console.log('Auth: (Login)', this.context.auth)
  }
  handleLoginInfo(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  async login() {
    const { email, password } = this.state
    const { handleLoginInfo } = this.props
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
        this.context.setAuth(true)
        // window.location.href = '/'
      } else {
        this.setState({
          loginError: 'メールアドレスもしくはパスワードが正しくありません。',
        })
      }
      this.setState({
        loading: false,
      })
    } else if (!email || !password) {
      this.setState({
        loginError: 'メールアドレスとパスワードを入力してください。',
      })
    } else {
      this.setState({
        loginError: '@agilemedia.jpのメールアドレスでログインしてください。',
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
