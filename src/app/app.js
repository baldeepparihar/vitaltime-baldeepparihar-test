import './fonts.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Home from './page';

export default function App({ Component, pageProps }) {

    function handleOnDragEnd(result) {}

    return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='boxes'>
        {(provided) => (
            <div>
                <Home ref={provided.innerRef} {...provided.droppableProps} provided={provided} />
                <Component {...pageProps} />
            </div>
        )}
            
        </Droppable>
    </DragDropContext>
    )
  }