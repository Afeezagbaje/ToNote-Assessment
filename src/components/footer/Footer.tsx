import "./styles.css";

import * as React from "react";

import { Container, CssBaseline, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import List from "./list/List";

const Footer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <footer>
        <div className="footer-container">
          <Container fixed className="footer-list">
            <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
              <Grid item xs={3}>
                <List listTitle="Company" />
                <List listText="About Us" />
                <List listText="Careers" />
                <List listText="Contact Us" />
              </Grid>
              <Grid item xs={3}>
                <List listTitle="Support" />
                <List listText="Help Center" />
                <List listText="Safety Center" />
              </Grid>
              <Grid item xs={3}>
                <List listTitle="Legal" />
                <List listText="Cookies Policy" />
                <List listText="Privacy Policy" />
                <List listText="Terms of Service" />
                <List listText="Dispute Resolution" />
              </Grid>
              <Grid item xs={3}>
                <List listTitle="Plan Events" />
                <List listText="Create and Setup" />
                <List listText="Sell Ticket" />
                <List listText="Online Events" />
                <List listText="Online RSVP" />
              </Grid>
            </Grid>
          </Container>
        </div>
        <hr />
        <Container fixed>
          <Grid
            container
            spacing={2}
            columns={{ xs: 3, sm: 6, md: 12 }}
            className="footer-socials"
          >
            <Grid item xs={6} className="footer-allRights">
              <p>&copy; 2022 Eventer, All rights reserved</p>
            </Grid>
            <Grid item xs={6}>
              <div className="social-media-accounts">
                <div className="insta">
                  <InstagramIcon className="centered" />
                </div>
                <div className="twitter">
                  <TwitterIcon className="centered" />
                </div>
                <div className="youtube">
                  <YouTubeIcon className="centered" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
