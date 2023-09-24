import React, {useEffect} from 'react';
import s from './App.module.scss'
import {useCreateEssenceMutation} from "../servies/appApi";
import {Header} from "../components/header";
import {ProjectsBar} from "../components/projectsBar";


export default function App() {
    const [createEssence] = useCreateEssenceMutation()

    useEffect(() => {
        createEssence()
    }, [])
    return (
        <div className={s.app}>
            <Header/>
            <ProjectsBar/>
        </div>
    );
}

