import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions/AuthActions";
import { RootState } from "../../store/reducers/RootReducer";
import { AlertType } from "../../types/AlertType";
import { FirebaseResponse } from "../../types/FirebaseResponse";
import Alert from "../helpers/Alert";

interface SignUpModalProps {
  signup: (email: string, password: string) => any;
  response?: FirebaseResponse;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ signup, response }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();

    const signupForm: HTMLFormElement | null = document.getElementById(
      "signup-form"
    ) as HTMLFormElement;

    const email = signupForm!.email.value;
    const password = signupForm!.password.value;

    await signup(email, password);

    // TODO: check for user and close modal
  };

  return (
    <div id="signup-modal" className="modal">
      <div className="modal-content">
        {response && response.error && (
          <Alert alertType={AlertType.Error} message={response.error.message} />
        )}
        <h4>Sign up!</h4>
        <p>Enter an email and password to create your free account now!</p>

        <form id="signup-form" onSubmit={(e: any) => submit(e)}>
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
                minLength={8}
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
        <button className="modal-close waves-effect waves-red btn-flat">
          Cancel
        </button>
        <button
          className="waves-effect waves-green btn-flat"
          form="signup-form"
          type="submit"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    response: state.global.response
  };
};

export default connect(mapStateToProps, {
  signup
})(SignUpModal);
