import React from 'react';
import ProjectIcon from "../../assets/icons/ProjectIcon";
import s from './ProjectsBar.module.scss'
import {TableComponent} from "../table";

export function ProjectsBar() {
    const projects = [
        'По проекту',
        'Объективы',
        'РД',
        'МТО',
        'СМР',
        'График',
        'МиМ',
        'Рабочие',
        'Капвложения',
        'Бюджет',
        'Финансирование',
        'Панорамы',
        'Камеры',
        'Поручения',
        'Контрагенты'
    ]
    return (
        <div className={s.container}>
            <div className={s.containerProjectBar}>
                {projects.map((el, index) => {
                    return <div key={index} className={el === 'СМР' ? s.viewProject : s.project}>
                        <ProjectIcon/>
                        <span>{el}</span>
                    </div>
                })}
            </div>
            <TableComponent/>
        </div>
    );
}

