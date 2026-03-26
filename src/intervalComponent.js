import { Cell } from "./cellComponent";


export function ScheduleRow({timeRange, doctorValue, NPTValue, patientValue, scanValue, handleCellChange}) { 
    return (
        <tr>
            <td>
            {timeRange}
            </td>
            <Cell value = {doctorValue} type = {"Doctor"} handleCellChange = {() => handleCellChange("Doctor", timeRange)}/>
            <Cell value = {NPTValue}  type = {"NPT"} handleCellChange = {() => handleCellChange("NPT", timeRange)}/>
            <Cell value = {patientValue} type = {"Patient"} handleCellChange = {() => handleCellChange("Patient", timeRange)}/>
            <Cell value = {scanValue} type = {"Scan"} handleCellChange = {() => handleCellChange("Scan", timeRange)}/>
        </tr>
    );
}