import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
//import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
//import SwipeableViews from 'react-swipeable-views';
import { useNavigate } from 'react-router-dom';
import './stylesStepersLogin/stylesSteperLogin.scss'

const images = [
  // {
  //   label: '',
  //   imgPath:
  //     'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/oumm4vmttpba8iuafsit.png',
  // },
  {
    label: 'Choose what to eat choosing from a variety of restaurants from the list',
    imgPath:
      'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/whrv8mty54odagsmc4yo.png',
  },
  {
    label: 'Choose where you want to deliver by indicating on the map',
    imgPath:
      'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/kna4uikkwu7ros8xxmbm.png',
  },
  {
    label: 'We will deliver as soon as possible',
    imgPath:
      'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/rqihtlgp0rvnkfjffzhj.png',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if (activeStep !== maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  const handleStepChange = (step) => {
    setActiveStep(step);

  };
  console.log(activeStep)

  const navigate = useNavigate();

  if (activeStep === 2) {
    console.log('maximo')
    navigate('/login')
  }

  return (
    <div></div>
    // <div style={{ height: '100vh' }}>
    //   <div className='container1' sx={{ maxWidth: 400, flexGrow: 1 }}>
    //     <Paper
    //       square
    //       elevation={0}
    //       sx={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         // height: '80vh',
    //         pl: 2,
    //         bgcolor: 'background.default',
    //       }}
    //     >
    //     </Paper>
    //     <SwipeableViews
    //       axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    //       index={activeStep}
    //       onChangeIndex={handleStepChange}
    //     >
    //       {images.map((step, index) => (
    //         <div key={step.label}>
    //           {Math.abs(activeStep - index) <= 2 ? (
    //             <Box
    //               component="img"
    //               sx={{
    //                 // height: '90%',
    //                 display: 'block',
    //                 maxWidth: 400,
    //                 overflow: 'hidden',
    //                 width: '100%',
    //               }}
    //               src={step.imgPath}
    //               alt={step.label}
    //             />
    //           ) : null}
    //         </div>
    //       ))}
    //     </SwipeableViews>
    //     <Typography style={{ textAlign: 'center', padding: '2rem' }}>{images[activeStep].label}</Typography>
    //     <MobileStepper style={{ marginTop: '4rem' }}
    //       variant="dots"
    //       steps={maxSteps}
    //       position="static"
    //       activeStep={activeStep}
    //       nextButton={
    //         <Button style={{ backgroundColor: '#FFE031', width: '100%', color: 'black', borderRadius: '10px' }}
    //           //size="small"
    //           onClick={handleNext}
    //           disabled={activeStep === maxSteps - 1}
    //         >
    //           Next
    //         </Button>
    //       }
    //     />
    //   </div>
    // </div>
  );
}

export default SwipeableTextMobileStepper;
