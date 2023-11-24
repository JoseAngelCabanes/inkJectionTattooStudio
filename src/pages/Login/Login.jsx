import React, { useState, useEffect } from "react";
import "./Login.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/effective";
import { logUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [msgError, setMsgError] = useState('');

  const functionHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const errorCheck = () => {
  }

  const logMe = () => {

    logUser(credenciales)
        .then(
            resultado => {
                dispatch(login({ credentials: resultado.data }))
                console.log(resultado.data.token);

                setTimeout(()=>{
                    navigate("/");
                },500);
            }
        )
        .catch(error => {
          console.log(error)
          setMsgError(error.message);
        });

  }

  return (
    <div className="loginDesign">
      <div className="containerLogin">
      <div className='field'>EMAIL</div>
      <CustomInput
        design={"inputDesign"}
        type={"email"}
        name={"email"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <div className='field'>PASSWORD</div>
      <CustomInput
        design={"inputDesign"}
        type={"password"}
        name={"password"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <div className="buttonsLogin">
      <a href="loginworker"><div className='buttonSubmit'>ARTISTS</div></a>
       <div className='buttonSubmit' onClick={logMe}>LOG IN</div>
      </div>
      </div>
    </div>
  );
};
