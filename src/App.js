import React, {useState} from 'react';
import './App.css';

function App() {
    let currentItem = null;
    const [arr, setArr] = useState([
        {id: 0, name: 'first'},
        {id: 1, name: 'second'},
        {id: 2, name: 'third'},
        {id: 3, name: 'forth'}
    ]);

    const allowDrop = e => {
        e.preventDefault();
    };

    const drop = e => {
        e.preventDefault();
        if (+e.target.dataset.id !== +currentItem.id) {
            const newArr = arr.slice();
            newArr.splice(arr.findIndex(item => item.id === currentItem.id), 1);
            newArr.splice(+e.target.dataset.index, 0, currentItem);
            setArr(newArr);
        }
    };

    return (
        <div className="App" onDragOver={allowDrop} onDrop={drop}>

            {
                arr.map((item, i) => {
                    return (
                        <div className={"item"}
                             key={item.id}
                             draggable
                             data-index={i}
                             onMouseDown={() => currentItem = item}
                        >
                            {item.name}
                        </div>
                    )
                })
            }

        </div>
    );
}

export default App;
