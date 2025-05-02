import {useState} from "react";

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('ALL');

    const handleAdd = text => {
        setItems([...items, {key: getKey(), text, done: false}]);
    }

    const handleFilterChange = value => setFilter(value);

    const displayItems = items.filter(items => {
        if (filter === 'ALL') return true;
        if (filter === 'TODO') return !items.done;
        if (filter === 'DONE') return items.done;
    });

    const handleCheck = checked => {
        const newItems = items.map(item => {
            if (item.key === checked.key) {
                item.done = !item.done;
            }
            return item;
        });
        setItems(newItems);
    };

    return(
        <div className="panel">
            <h1 className="panel-heading">
                ⚛️ React ToDo
            </h1>
        </div>
    )
}