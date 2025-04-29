import React from 'react';

const customfunction = (input) => {
    if (input === null) return 'null';
    if (typeof input === 'string') return `"${input}"`;
    if (typeof input === 'number' || typeof input === 'boolean') return String(input);

    if (Array.isArray(input)) {
        const arrayItems = input.map(item => customfunction(item));
        return `[${arrayItems.join(',')}]`;
    }

    if (typeof input === 'object') {
        let value = Object.keys(input).map(key => {
            return `"${key}" : ${customfunction(input[key])}`;
        });
        return `{${value.join(',')}}`;
    }

    return undefined;
}


function JsonStringify() {
    const input = {
        name: "Ram",
        age: 27,
        vehicles: {
            car: "limousine",
            bike: "ktm-duke",
            airlines: {
                lufthansa: "Air123",
                British_airways: "Brt707"
            }
        }
    };

   

    return (
        <>
            <h1>Data:</h1>
            {Object.entries(input).map(([key, value]) => (
                <div key={key}>
                    <strong> {typeof key === 'object' || 'Json' ? customfunction(key) : String(key)} :</strong> {typeof value === 'object' || 'Json' ? customfunction(value) : String(value)}
                </div>
            ))}
        </>

    );
}

export default JsonStringify;



