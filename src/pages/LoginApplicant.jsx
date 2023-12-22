import React, { useState } from 'react';
import sidebar from "../assets/sideimage.jpeg";
import styled from "styled-components";
import secondlogo from '../assets/secondlogo.png'
import { Link } from 'react-router-dom';


function LoginApplicant() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: ""
  });  
  const handleChange = (event) => {
    setCredentials({ ...Credentials, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <div className="row-div">
        <div className='col1'>
          <img src={sidebar} alt="image" />
        </div>
        <div className='col2'>
          <img src={secondlogo} alt="logo" />
          <h1 >Welcome To E-Court</h1>
          <h3>Applicant PANEL</h3>
          <div className="l-form">
            <form className="form">
              <div className="form__div">
                <input type="email" className="form__input" placeholder=" " onChange={(e) => handleChange(e)} />
                <label for="" className="form__label">Email</label>
              </div>

              <div className="form__div">
                <input type="password" className="form__input" placeholder=" " onChange={(e) => handleChange(e)} />
                <label for="" className="form__label">Password</label>
              </div>
              <span className='d-flex justify-content-end mb-3'>
            Already have an account ? <Link to="/applicantregister">Register.</Link>
          </span>
              <button className="btn">Log In</button>
           
            </form>
          </div>
        </div>


      </div>


    </Container>
  )
}
const Container = styled.div`
span{
color : gray
}
.row-div{
  width : 100vw;
  height :100vh;
  display :flex;
  flex-direction : row
}
.col1 {
width : 52vw;
  height : 100vh;

}
.col1 img{
width : 52vw;
height : 100vh;
}
.col2 {
width : 48vw;
height : 100vh
}
.col2 h1,h3{
 text-align: center;

  color: blue;
}
.col2 img{
  width :20%;
  height :20%;
  display :flex;
  justify-content : centre ;
  align-item :centre;
  margin : auto;
  margin-top : 25px;
}
.l-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width : 48vw;
}


form button,button:hover {
  color : white ;
  background-color : blue ;
  margin-top :30px;
  margin-left : 180px;
  width : 10vw;
  padding:10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;


}
.form {
  width: 32vw;
  padding: 3rem 2rem;
}

.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 35vw;
  height: 100%;
  font-size: var(--normal-font-size);
  border: 2px solid var(--border-color);
  border-radius: 1rem;
  padding: 1rem;
  background: none;
  z-index: 1;
  margin-left:0px;
}
.form__label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  background-color: blue;
  color: blue;
  font-size: var(--normal-font-size);
  transition: 0.3s;
}




.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  z-index: 10;
  font-size: var(--small-font-size);
  font-weight: 500;
}

.form__input:focus {
  border: 2px solid var(--first-color);
}

:root {
    --first-color: blue;
    --input-color: blue;
    --border-color: blue;

    /*===== Fuente y tipografia =====*/
    --body-font: 'Roboto', sans-serif;
    --normal-font-size: 1rem;
    --small-font-size: .75rem;
}

*,::before,::after{
    box-sizing: border-box;
}

.l-form{
    display: flex;
    justify-content: center;
    align-items: center;
}

.form{
    width:34vw;
    padding: 3rem 2rem;
    border-radius: 1rem;
  
   
    &__div{
        position: relative;
        height: 52px;
        margin-bottom: 1.5rem;
    }
    &__input{
        position: absolute;
        top: 0;
        left: 0;
        width: 30vw;
        height: 100%;
        font-size: var(--normal-font-size);
        border: 2px solid blue;
        border-radius: .5rem;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;
    }
    &__label{
        position: absolute;
        left: 1rem;
        top: 1rem;
        padding: 0 .25rem;
        background-color: #fff;
        color: var(--input-color);
        font-size: var(--normal-font-size);
        transition: .3s;
    }
  
}

.form__input:focus + .form__label {
    top: -.5rem;
    left: .8rem;
    color: blue;
    font-size: var(--small-font-size);
    font-weight: 500;
    z-index: 10;
}

.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
    top: -.5rem;
    left: .8rem;
    z-index: 10;
    font-size: var(--small-font-size);
    font-weight: 500;
}

.form__input:focus {
    border: 2px solid blue;
}

@media only screen and (max-width: 767px) {
.col1 {
  
  display:none;
}
.row-div {

  display: flex;
  justify-content : centre ;
  align-item : centre;

}
.col2{
  width: 100vw;
    height: 100vh
}
.col2 form input {
  width: 70vw;
}
.col2 img {
  margin-top:25px;
  height: 20vh;
   width: 35vw;
}
.col2 form button{
  width: 114px;
  margin-left: 65px;
  margin-top: 45px;
;

}
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .col1 {
  
    display:none;
  }
  .row-div {
  
    display: flex;
    justify-content : centre ;
    align-item : centre;
  
  }
  .col2{
    width: 100vw;
      height: 100vh
  }
  .col2 form input {
    width: 70vw;
  }
  .col2 img {
    margin-top:25px;
    height: 20vh;
     width: 35vw;
  }
  .col2 form button{
    width: 138px;
    margin-left: 215px;
    margin-top: 45px ;
  
  
  }

`;



export default LoginApplicant