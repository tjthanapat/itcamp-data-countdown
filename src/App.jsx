import Countdown, { zeroPad } from 'react-countdown';
import './App.css';
import '@fontsource/prompt/300.css';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/500.css';

import CountdownGenerator from './CountdownGenerator';
import dataCampLogo from './assets/datamarine.png';

const NumberDisplay = ({ number, pulsing }) => {
  return (
    <p
      className={
        'font-medium text-[240px] -mb-[64px]' +
        (!!pulsing ? ' text-red-500 ' + pulsing : ' text-white')
      }
    >
      {zeroPad(number)}
    </p>
  );
};

const UnitDisplay = ({ unit, pulsing }) => {
  return (
    <p
      className={'text-[64px]' + (!!pulsing ? ' text-red-500' : ' text-white')}
    >
      {unit}
    </p>
  );
};

const CountdownDisplay = ({ hours, minutes, seconds, pulsing }) => {
  return (
    <div className="grid grid-cols-3 w-screen p-[128px]">
      <div>
        <NumberDisplay number={hours} pulsing={pulsing} />
        <UnitDisplay unit="ชั่วโมง" pulsing={pulsing} />
      </div>
      <div>
        <NumberDisplay number={minutes} pulsing={pulsing} />
        <UnitDisplay unit="นาที" pulsing={pulsing} />
      </div>
      <div>
        <NumberDisplay number={seconds} pulsing={pulsing} />
        <UnitDisplay unit="วินาที" pulsing={pulsing} />
      </div>
    </div>
  );
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <p className="font-medium text-white pulsing-1s">
        <span className="text-[240px]">หมดเวลา!</span>
      </p>
    );
  } else {
    // Render a countdown
    const thresh_red_plusing_seconds = 30;
    const thresh_red_seconds = 10 * 60;
    if (hours == 0 && minutes == 0 && seconds <= thresh_red_plusing_seconds) {
      return (
        <CountdownDisplay
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          pulsing="pulsing-05s"
        />
      );
    } else if (hours == 0 && minutes == 0 && seconds >= thresh_seconds) {
      return (
        <CountdownDisplay
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          pulsing="pulsing-1s"
        />
      );
    }
    return (
      <CountdownDisplay hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

const App = () => {
  // const deadline = new Date('2024-04-22 20:00:00');
  const queryParameters = new URLSearchParams(window.location.search);
  const datetime = queryParameters.get('datetime');
  const seconds = queryParameters.get('seconds');
  let deadline;
  if (!!datetime) {
    deadline = new Date(datetime);
  } else if (!!seconds) {
    deadline = Date.now() + seconds * 1000;
  }
  console.log(deadline);

  return (
    <>
      <div className="daita-gradient relative flex flex-col justify-center items-center h-screen">
        <div className="absolute flex flex-col justify-center items-center h-screen">
          <img
            src={dataCampLogo}
            className="logo w-[600px] opacity-30"
            alt="Data Camp logo"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center h-screen text-center">
          {!!deadline ? (
            <Countdown date={deadline} renderer={renderer} />
          ) : (
            <CountdownGenerator />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
