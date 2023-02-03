import {fetchRickAndMorty, rickAndMortyLocalizations} from "../services/rickAndMorty";
import useSwr from 'swr'
import { Card, Space } from 'antd';
import React from 'react';
import styles from "./character.module.css"

interface LocalizationsData {
    results: Array<{
        id: number;
        name: string;
        type:string;
        dimension:string;
    }>;
}

export default function Localizations() {
    const { data, error } = useSwr<LocalizationsData>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data?.results.map((location:any) => (
                        <Card title={location.name} key={location.id}>
                            <p>{location.type}</p>
                            <p>{location.dimension}</p>
                        </Card>

                    
                ))}
            </div>


        </>
    );
};

