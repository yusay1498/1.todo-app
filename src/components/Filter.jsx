import classNames from "classnames";

function Filter({ value, onChange }) {
    const handleClick = (key, event) => {
        event.preventDefault();
        onChange(key);
    };

    return (
        <div className="panel-tabs">
            <a
                href="#"
                onClick={handleClick.bind(null, 'ALL')}
                className={classNames({ 'is-active': value === 'ALL' })}
            >All</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'TODO')}
                className={classNames({ 'is-active': value === 'TODO' })}
            >ToDo</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'DONE')}
                className={classNames({ 'is-active': value === 'DONE' })}
            >Done</a>
        </div>
    );
}