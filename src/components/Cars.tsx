export const Cars = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ];

    return (
        <>
            <table>
                <thead>
                <tr>
                    {topCars.map((car,index) => {
                        return <th key={index}>{car.manufacturer}</th>;
                    })}
                </tr>
                <tr>
                    {topCars.map((car,index) => {
                        return <td key={index}>{car.model}</td>;
                    })}
                </tr>
                </thead>
            </table>
        </>
    );
};