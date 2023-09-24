import {ResponseDataType} from "../../servies/appApi.types";


export type TableContentType = {
    data: ResponseDataType
}
export type FormDataType = {
    equipmentCosts: number,
    estimatedProfit: number,
    machineOperatorSalary?: 0,
    mainCosts?: 0,
    materials?: 0,
    mimExploitation?: 0,
    overheads: number,
    rowName: string,
    salary: number
    supportCosts?: 0
}
