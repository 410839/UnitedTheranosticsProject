import { useState } from 'react';

import {ScheduleRow} from './intervalComponent'

export function ResourceSchedule() {
  let timeIntervals = [];


  function handleCellChange(type, timeRange) {
    if (type === 'Doctor') {
        setDoctorData(prev => {
          const newMap = new Map(prev); // copy the previous Map
          const currentValue = newMap.get(timeRange) || 0;
          newMap.set(timeRange, currentValue === 0 ? 1 : 0); // toggle 0/1
          return newMap;
        });
    } else if (type === "Patient") {
      setPatientData(prev => {
        const newMap = new Map(prev); // copy the previous Map
        const currentValue = newMap.get(timeRange) || 0;
        newMap.set(timeRange, currentValue === 0 ? 1 : 0); // toggle 0/1
        return newMap;
      });
    } else if (type === "Scan") {
      setScanData(prev => {
        const newMap = new Map(prev); // copy the previous Map
        const currentValue = newMap.get(timeRange) || 0;
        newMap.set(timeRange, currentValue === 0 ? 1 : 0); // toggle 0/1
        return newMap;
      });
    } else {
        setNPTData(prev => {
          const newMap = new Map(prev); // copy the previous Map
          const currentValue = newMap.get(timeRange) || 0;
          newMap.set(timeRange, currentValue === 0 ? 1 : 0); // toggle 0/1
          return newMap;
        });
    }
  }

  


  for (let i = 0; i < 36; i++) {
      let hour = 8 + Math.floor((i * 15) / 60);
      let hour2 = 8 + Math.floor(((i + 1) * 15) / 60);

      let minute = ((i * 15) % 60);
      let minute2 = (((i + 1) * 15) % 60);

      hour = hour.toString();
      hour2 = hour2.toString();

      minute = minute.toString();
      minute2 = minute2.toString();

      hour = hour.padStart(2, "0")
      hour2 = hour2.padStart(2, "0")
      minute = minute.padStart(2, "0")
      minute2 = minute2.padStart(2, "0")

      timeIntervals.push(`${hour}:${minute} - ${hour2}:${minute2}`);
  }

  const initialDataHash = new Map();

  timeIntervals.forEach((element) => {
    initialDataHash.set(element, 0);
  });

  const [doctorData, setDoctorData] = useState(() => new Map(initialDataHash));

  const [patientData, setPatientData] = useState(() => new Map(initialDataHash));

  const [NPTData, setNPTData] = useState(() => new Map(initialDataHash));

  const [scanData, setScanData] = useState(() => new Map(initialDataHash));

  console.log(timeIntervals);

  console.log(initialDataHash);
  return (
    <div>
      <table border=""> 
        <thead>
          <tr>
            <th>Time</th>
            <th>Doctor</th>
            <th>NPT</th>
            <th>Patient</th>
            <th>Scan</th>
          </tr>
        </thead>
        <tbody>
          {timeIntervals.map((timeRange) => (
            
            <ScheduleRow key = {timeRange} timeRange={timeRange} doctorValue = {doctorData.get(timeRange)} NPTValue = {NPTData.get(timeRange)} patientValue = {patientData.get(timeRange)} scanValue = {scanData.get(timeRange)} handleCellChange = {handleCellChange}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}