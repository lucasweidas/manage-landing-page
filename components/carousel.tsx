'use client';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';

type Indicator = { id: number };

const INDICATORS: Array<Indicator> = Array(4)
  .fill(null)
  .map((_, i) => ({ id: i }));

export function Carousel() {
  const [selectedId, setSeletedId] = useState(0);
  const translateX = getTranslateX(selectedId);

  function handleTabChange({ currentTarget }: MouseEvent<HTMLButtonElement>) {
    const id = +currentTarget.dataset.carouselButton!;
    setSeletedId(id);
  }

  return (
    <div className="pt-24 overflow-hidden">
      <ul className={`flex ${translateX} transition-transform duration-700 gap-4 motion-reduce:transition-none`}>
        <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md">
          <Image src="/images/avatar-anisha.png" alt="Anisha Li" width={144} height={144} className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4" />
          <h3 className="font-bold text-blue-900" id="carousel-title-0">
            Anisha Li
          </h3>
          <p className="text-sm text-gray-400 mt-4 leading-loose">
            “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
          </p>
        </li>
        <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md">
          <Image src="/images/avatar-ali.png" alt="Ali Bravo" width={144} height={144} className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4" />
          <h3 className="font-bold text-blue-900" id="carousel-title-1">
            Ali Bravo
          </h3>
          <p className="text-sm text-gray-400 mt-4 leading-loose">
            “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more
            focused.”
          </p>
        </li>
        <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md">
          <Image
            src="/images/avatar-richard.png"
            alt="Richard Watts"
            width={144}
            height={144}
            className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4"
          />
          <h3 className="font-bold text-blue-900" id="carousel-title-2">
            Richard Watts
          </h3>
          <p className="text-sm text-gray-400 mt-4 leading-loose">
            “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
          </p>
        </li>
        <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md">
          <Image src="/images/avatar-shanai.png" alt="Shanai Gough" width={144} height={144} className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4" />
          <h3 className="font-bold text-blue-900" id="carousel-title-3">
            Shanai Gough
          </h3>
          <p className="text-sm text-gray-400 mt-4 leading-loose">
            “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”
          </p>
        </li>
      </ul>
      <ul className="mt-6 flex gap-1.5 justify-center items-center" role="tablist">
        {INDICATORS.map(({ id }) => (
          <button
            key={id}
            role="tab"
            className="appearance-none w-2.5 h-2.5 rounded-full border border-red-500 hover:border-blue-900 aria-selected:bg-red-500 focus-visible:border-blue-900 hover:aria-selected:border-red-500/80 hover:aria-selected:bg-red-500/80 cursor-pointer outline-none transition-colors motion-reduce:transition-none"
            aria-labelledby={`carousel-title-${id}`}
            aria-selected={selectedId === id}
            data-carousel-button={id}
            onClick={handleTabChange}
          />
        ))}
      </ul>
    </div>
  );
}

function getTranslateX(id: number) {
  switch (id) {
    case 0:
      return 'translate-x-0';
    case 1:
      return '-translate-x-[calc(100%+1rem)]';
    case 2:
      return '-translate-x-[calc(200%+2rem)]';
    case 3:
      return '-translate-x-[calc(300%+3rem)]';
    default:
      return '';
  }
}
