import IconHeader from "../../assets/icons/IconHeader";
import VectorHeader from "../../assets/icons/VectorHeader";
import {Button} from "@mui/material";
import s from './Header.module.scss'
import VectorDown from "../../assets/icons/VectorDown";
export function Header() {
    return (
        <div className={s.container}>
            <div className={s.headerContainer}>
                <div className={s.icons}>
                    <IconHeader/>
                    <VectorHeader/>
                </div>
                <Button className={s.activeButton} variant='text'>Просмотр</Button>
                <Button className={s.button} variant='text'>Управление</Button>
            </div>
            <div className={s.bottomContainer}>
                <div className={s.nameProjects}>
                    <div className={s.text}>
                        <span className={s.textProject}>Название проекта</span>
                        <span className={s.abbreviation}>Аббревиатура</span>
                    </div>
                    <VectorDown/>
                </div>
                <div className={s.project}>
                    <span className={s.name}>Строительно-монтажные работы</span>
                </div>
            </div>
        </div>
    );
}

