import TextField from '@mui/material/TextField';
import TableCell from "@mui/material/TableCell";
import React from "react";
import {FormType} from "./EditForm.types";

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
        borderBottom: '1px solid #414144'
    }
}

export function EditForm({value, register}: FormType) {
    return (<React.Fragment>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           variant='outlined'
                           {...register('rowName')}
                           defaultValue={value?.rowName}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           variant='outlined'
                           {...register('salary')}
                           defaultValue={value?.salary}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           variant='outlined'
                           {...register('equipmentCosts')}
                           defaultValue={value?.equipmentCosts}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           variant='outlined'
                           {...register('overheads')}
                           defaultValue={value?.overheads}
                />
            </TableCell>
            <TableCell sx={{borderBottom: styles.borderBottom}} align='left'>
                <TextField inputProps={{sx: styles.input}}
                           variant='outlined'
                           {...register('estimatedProfit')}
                           defaultValue={value?.estimatedProfit}
                />
            </TableCell>
        </React.Fragment>
    );
}


