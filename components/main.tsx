import Image from 'next/image';
import { Carousel } from './carousel';
import { Device } from './device';

export function Main() {
  return (
    <main>
      <section className="relative mx-auto max-w-xl lg:flex lg:flex-row-reverse lg:max-w-none lg:w-min-lg lg:items-center lg:justify-between before:absolute before:-right-14 before:-top-36 before:w-full before:min-w-[24rem] before:max-w-lg md:before:w-[50.875rem] md:before:max-w-none md:before:-right-80 md:before:-top-96 before:bg-tablet-pattern before:bg-no-repeat before:aspect-square before:bg-contain before:-z-10">
        <div className="px-4 lg:px-0">
          <Image
            priority
            src="/images/illustration-intro.svg"
            alt=""
            width={580}
            height={525}
            className="lg:mx-auto lg:-mr-4"
            aria-hidden="true"
          />
        </div>
        <div className="text-center px-8 lg:px-0 lg:text-start lg:max-w-md">
          <h1 className="text-blue-900 font-bold text-3.5xl xsm:text-4xl !leading-snug lg:text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="text-gray-400 !leading-loose mt-2 text-2sm xsm:text-base lg:mt-6 lg:max-w-[22rem]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <a
            href="#"
            className="bg-red-500 w-36 h-12 font-bold text-white text-sm rounded-full flex items-center justify-center mx-auto mt-7 shadow-lg shadow-red-500/50 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none motion-reduce:transition-none lg:mx-0 lg:mt-10"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="grid gap-14 mt-24 relative mx-auto max-w-xl lg:grid-cols-[1fr_1.3fr] lg:mt-28 lg:max-w-none lg:w-min-lg lg:justify-between before:absolute before:-z-10 before:-right-60 before:-top-96 before:bg-tablet-pattern before:bg-no-repeat before:aspect-square before:bg-contain before:w-full before:min-w-[24rem] before:max-w-lg md:before:max-w-none md:before:w-[50.875rem] md:before:top-auto md:before:right-auto md:before:-bottom-[33rem] md:before:-left-[40rem]">
        <div className="px-8 text-center lg:px-0 lg:text-start lg:max-w-md">
          <h2 className="text-blue-900 font-bold text-2xl !leading-tight xsm:text-3xl lg:text-4xl">
            What’s different about Manage?
          </h2>
          <p className="text-sm text-gray-400 mt-6 !leading-relaxed lg:text-base lg:max-w-[22rem]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="px-4 lg:px-0 lg:max-w-[33rem] lg:justify-self-end">
          <ul className="flex flex-col gap-11 lg:gap-10">
            <li className="grid gap-4 lg:grid-cols-[4rem_auto] lg:gap-x-7 lg:gap-y-3">
              <div className="max-md:bg-red-50 flex gap-4 items-center rounded-l-2.5xl -mr-4 lg:col-span-2 lg:gap-7">
                <span className="bg-red-500 font-bold text-white w-16 h-full flex items-center justify-center rounded-2.5xl shrink-0">
                  01
                </span>
                <h3 className="font-bold text-blue-900 pr-4 py-2 max-md:text-2sm">
                  Track company-wide progress
                </h3>
              </div>
              <p className="text-sm text-gray-400 !leading-relaxed lg:col-start-2 lg:text-base">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </li>
            <li className="grid gap-4 lg:grid-cols-[4rem_auto] lg:gap-x-7 lg:gap-y-3">
              <div className="max-md:bg-red-50 flex gap-4 items-center rounded-l-2.5xl -mr-4 lg:col-span-2 lg:gap-7">
                <span className="bg-red-500 font-bold text-white w-16 h-full flex items-center justify-center rounded-2.5xl shrink-0">
                  02
                </span>
                <h3 className="font-bold text-blue-900 pr-4 py-2 max-md:text-2sm">
                  Advanced built-in reports
                </h3>
              </div>
              <p className="text-sm text-gray-400 !leading-relaxed lg:col-start-2 lg:text-base">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </li>
            <li className="grid gap-4 lg:grid-cols-[4rem_auto] lg:gap-x-7 lg:gap-y-3">
              <div className="max-md:bg-red-50 flex gap-4 items-center rounded-l-2.5xl -mr-4 lg:col-span-2 lg:gap-7">
                <span className="bg-red-500 font-bold text-white w-16 h-full flex items-center justify-center rounded-2.5xl shrink-0">
                  03
                </span>
                <h3 className="font-bold text-blue-900 pr-4 py-2 max-md:text-2sm">
                  Everything you need in one place
                </h3>
              </div>
              <p className="text-sm text-gray-400 !leading-relaxed lg:col-start-2 lg:text-base">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-center mt-18 px-4 mx-auto max-w-xl lg:mt-36 lg:max-w-none lg:px-0">
        <h2 className="text-blue-900 font-bold text-2xl !leading-tight xsm:text-3xl lg:text-4xl">
          What they’ve said
        </h2>
        <Device>
          <Carousel />
        </Device>
        <a
          href="#"
          className="bg-red-500 w-36 h-12 font-bold text-white text-sm rounded-full flex items-center justify-center mx-auto mt-12 shadow-lg shadow-red-500/50 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none motion-reduce:transition-none"
        >
          Get Started
        </a>
      </section>
      <section className="mt-11 bg-red-500">
        <div className="text-center px-8 py-24 before:content-simplify-sm lg:mt-44 flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:items-start lg:px-0 lg:w-min-lg lg:mx-auto lg:before:content-simplify-lg before:absolute isolate relative before:left-0 lg:before:bottom-0 before:-z-10 before:bottom-2/4 max-lg:before:translate-y-2/4 lg:py-16">
          <h2 className="text-3.5xl xsm:text-4xl font-bold text-white !leading-snug lg:max-w-[27.5rem] lg:text-start">
            Simplify how your team works today.
          </h2>
          <a
            href="#"
            className="bg-white w-36 h-12 font-bold text-red-500 text-sm rounded-full flex items-center justify-center hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none motion-reduce:transition-none"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
