import Image from "next/image";
                

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    


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

        
        
        
      </div>

    </main>
  );
}
