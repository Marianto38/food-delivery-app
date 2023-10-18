import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const Countdown = () => {
  const DATE_TARGET = new Date('11/15/2023 1:00 PM');

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    const now = new Date();
    const duration = DATE_TARGET - now;
    const remainingDays = Math.floor(duration / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((duration % (1000 * 60)) / 1000);

    setRemainingTime({
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Row className="text-center bg-danger counter rounded-2 py-2 text-light">
      <Col xs={4} className="text-light"><small>Expires in:</small></Col>
      <Col className="text-light" id="days">{remainingTime.days}</Col>
      <Col className="text-light" id="hours">{remainingTime.hours}</Col>
      <Col className="text-light" id="minutes">{remainingTime.minutes}</Col>
      <Col className="text-light" id="seconds">{remainingTime.seconds}</Col>
    </Row>
  );
};

export default Countdown;
