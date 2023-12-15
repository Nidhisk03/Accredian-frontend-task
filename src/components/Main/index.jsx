import React from 'react';
import { Typography, Container, styled } from '@mui/material';
import styles from "./styles.module.css";
// import images from "./images/wp7490243.jpg";
import images1 from "./images/imh.jpg";
import images2 from "./images/we.jpg";
import images3 from "./images/OIP.jpg";

// Styled component with custom styles
const StyledWelcomeContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '60px',
  padding: '20px',
  background: 'url("https://wallpapercave.com/wp/wp3264059.jpg")',
  backgroundSize: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
});

const PhotoGallery = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
});

const Photo = styled('img')({
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  margin: '0 10px',
});


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome to Our Creative Space</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<StyledWelcomeContainer>
     
      <Typography className={styles.h1}>
        We're thrilled to have you here. Explore and enjoy the creativity!
      </Typography>

      <PhotoGallery>
        <Photo src= {images1} alt="Photo 1" />
        <Photo src={images2} alt="Photo 2" />
        <Photo src={images3} alt="Photo 3" />
      </PhotoGallery>
    </StyledWelcomeContainer>




		</div>


	);

};

export default Main;
