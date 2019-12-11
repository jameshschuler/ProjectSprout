import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions/AuthActions";
import { RootState } from "../../store/reducers/RootReducer";
import { AlertType } from "../../types/AlertType";
import { FirebaseResponse } from "../../types/FirebaseResponse";
import { closeModal } from "../../utilities";
import Alert from "../helpers/Alert";

interface LoginModalProps {
  login: (email: string, password: string) => any;
  isAuthenticated: boolean;
  response?: FirebaseResponse;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isAuthenticated,
  login,
  response
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const loginForm: HTMLFormElement | null = document.getElementById(
        "login-form"
      ) as HTMLFormElement;
      loginForm!.reset();

      closeModal("login-modal");
    }
  }, [isAuthenticated]);

  const clearForm = () => {
    const loginForm: HTMLFormElement | null = document.getElementById(
      "login-form"
    ) as HTMLFormElement;
    loginForm!.reset();
  };

  const submit = async (e: any) => {
    e.preventDefault();

    const loginForm: HTMLFormElement | null = document.getElementById(
      "login-form"
    ) as HTMLFormElement;

    const email = loginForm!.email.value;
    const password = loginForm!.password.value;

    await login(email, password);
  };

  return (
    <div id="login-modal" className="modal">
      <div className="modal-content">
        {response && response.error && (
          <Alert alertType={AlertType.Error} message={response.error.message} />
        )}
        <h4>Login!</h4>
        <p>Enter your email and password get started now!</p>

        <form id="login-form" onSubmit={(e: any) => submit(e)}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={email}
                className="validate"
                required
              />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error={"Email is required"}
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                name="password"
                type="password"
                defaultValue={password}
                className="validate"
                required
              />
              <label htmlFor="password">Password</label>
              <span
                className="helper-text"
                data-error={"Password is required (min. 8 characters)"}
              ></span>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          className="modal-close waves-effect waves-red btn-flat"
          onClick={() => clearForm()}
        >
          Cancel
        </button>
        <button
          className="waves-effect waves-green btn-flat"
          form="login-form"
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    response: state.global.response,
    isAuthenticated: !!state.auth.user
  };
};

export default connect(mapStateToProps, {
  login
})(LoginModal);
