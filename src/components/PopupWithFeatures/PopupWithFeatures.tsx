import React, {ChangeEvent} from "react";
import {ITrain, ICharacteristic, SelectedTrain} from "../../types/types";
import './PopupWithFeatures.css'
import {TableFeaturesRow} from "../TableFeaturesRow/TableFeaturesRow";
import PropTypes from "prop-types";

interface PopupWithFeatures {
    trains: ITrain[]
    isPopupOpen: boolean,
    selectedTrain: any,
    onClose: () => void,
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void,
    inputError: string,
    isFormValid: boolean,
    isError: boolean,
    sendData: () => void,
}

export const PopupWithFeatures: React.FC<PopupWithFeatures> = ({
                                                                   isPopupOpen,
                                                                   onClose,
                                                                   selectedTrain,
                                                                   onChangeInput,
                                                                   inputError,
                                                                   isFormValid,
                                                                   isError,
                                                                   sendData
                                                               }) => {

    return (
        <section className={`popup  ${isPopupOpen ? 'popup_opened' : ''}`}>
            <div className='popup__header'>
                <button className="popup__close" type="button" onClick={onClose}></button>
                <h1 className='popup__header'>Характеристики. {selectedTrain.train.name}</h1>
            </div>
            <div className='popup__table-container'>
                <table className='popup__table'>
                    <thead className='table__title'>
                    <tr>
                        <th className='table__header table-features__header'>Ток Двигателя</th>
                        <th className='table__header table-features__header'>Сила тяги</th>
                        <th className='table__header table-features__header'>Скорость</th>
                    </tr>
                    </thead>
                    <tbody className='table__body'>
                    <TableFeaturesRow
                        selectedTrain={selectedTrain}
                        onChangeInput={onChangeInput}
                    />
                    </tbody>
                </table>
                <button className='popup__button' type="button" disabled={!isFormValid} onClick={sendData}>
                    Отправить данные
                </button>
                {isError && <span style={{color: 'red'}}>{inputError}</span>}
            </div>
        </section>
    )
}

PopupWithFeatures.propTypes = {
    selectedTrain: PropTypes.object.isRequired,
};