import {useState} from 'react';
import {FilterBank} from './FilterBank.tsx';

export type FilterValues = 'all' | 'ruble' | 'dollar'
export type MoneyProps = {
    banknote: string,
    nominal: number,
    number: string,
}

export const FilterComponent = () => {

    const [money, setMoney] = useState<MoneyProps[]>([
        {banknote: 'dollar', nominal: 100, number: 'a123456789'},
        {banknote: 'dollar', nominal: 50, number: 'b123456789'},
        {banknote: 'ruble', nominal: 100, number: 'c123456789'},
        {banknote: 'dollar', nominal: 100, number: 'd123456789'},
        {banknote: 'dollar', nominal: 50, number: 'e123456789'},
        {banknote: 'ruble', nominal: 100, number: 'f123456789'},
        {banknote: 'dollar', nominal: 50, number: 'j123456789'},
        {banknote: 'ruble', nominal: 50, number: 'h123456789'}
    ]);

    const [filter, setFilter] = useState<FilterValues>('all');

    let currentMoney = money;

    if (filter === 'ruble') {
        currentMoney = money.filter((m) => m.banknote === 'ruble');
    }

    if (filter === 'dollar') {
        currentMoney = money.filter((m) => m.banknote === 'dollar');
    }

    const onClickFilterHandler = (filter: FilterValues) => {
        setFilter(filter);
    };

    return (
        <>
            <FilterBank currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>

    );
};