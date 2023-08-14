import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Table} from "../Table/Table";
import {PopupWithFeatures} from "../PopupWithFeatures/PopupWithFeatures";
import {connect} from "react-redux";
import {setTrain} from "../../actions/TableAction";
import {setInputArray} from '../../actions/InputsArrayAction'
import {ClearStore} from "../../actions/ResetAction";
import {INVALID_DATA} from "../../constants/constants";
import {Inputs, ITrain} from '../../types/types'

interface App {
    fetchedTrainsArray: [],
    inputs: Inputs,
    train: object,
    setInputArrayAction: ([]) => void,
    setResetAction: () => void,
    setTrainAction: (train: ITrain) => void
}

const App: React.FC<App> = (
    {
        fetchedTrainsArray,
        inputs,
        train,
        setInputArrayAction,
        setResetAction,
        setTrainAction,
    }
) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isFormValid, setIsFormValid] = useState(true)
    const [isError, setIsError] = useState(false)
    const [inputError, setInputError] = useState(INVALID_DATA)
    const trainsArray = fetchedTrainsArray
    const currentTrainInputsArray = inputs.inputs
    const selectedTrain = train

    useEffect(() => {
        const allInputs: NodeListOf<never> = document.querySelectorAll('.table-features__input')
        const allInputsArray = Array.from(allInputs)
        setInputArrayAction(allInputsArray)
    }, [selectedTrain])


    function openPopupWithFeatures() {
        setIsPopupOpen(true)
        setIsFormValid(true)
        setInputError('')
    }

    function onClose() {
        setIsPopupOpen(false)
        setResetAction()
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const regExp = (/^[+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/)
        const nonValidArray = currentTrainInputsArray.filter((obj: HTMLInputElement) => !obj.value.match(regExp))

        currentTrainInputsArray.forEach((obj: HTMLInputElement) => obj.style.color = 'black')
        nonValidArray.forEach((obj: HTMLInputElement) => obj.style.color = 'red')

        if (nonValidArray.length > 0) {
            setInputError(INVALID_DATA)
            setIsFormValid(false)
            setIsError(true)
        } else {
            setInputError('')
            setIsFormValid(true)
            setIsError(false)
        }
    }

    function sendData() {
        const speedInputArray = currentTrainInputsArray.filter((input: HTMLInputElement) => input.name === 'speed')
        const speedValuesArray = speedInputArray.map((input: HTMLInputElement) => +input.value)
        const sortedSpeedValuesArray = speedValuesArray.sort((a: number, b: number) => a - b)
        console.log(sortedSpeedValuesArray)
    }

    return (
        <>
            <h1 className='header'>Поезда</h1>
            <Table
                trains={trainsArray}
                onclick={() => openPopupWithFeatures()}
                setTrain={setTrainAction}
            />

            <PopupWithFeatures
                trains={trainsArray}
                selectedTrain={selectedTrain}
                isPopupOpen={isPopupOpen}
                onClose={onClose}
                onChangeInput={onChangeInput}
                inputError={inputError}
                isFormValid={isFormValid}
                isError={isError}
                sendData={sendData}
            />
        </>
    );
}

const mapStateToProps = (store: { trainsArray: []; train: object; inputs: Inputs; }) => {
    return {
        fetchedTrainsArray: store.trainsArray,
        train: store.train,
        inputs: store.inputs,
    };
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload?: object; }) => object) => ({
    setTrainAction: (train: object) => dispatch(setTrain(train)),
    setInputArrayAction: (array: object) => dispatch(setInputArray(array)),
    setResetAction: () => dispatch(ClearStore()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
