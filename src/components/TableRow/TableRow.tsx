import React from 'react';
import './TableRow.css'
import {ITrain} from "../../types/types";
import PropTypes from 'prop-types';

interface MainProps {
    trains: ITrain[],
    train: ITrain,
    onclick: () => void,
    setTrain: (train: ITrain) => void,
}

export const TableRow: React.FC<MainProps> = ({
                                                  onclick,
                                                  train,
                                                  setTrain
                                              }) => {

    const setTrainByRowClick = () => {
        setTrain(train);
    };

    const handleRowClick = () => {
        onclick()
        setTrainByRowClick()
    }

    return (
        <tr className='table__row' key={train.name} onClick={handleRowClick}>
            <td className='table__cell'>{train.name}</td>
            <td className='table__cell'>{train.description}</td>
        </tr>
    )
}

TableRow.propTypes = {
    train: PropTypes.object.isRequired,
    setTrain: PropTypes.func.isRequired,
};