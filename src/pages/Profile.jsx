import React from 'react'
import '../components/profile/stylesProfile/stylesProfile.scss'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight, faBell, faWallet, faGlobe, faPhone, faCircleQuestion, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/utils';
import Switch from '@mui/material/Switch';
import Footer from '../components/home/footer/Footer';

const LinkProfile = ({ iconProfile, text, iconState, navigateTo }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log('navegare')
    navigate(`${navigateTo}`)
  }

  return (
    <div onClick={handleNavigate} className='link__profile'>
      <div className='link__profile__icon'>
        <div>{iconProfile}</div>
        <p>{text}</p>

      </div>
      <div>{iconState}</div>
    </div>
  );
};

const Profile = () => {
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  const { user } = useSelector((store) => store.user);

  const dataProfile = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      description: 'Account edit',
      icon2: <FontAwesomeIcon icon={faChevronRight} />,
      navigate: '/profile/edit'
    },
    {
      icon: <FontAwesomeIcon icon={faBell} />,
      description: 'Account edit',
      icon2: <Switch {...label} defaultChecked color="warning" />,
      navigate: '/profile'
    },
    {
      icon: <FontAwesomeIcon icon={faWallet} />,
      description: 'Payment',
      icon2: <FontAwesomeIcon icon={faChevronRight} />,
      navigate: '/profile/payment'
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} />,
      description: 'Language',
      icon2: 'Eng',
      navigate: '/profile'
    },
    {
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      description: 'Location',
      icon2: <FontAwesomeIcon icon={faChevronRight} />
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      description: 'FAQ',
      icon2: <FontAwesomeIcon icon={faChevronRight} />
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      description: 'Support',
      icon2: <FontAwesomeIcon icon={faChevronRight} />
    }
  ]


  return (
    <>
      {user.avatar &&
        <div className='link__profile__image'>
          <img src={user?.avatar} alt="" style={{width:'90px', height:'90px', borderRadius: '50%'}}/>
          {/* <Image src={user?.avatar} roundedCircle  /> */}
          <h2 className='link__profile__name'>{capitalizeFirstLetter(user?.fullName)}</h2>

        </div>
      }

      {dataProfile.map((data) => (

        <LinkProfile
          navigateTo={data.navigate}
          iconProfile={data.icon}
          text={data.description}
          iconState={data.icon2}
        />
      ))}
      <Footer />
    </>
  );
}

export default Profile; 
