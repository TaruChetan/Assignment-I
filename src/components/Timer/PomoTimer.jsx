import React, { useState, useEffect } from "react";
import timerIcon from "../../assets/timerIcon.png";
import { Button, Card, Divider, Progress } from "antd";
const { Meta } = Card;

const PomoTimer = () => {
  const initialWorkTime = 1500;
  const initialBreakTime = 300;
  const [time, setTime] = useState(initialWorkTime);
  const [isWorkTimer, setIsWorkTimer] = useState(true);
  const [isEnable, setIsEnable] = useState(false);
  const [takeBrake, setTakeBrake] = useState(false);
  const [disableClick, setDisableClick] = useState(false);

  useEffect(() => {
    let interval;

    if (isEnable && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);

      if (isWorkTimer) {
        setIsWorkTimer(false);
        setTime(initialBreakTime);
        setIsEnable(true);
        setDisableClick(true);

        setTimeout(() => {
          setTakeBrake(false);
          setIsWorkTimer(true);
          setTime(initialWorkTime);
          setIsEnable(false);
          setDisableClick(false);
        }, initialBreakTime * 1000);
      } else {
        setIsWorkTimer(true);
        setTime(initialWorkTime);
        setIsEnable(false);
      }
    }

    return () => clearInterval(interval);
  }, [isEnable, time, isWorkTimer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    if (!takeBrake) {
      setIsEnable(!isEnable);
    }
  };

  const resetTimer = () => {
    setIsEnable(false);
    setTakeBrake(false);
    setIsWorkTimer(true);
    setTime(initialWorkTime);
  };

  const calculateProgress = () => {
    return (time / (isWorkTimer ? initialWorkTime : initialBreakTime)) * 100;
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#f2f2f2",
        height: "97vh",
        width: "100%",
      }}
    >
      <Card
        style={{
          width: 500,
          height: "auto",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
        hoverable
        cover={<img alt="example" src={timerIcon} />}
        actions={[
          <Button type="primary" onClick={toggleTimer} disabled={disableClick}>
            {isEnable ? "Pause" : "Start"}
          </Button>,
          <Button type="default" onClick={resetTimer} disabled={disableClick}>
            Reset
          </Button>,
        ]}
      >
        <Meta style={{ textAlign: "center" }} title="Pomodoro Timer" />
        <Divider />
        <Progress percent={calculateProgress()} showInfo={false} />
        <Meta
          style={{ textAlign: "center", fontWeight: "bolder" }}
          title={formatTime(time)}
        />
      </Card>
    </div>
  );
};

export default PomoTimer;
