export interface ITrain {
    name?: string;
    description?: string;
    characteristics?: ICharacteristic[];
}

export interface ICharacteristic {
    speed?: number;
    force?: number;
    engineAmperage?: number;
}

export type Inputs = {
    inputs: [];
};

export type SelectedTrain = {
    train: {
        name?: string;
        description?: string;
        characteristics?: ICharacteristic[];
    }
}