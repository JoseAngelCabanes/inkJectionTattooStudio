import React, { useState, useEffect } from "react";
import "./ArtistLogin.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/effective";
import { logArtist } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export const LoginArtist = () => {

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

  // const errorCheck = () => {
  //   console.log("");
  // }

  const logMe = () => {

    logArtist(credenciales)
        .then(
            resultado => {
                console.log(resultado)
                dispatch(login({ credentials: resultado.data }))

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
        functionProp={functionHandler}
      />
      <div className='field'>PASSWORD</div>
      <CustomInput
        design={"inputDesign"}
        type={"password"}
        name={"password"}
        placeholder={""}
        functionProp={functionHandler}
      />
      <div className="buttonsLogin">
      <a href="login"><div className='buttonSubmit'>CLIENTS</div></a>
       <div className='buttonSubmit' onClick={logMe}>LOG IN</div>
      </div>
      </div>
    </div>
  );
};