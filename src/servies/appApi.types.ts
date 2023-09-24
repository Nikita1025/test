import {FieldValues} from "react-hook-form";
import {FormCreateDataType} from "../components/createForm/CreateForm.types";
import {FormDataType} from "../components/tableContent/TableContent.types";

export type CreateStringType = {
    id: number
    dataForm: FormCreateDataType
}
export type UpdateStringType={
    id: number
    rId: number
    dataForm: FormDataType| FieldValues
}
export type CreateEntityType={
    id: number
    rowName: string
}
export type DeleteType={
    id:number
    rId:number
}
export type ResponseDataType = {
    equipmentCosts: number
    estimatedProfit: number
    machineOperatorSalary?: number
    mainCosts?: number
    materials?: number
    mimExploitation?: number
    overheads: number
    parentId: null
    rowName: string
    salary: number
    supportCosts?: number
    id: number

}
