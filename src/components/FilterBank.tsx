import type {FilterValues, MoneyProps} from './FilterComponent.tsx';
import {Button} from './Button.tsx';

type Props = {
    currentMoney: MoneyProps[],
    onClickFilterHandler: (filter: FilterValues) => void,
}

export const FilterBank = ({currentMoney, onClickFilterHandler}: Props) => {

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button title={'all'} callBack={() => onClickFilterHandler('all')}/>
                <Button title={'ruble'} callBack={() => onClickFilterHandler('ruble')}/>
                <Button title={'dollar'} callBack={() => onClickFilterHandler('dollar')}/>
            </div>
        </>
    );
};