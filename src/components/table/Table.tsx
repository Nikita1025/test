import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import s from './Table.module.scss'
import {useAppSelector} from "../../servies/store";
import {useGetTreeRowsQuery} from "../../servies/appApi";
import {TableContent} from "../tableContent";
import {CreateForm} from "../createForm";


export function TableComponent() {
    const {id} = useAppSelector(state => state.app)
    const {data} = useGetTreeRowsQuery(id)

    return (<TableContainer className={s.container}>
            <div className={s.createContainer}>
                <span className={s.textCreate}>Добавить</span>
                <CreateForm/>
            </div>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={s.textHeader}>Уровень</TableCell>
                        <TableCell className={s.textHeader} align="left">Наименование работ</TableCell>
                        <TableCell className={s.textHeader} align="left">Основная з/п</TableCell>
                        <TableCell className={s.textHeader} align="left">Оборудование</TableCell>
                        <TableCell className={s.textHeader} align="left">Накладные расходы</TableCell>
                        <TableCell className={s.textHeader} align="left">Сметная прибыль</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((el) => (<TableContent data={el}/>))}
                </TableBody>
            </Table>

        </TableContainer>
    );
}
