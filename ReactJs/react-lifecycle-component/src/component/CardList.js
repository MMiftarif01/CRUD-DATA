import React from "react";
import Card from "./Card";

function CardList({ result }) {
    let data = [];
    if (result.data) {
        console.log(result);
        data = result.data.search || [];
    }
    console.log(data);

    return (
        <div className="result">
            {data.map((item) => (
                <Card key={item.omdbID} movie={item} />
            ))}
            <Card />
        </div>
    );
}

export default CardList;