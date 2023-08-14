import React from 'react';
import "./Table.css"
import {TableRow} from "../TableRow/TableRow";
import {ITrain} from "../../types/types";
import PropTypes from "prop-types";


interface MainProps {
    trains: ITrain[],
    onclick: () => void,
    setTrain: (train: ITrain) => void,
}

export const Table: React.FC<MainProps> = ({
                                               trains,
                                               onclick,
                                               setTrain
                                           }) => {

    return (
        <table className='table'>
            <thead className='table__title'>
            <tr>
                <th className='table__header'>Название</th>
                <th className='table__header'>Описание</th>
            </tr>
            </thead>
            <tbody className='table__body'>
            {trains.map(train => (
                    <TableRow key={train.name}
                              trains={trains}
                              train={train}
                              onclick={onclick}
                              setTrain={setTrain}
                    />
                )
            )}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    trains: PropTypes.array.isRequired,
    setTrain: PropTypes.func.isRequired,
};