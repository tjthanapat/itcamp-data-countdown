import { useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import './App.css';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/500.css';
import '@fontsource/prompt/600.css';
import 'animate.css';

import daitaLogo from './assets/daita.svg';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <p className="font-medium text-white pulsing-1s">
        <span className="text-[200px]">หมดเวลา!</span>
        {/* <br />
        <span className="text-[42px]">เก่งมากทุกคน</span> */}
      </p>
    );
  } else {
    // Render a countdown
    const thresh_seconds = 30;
    if (hours == 0 && minutes == 0 && seconds <= thresh_seconds) {
      return (
        <p className="font-medium text-[200px] text-red-500 pulsing-05s">
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </p>
      );
    } else if (hours == 0 && minutes == 0 && seconds >= thresh_seconds) {
      return (
        <p className="font-medium text-[200px] text-red-500 pulsing-1s">
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </p>
      );
    }
    return (
      <p className="font-medium text-[200px] text-white">
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </p>
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
            src={daitaLogo}
            className="logo w-[600px] opacity-30"
            alt="Daita logo"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center h-screen text-center p-5">
          {!!deadline ? (
            <Countdown date={deadline} renderer={renderer} />
          ) : (
            <div className="max-w-sm bg-white rounded-xl p-5 text-left">
              <p className='text-center'>ต้องใส่ parameter ใน url ตัวใดตัวหนึ่ง!</p>
              
              <p className='my-5'>
                <span className="bg-gray-700 font-[monospace] text-white p-1 rounded-md">
                  seconds
                </span>{' '}
                นับถอยหลัง n วินาที
                <br />
                ตัวอย่าง:{' '}
                <span className="bg-gray-700 font-[monospace] text-white p-1 rounded-md">
                  /?seconds=300
                </span>
              </p>
              <p>
                <span className="bg-gray-700 font-[monospace] text-white p-1 rounded-md">
                  datetime
                </span>{' '}
                นับถอยหลังถึงเวลาที่กำหนด
                <br />
                ตัวอย่าง:{' '}
                <span className="bg-gray-700 font-[monospace] text-white p-1 rounded-md">
                /?datetime=2024-04-25<span className='text-red-500'>%20</span>16:00:00
                </span> สำหรับนับถอยหลังจนถึง Apr 25, 2024 16:00:00
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="hidden">
        2 params available for this page: <br />
        /?seconds={'{seconds:int}'} example: /?seconds=300 <br />
        /?datetime={'{datetime:int}'} example: /?datetime=2024-04-25%2016:00:00
        for Apr 25, 2024 16:00:00 <br />
        datetime will be used if provided with both params together.
      </div>
    </>
  );
};

export default App;
