import Image from "next/image";
                

export default function Home() {
  return (

    <main className="flex min-w-screen min-h-screen items-center justify-center">

      {/* Container */}
      <div className="flex flex-col items-start justify-start min-w-568px min-h-946px py-5 px-0 bg-customWhite">

        {/* Row */}
        <div className="flex justify-start min-w-568px min-h-104px py-5 px-10">
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
          <div className="w-16 h-auto gap-1">
            {/* empty div */}
          </div>
        </div>


        {/* Row */}
        <div className="flex justify-start min-w-568px min-h-104px py-5 px-10">
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
          <div className="w-16 h-auto gap-1">
            {/* empty div */}
          </div>
        </div>

        {/* Row */}
        <div className="flex justify-start min-w-568px min-h-104px py-5 px-10">
          <div>
          <Image
                src="/assets/image3.png"
                alt="Bridge Climb"
                className="dark rounded-xl"
                width={96}
                height={96}
                priority
              />
          </div>
          <div className="flex flex-col items-start justify-center w-328px h-50px py-0 px-4">
            <p className="text-mainHeader text-19 font-Gelion font-500 leading-24">Bridge Climb</p>
              <div className="flex justify-start items-center gap-1">
                <Image
                      src="/assets/Union.png"
                      alt="Location Icon"
                      className="dark gap-1"
                      width={10}
                      height={10}
                      priority
                />
                <p className="text-locationP text-17 font-Gelion font-400 leading-22">Dolor, Sit amet</p>
              </div>
          </div>
          <div className="w-16 h-auto gap-1">
            {/* empty div */}
          </div>
        </div>

        {/* Row */}
        <div className="flex justify-start min-w-568px min-h-104px py-5 px-10">
          <div>
          <Image
                src="/assets/image4.png"
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
          <div className="w-16 h-auto gap-1">
            {/* empty div */}
          </div>
        </div>

        {/* Row */}
        <div className="flex justify-start min-w-568px min-h-104px py-5 px-10">
          <div>
          <Image
                src="/assets/image5.png"
                alt="Clam Bar"
                className="dark rounded-xl"
                width={96}
                height={96}
                priority
              />
          </div>
          <div className="flex flex-col items-start justify-center w-328px h-50px py-0 px-4">
            <p className="text-mainHeader text-19 font-Gelion font-500 leading-24">Clam Bar</p>
              <div className="flex justify-start items-center gap-1">
                <Image
                      src="/assets/Union.png"
                      alt="Location Icon"
                      className="dark gap-1"
                      width={10}
                      height={10}
                      priority
                />
                <p className="text-locationP text-17 font-Gelion font-400 leading-22">Etcetera veni, Vidi vici</p>
              </div>
          </div>
          <div className="w-16 h-auto gap-1">
            {/* empty div */}
          </div>
        </div>

        {/* Row */}
        <div className="flex justify-start min-w-568px min-h-104px py-5 px-10">
          <div>
          <Image
                src="/assets/image6.png"
                alt="Vivid Festival"
                className="dark rounded-xl"
                width={96}
                height={96}
                priority
              />
          </div>
          <div className="flex flex-col items-start justify-center w-328px h-50px py-0 px-4">
            <p className="text-mainHeader text-19 font-Gelion font-500 leading-24">Vivid Festival</p>
              <div className="flex justify-start items-center gap-1">
                <Image
                      src="/assets/Union.png"
                      alt="Location Icon"
                      className="dark gap-1 w-10px h-10px"
                      width={10}
                      height={10}
                      priority
                />
                <p className="text-locationP text-17 font-Gelion font-400 leading-22">Sydney, Australia</p>
              </div>
          </div>
          <div className="w-16 h-auto gap-1">
            {/* empty div */}
          </div>
        </div>

        
        
        
      </div>

    </main>
  );
}
