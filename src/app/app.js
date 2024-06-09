import './fonts.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import Home from './page';

export default function App({ Component, pageProps }) {
    const [list, setList] = useState(
        [
            { id: 0, mainTitle: 'Scotland Island', location: 'Sydney, Australia'},
            { id: 1, mainTitle: 'The Charles Grand Brasserie & Bar', location: 'Lorem ispsum, Dolor'},
            { id: 2, mainTitle: 'Bridge Climb', location: 'Dolor, Sit amet'},
            { id: 3, mainTitle: 'Scotland Island', location: 'Sydney, Australi'},
            { id: 4, mainTitle: 'Clam Bar', location: 'Etcetera veni, Vidi vici'},
            { id: 5, mainTitle: 'Vivid Festival', location: 'Sydney, Australia'},
        ]
    )

    const onDragEnd = (result) => {
        const { destination, source } = result;
    
        if (!destination) {
          return;
        }
    
    const newList = Array.from(list);
    const [movedList] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, movedList);
    
    setList(newList);

    return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
        
        <Droppable droppableId='boxes'>
        <Draggable>
    
        {/* {(provided) => ( */}
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="min-h-screen p-5 bg-gray-100"
            >
                <Home ref={provided.innerRef} {...provided.droppableProps} provided={provided} list={ {list} }/>
                {provided.placeholder}
                <Component {...pageProps} />
            </div>
        {/* )} */}
    
        </Draggable>
        </Droppable>
        
    </DragDropContext>
    )
    }}