import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography
} from "@material-ui/core";
import {
  EmailOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined
} from "@material-ui/icons";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import React, { useState } from "react";

interface SigninState {
  email: string;
  password: string;
  showPassword: boolean;
}

const Signin: React.FC = () => {
  const [values, setValues] = useState<SigninState>({
    email: "",
    password: "",
    showPassword: false
  });

  const handleChange = (prop: keyof SigninState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const signinFormSubmit = (e: Event) => {
    e.preventDefault();
    console.log(values);
    console.log("signinFormSubmit");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row-reverse"
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={4}>
        <div className="form-header">
          <Typography gutterBottom variant="h4">
            <AccountCircleOutlinedIcon color="action" />
          </Typography>
          <Typography gutterBottom variant="h4">
            Sign in to Sprout
          </Typography>
        </div>
        <Paper className="paper-wrapper" elevation={3}>
          <form
            autoComplete="off"
            id="signin-form"
            onSubmit={(e: any) => signinFormSubmit(e)}
          >
            <FormControl variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="email" edge="end">
                      <EmailOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOutlined />
                      ) : (
                        <VisibilityOffOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <Button
              variant="contained"
              id="signin-form-submit-btn"
              type="submit"
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signin;
