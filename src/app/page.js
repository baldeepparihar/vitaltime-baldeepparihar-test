import Image from "next/image";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
                

export default function Home(provided) {
  console.log('PROVIDED:', provided)
  return (

    <main className="flex min-w-screen min-h-screen items-center justify-center">
        

      {/* Container */}
      <ul ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col items-start justify-start min-w-568px min-h-946px py-5 px-0 bg-customWhite">

        {/* Row */}
        <li className="flex justify-start min-w-568px min-h-104px py-5 px-10">
          <div>
          <Image
                src="/assets/image1.png"
                alt="Scotland Island"
                className="dark rounded-xl"
                width={96}
                height={96}
                priority
              />
          </div>
          <div className="flex flex-col items-start justify-center w-328px h-50px py-0 px-4">
            <p className="text-mainHeader text-19 font-Gelion font-500 leading-24">Scotland Island</p>
              <div className="flex justify-start items-center gap-1">
                <Image
                      src="/assets/Union.png"
                      alt="Location Icon"
                      className="dark gap-1"
                      width={10}
                      height={10}
                      priority
                />
                <p className="text-locationP text-17 font-Gelion font-400 leading-22">Sydney, Australia</p>
              </div>
          </div>
          <div className="w-16 h-auto gap-1"></div>
        </li>
        {/* Row */}
        <li className="flex justify-start min-w-568px min-h-104px py-5 px-10">
          <div>
          <Image
                src="/assets/image2.png"
                alt="The Charles Grand Brasserie & Bar"
                className="dark rounded-xl"
                width={96}
                height={96}
                priority
              />
          </div>
          <div className="flex flex-col items-start justify-center w-328px h-50px py-0 px-4">
            <p className="text-mainHeader text-19 font-Gelion font-500 leading-24">The Charles Grand Brasserie & Bar</p>
              <div className="flex justify-start items-center gap-1">
                <Image
                      src="/assets/Union.png"
                      alt="Location Icon"
                      className="dark gap-1"
                      width={10}
                      height={10}
                      priority
                />
                <p className="text-locationP text-17 font-Gelion font-400 leading-22">Lorem ispsum, Dolor</p>
              </div>
          </div>
          <div className="w-16 h-auto gap-1"></div>
        </li> 
      </ul>
      {provided.placeholder}
    

    </main>
  );
}
