import React, {useState} from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import s from "../table/Table.module.scss";
import IconString from "../../assets/icons/IconString";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import {useChangeStingMutation, useDeleteStringMutation} from "../../servies/appApi";
import {useAppSelector} from "../../servies/store";
import {FieldValues, useForm} from "react-hook-form";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {FormDataType, TableContentType} from "./TableContent.types";
import {EditForm} from "../form";

const styles = {
    icon: {
        color: '#fff'
    }
}
export function TableContent({data}: TableContentType) {
    const [updateString] = useChangeStingMutation()
    const [deleteString] = useDeleteStringMutation()

    const {id} = useAppSelector(state => state.app)

    const [isOpen, setIsOpen] = useState(false);
    const [editMode, setEditMode] = useState(false)

    const {
        rowName,
        salary,
        overheads,
        estimatedProfit,
        equipmentCosts,
        id: rId
    } = data

    const {
        register,
        handleSubmit,
    } = useForm<FormDataType>({
        defaultValues: {
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            supportCosts: 0
        },
    });

    const handleEdit = (dataForm: FormDataType | FieldValues) => {
        updateString({id, rId, dataForm})
        setEditMode(!editMode)
    }

    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const onClickDelete = (rId: number) => {
        deleteString({id, rId})
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <TableRow>
            <TableCell className={s.iconTable} align="center">
                <div className={s.icons} onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <IconString/>
                    {isOpen && (
                        <div className={s.iconsGroup}>
                            <DeleteIcon onClick={() => onClickDelete(rId)}/>
                            <EditIcon onClick={changeEditMode}/>
                            {editMode && <AddOutlinedIcon style={styles.icon} fontSize='small'
                                                          onClick={handleSubmit((formData) => handleEdit(formData))}/>}
                        </div>
                    )}
                </div>
            </TableCell>
            {editMode && <EditForm register={register} rId={rId} value={data}/>}
            {!editMode && <>
                <TableCell className={s.textTable} align="left">{rowName}</TableCell>
                <TableCell className={s.textTable} align="left">{salary}</TableCell>
                <TableCell className={s.textTable} align="left">{overheads}</TableCell>
                <TableCell className={s.textTable} align="left">{equipmentCosts}</TableCell>
                <TableCell className={s.textTable} align="left">{estimatedProfit}</TableCell>
            </>}
        </TableRow>
    );
}

