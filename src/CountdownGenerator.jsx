import { useState } from 'react';
import { InputNumber, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';

const CountdownGenerator = () => {
  const [seconds, setSeconds] = useState(30);
  const [datetime, setDatetime] = useState(dayjs(Date.now() + 30 * 1000));
  const handleChangeSeconds = (value) => {
    setSeconds(value);
  };
  const handleChangeDatetime = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setDatetime(value);
  };

  const url = window.location.origin + window.location.pathname

  return (
    <div className="max-w-sm bg-white rounded-xl p-5 text-left font-light">
      <div>
        <h1 className="font-medium text-xl">Countdown</h1>
        <p>เลือกวิธีใดวิธีหนึ่งเพื่อสร้าง countdown</p>
        <div className="space-y-3 mt-5">
          <div>
            <p>1. นับถอยหลัง n วินาที</p>
            <InputNumber
              min={1}
              value={seconds}
              onChange={handleChangeSeconds}
              addonAfter="วินาที"
              className="block w-full mt-3 mb-2"
            />
            <a href={`${url}?seconds=${seconds}`}>
              <Button
                className="w-full"
                type="primary"
                htmlType="button"
                disabled={!seconds}
              >
                เริ่ม
              </Button>
            </a>
          </div>

          <div>
            <p>2. เลือกกำหนดเวลา</p>
            <DatePicker
              showTime
              onChange={handleChangeDatetime}
              value={datetime}
              className="block w-full mt-3 mb-2"
            />
            {!!datetime ? (
              <a href={`${url}?datetime=${datetime.format('YYYY-MM-DD HH:mm:ss')}`}>
                <Button className="w-full" type="primary" htmlType="button">
                  เริ่ม
                </Button>
              </a>
            ) : (
              <Button
                className="w-full"
                type="primary"
                htmlType="button"
                disabled
              >
                เริ่ม
              </Button>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="my-5">
          <span className="bg-gray-700 font-[monospace] text-white p-1 rounded-md">
            seconds
          </span>{' '}
          นับถอยหลัง n วินาที
          <br />
          ตัวอย่าง:{' '}
          <span className="bg-gray-700 font-[monospace] text-white p-1 rounded-md">
            /?seconds=30
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
            /?datetime=2024-04-25<span className="text-red-500">%20</span>
            16:00:00
          </span>{' '}
          สำหรับนับถอยหลังจนถึง Apr 25, 2024 16:00:00
        </p>
      </div>
    </div>
  );
};

export default CountdownGenerator;
