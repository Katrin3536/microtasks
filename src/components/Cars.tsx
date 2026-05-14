export const Cars = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ];

    return (
        <>
            <table>
                <tr>
                    {topCars.map((car) => {
                        return <th>{car.manufacturer}</th>;
                    })}
                </tr>
                <tr>
                    {topCars.map((car) => {
                        return <td>{car.model}</td>;
                    })}
                </tr>

            </table>
        </>
    );
};