import Image from 'next/image';
import { Carousel } from './carousel';

export function Main() {
  return (
    <main>
      <section>
        <div className="px-4">
          <Image src="/images/illustration-intro.svg" alt="" width={580} height={525} priority aria-hidden="true" />
        </div>
        <div className="text-center px-8">
          <h1 className="text-blue-900 font-bold text-4xl leading-snug">Bring everyone together to build better products.</h1>
          <p className="text-gray-400 !leading-loose mt-2 text-2sm xsm:text-base">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
          <a
            href="#"
            className="bg-red-500 w-36 h-12 font-bold text-white text-sm rounded-full flex items-center justify-center mx-auto mt-7 shadow-lg shadow-red-500/50 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="mt-24">
        <div className="px-8 text-center">
          <h2 className="text-blue-900 font-bold text-3xl">What’s different about Manage?</h2>
          <p className="text-sm text-gray-400 mt-6 leading-loose">
            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
          </p>
        </div>
        <div className="px-4 mt-14">
          <ul className="flex flex-col gap-11">
            <li className="grid gap-4">
              <div className="bg-red-50 flex gap-4 items-center rounded-l-2.5xl -mr-4">
                <span className="bg-red-500 font-bold text-white w-16 h-full flex items-center justify-center rounded-2.5xl shrink-0">01</span>
                <h3 className="font-bold text-blue-900 pr-4 py-2">Track company-wide progress</h3>
              </div>
              <p className="text-sm text-gray-400 leading-loose">
                See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of
                details. Never lose sight of the bigger picture again.
              </p>
            </li>
            <li className="grid gap-4">
              <div className="bg-red-50 flex gap-4 items-center rounded-l-2.5xl -mr-4">
                <span className="bg-red-500 font-bold text-white w-16 h-full flex items-center justify-center rounded-2.5xl shrink-0">02</span>
                <h3 className="font-bold text-blue-900 pr-4 py-2">Advanced built-in reports</h3>
              </div>
              <p className="text-sm text-gray-400 leading-loose">
                Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to
                keep key stakeholders informed.
              </p>
            </li>
            <li className="grid gap-4">
              <div className="bg-red-50 flex gap-4 items-center rounded-l-2.5xl -mr-4">
                <span className="bg-red-500 font-bold text-white w-16 h-full flex items-center justify-center rounded-2.5xl shrink-0">03</span>
                <h3 className="font-bold text-blue-900 pr-4 py-2">Everything you need in one place</h3>
              </div>
              <p className="text-sm text-gray-400 leading-loose">
                Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team
                productivity solution.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-center mt-18 px-4">
        <h2 className="text-blue-900 font-bold text-3xl">What they’ve said</h2>
        <Carousel />
        <a
          href="#"
          className="bg-red-500 w-36 h-12 font-bold text-white text-sm rounded-full flex items-center justify-center mx-auto mt-12 shadow-lg shadow-red-500/50 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none"
        >
          Get Started
        </a>
      </section>
      <section className="mt-11 bg-red-500 text-center px-8 py-24 bg-simplify-sm bg-no-repeat bg-left-center">
        <h2 className="text-4xl font-bold text-white leading-snug">Simplify how your team works today.</h2>
        <a
          href="#"
          className="bg-white w-36 h-12 font-bold text-red-500 text-sm rounded-full flex items-center justify-center mx-auto mt-6 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
