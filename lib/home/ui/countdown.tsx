import styled from "@emotion/styled";
import React from "react";

export interface TimeDisplayValuesType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CounterType {
  displayValue: number;
  label: string;
}

const AppStyled = styled.div`
  background-image: linear-gradient(15deg, #1a1a1a, var(--color-bg));
  color: var(--color-text);
  display: flex;
`;

const ContainerStyled = styled.section`
  padding: 1rem;
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 48em) {
    padding: 4rem;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 35.5em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 2rem;
  }
`;

const DateStyled = styled.header`
  margin-bottom: 2rem;

  & h1 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: 27px;
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: unset;
    text-align: center;
    text-transform: uppercase;
  }
`;

const CounterStyled = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border-radius: 1rem;
  color: white;
  display: flex;
  align-items : center;
  flex-direction: column;
  font-size: 50px;
  font-weight: 100;
  line-height: 1;
  padding: 10px;
  text-align: center;

  h2 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: .1875em;
    margin: 1.25rem 0 0;
    order: 1;
    overflow: hidden
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
    text-align: 'center';
  }
`;
const nextYear = new Date().getFullYear();

const targetDate = new Date(`Aug 25, ${nextYear} 00:00:00`).getTime();

const generateTimeDisplay = (): TimeDisplayValuesType => {
  const rightJustNow = new Date().getTime();
  const runway = targetDate - rightJustNow;
  const stateObj = {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)),
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000),
  };
  return stateObj;
};

const Counter = ({ displayValue, label }: CounterType) => (
  <CounterStyled>
    <h2 style={{ color: "white", fontSize: "15px", textAlign: "center" }}>
      {label}
    </h2>
    <p>{displayValue}</p>
  </CounterStyled>
);

export const Countdown = () => {
  const [timeDisplay, setTimeDisplay] =
    React.useState<TimeDisplayValuesType>(generateTimeDisplay);

  const updateCounters = () => setTimeDisplay(generateTimeDisplay);

  React.useEffect(() => {
    setInterval(() => setTimeDisplay(generateTimeDisplay), 1000);
  }, []);

  return (
    <AppStyled>
      <ContainerStyled>
        <DateStyled>
          <h1 style={{ color: "white" }}>БҮРТГЭЛ ДУУСАХАД</h1>
        </DateStyled>
        <WrapperStyled>
          <Counter displayValue={timeDisplay.days} label={"Өдөр"} />
          <Counter displayValue={timeDisplay.hours} label={"Цаг"} />
          <Counter displayValue={timeDisplay.minutes} label={"Минут"} />
          <Counter displayValue={timeDisplay.seconds} label={"Секунд"} />
        </WrapperStyled>
      </ContainerStyled>
    </AppStyled>
  );
};
