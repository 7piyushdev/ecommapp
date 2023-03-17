import React from "react";
import classes from "./Footer.module.css";
// import { SocialIcon } from "react-social-icons";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes["footer-title"]}>
          <h1>The Generics</h1>
        </div>
        <div className={classes["footer-icons"]}>
          <ul>
            <li>
              <MDBBtn
                className='m-1'
                style={{ backgroundColor: "#ed302f" }}
                href='https://youtube.com'
              >
                <MDBIcon fab icon='youtube' />
              </MDBBtn>
            </li>
            <li>
              <MDBBtn
                className='m-1'
                style={{ backgroundColor: "#ac2bac" }}
                href='https://instagram.com'
              >
                <MDBIcon fab icon='instagram' />
              </MDBBtn>
            </li>
            <li>
              <MDBBtn
                className='m-1'
                style={{ backgroundColor: "#3b5998" }}
                href='https://facebook.com'
              >
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
