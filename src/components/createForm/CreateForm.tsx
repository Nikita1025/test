import TextField from '@mui/material/TextField';
import TableCell from "@mui/material/TableCell";
import React from "react";
import {useCreateStingMutation} from "../../servies/appApi";
import {useForm} from "react-hook-form";
import {KeyboardEvent} from "react";
import {useAppSelector} from "../../servies/store";
import {FormCreateDataType} from "./CreateForm.types";

const styles = {
    input: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: '400',
        padding: '10px',
        background: '#414144',
        border: '1px solid #414144',
        borderRadius: '4px'
    },
    borderBottom: {
        borderBottom: 'none'
    }
}

export function CreateForm() {
    const [createString] = useCreateStingMutation()
    const {id} = useAppSelector(state => state.app)

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors},
    } = useForm<FormCreateDataType>({
        mode: 'onTouched',
        defaultValues: {
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            parentId: null,
            supportCosts: 0
        },
    })

    const onClickCreateString = handleSubmit((dataForm: FormCreateDataType) => {
        createString({dataForm, id})
        reset()
    })

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onClickCreateString();
        }
    };

    return (<form onSubmit={onClickCreateString}>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           onKeyDown={handleKeyDown}
                           variant='outlined'
                           placeholder={'Наименование работ'}
                           {...register('rowName')}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           onKeyDown={handleKeyDown}
                           placeholder={'Основная з/п'}
                           variant='outlined'
                           {...register('salary')}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           onKeyDown={handleKeyDown}
                           placeholder={'Оборудование'}
                           variant='outlined'
                           {...register('equipmentCosts')}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           onKeyDown={handleKeyDown}
                           variant='outlined'
                           placeholder={'Накладные расходы'}
                           {...register('overheads')}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           onKeyDown={handleKeyDown}
                           placeholder={'Сметная прибыль'}
                           variant='outlined'
                           {...register('estimatedProfit')}
                />
            </TableCell>
        </form>

    )
}

