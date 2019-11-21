import React, { useState } from "react";

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    const loginForm: HTMLFormElement | null = document.getElementById(
      "login-form"
    ) as HTMLFormElement;

    const email = loginForm!.email.value;
    const password = loginForm!.password.value;

    console.log(email, password);
  };

  return (
    <div id="login-modal" className="modal">
      <div className="modal-content">
        <h4>Login!</h4>
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
        <button className="modal-close waves-effect waves-red btn-flat">
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

export default LoginModal;
