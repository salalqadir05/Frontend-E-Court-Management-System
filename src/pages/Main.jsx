import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// Replace AppContext with the actual context you are using

function Main() {


  return (
    <Container>
      <div className="container">
        <h2>Welcome to E-Court Management System </h2>
        <div className="box">
          <Link className="btn btn-primary py-3 mt-2" to="/applicantregister" role="button">Applicant</Link>
          <Link className="btn btn-primary py-3 mt-2" to="/" role="button">Lawyer</Link>
          <Link className="btn btn-primary py-3 mt-2" to="/" role="button">Management</Link>
          <Link className="btn btn-primary py-3 mt-2" to="/" role="button">Judge</Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .container {
    background-color: #ffffff; /* Set your desired background color */
    box-shadow: 0 4px 8px rgba(128, 128, 128, 0.5); 
    height : 60vh;
    width : 60vw;
    margin-top:115px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    h2 {
      margin: auto;
      color: blue;
    }
  
    .box {
      margin-top :5px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
    .btn {
      width :20vw;
    }
  }
  
  @media only screen and (max-width: 767px) {
.container{
  margin-top : 24vh;
    height: 50vh;
    width: 90vw ;
    h2{
      margin-left: 50px;
    }
    .btn {
      width :30vw;
    }
  }
  }
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container{
    margin-top : 24vh;
      height: 50vh;
      width: 90vw ;
      h2{
        margin-left: 50px;
      }
      .btn {
        width :30vw;
      }
    }
}
`;

export default Main;
