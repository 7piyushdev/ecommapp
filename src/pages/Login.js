import { useState, useRef, useContext } from "react";
import AuthContext from "../store/AuthProvider";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import CartContext from "../store/cart-context";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;
      setIsLoading(true);
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDadKm19OYIGmE1kc0MAoJfT-eJGb5i6Pc",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      if (res.ok) {
        const data = await res.json();
        authCtx.login(data.idToken);
        cartCtx.addUser(enteredEmail);
        navigate("/store");
        setTimeout(() => {
          authCtx.logout();
          navigate("/login");
        }, 5 * 60 * 1000);
      } else {
        const err = await res.json();
        alert(err.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>Login</button>}
          {isLoading && <button>login....</button>}
        </div>
      </form>
    </section>
  );
};

export default Login;
