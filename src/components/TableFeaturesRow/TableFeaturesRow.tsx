import './TableFeaturesRow.css'
import React, {ChangeEvent} from "react";


interface MainProps {
    selectedTrain: any,
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const TableFeaturesRow: React.FC<MainProps> = ({
                                                          selectedTrain,
                                                          onChangeInput,
                                                      }) => {

    const features = selectedTrain.train.characteristics

    return (
        <>
            {features?.map((feature: { speed: string | number | readonly string[] | undefined; force: string | number | readonly string[] | undefined; engineAmperage: string | number | readonly string[] | undefined; }) => (

                <tr className='table-features__row' key={selectedTrain.name}>
                    <td className='table-features__cell table__cell'>
                        <input className='table-features__input'
                               name='engineAmperage'
                               defaultValue={feature.engineAmperage}
                               onChange={(e) => onChangeInput(e)}
                        />
                    </td>
                    <td className='table-features__cell table__cell'>
                        <input className='table-features__input'
                               name='force'
                               defaultValue={feature.force}
                               onChange={(e) => onChangeInput(e)}
                        />
                    </td>
                    <td className='table-features__cell table__cell'>
                        <input className='table-features__input'
                               name='speed'
                               defaultValue={feature.speed}
                               onChange={(e) => onChangeInput(e)}
                        />
                    </td>
                </tr>
            ))}
        </>
    )
}