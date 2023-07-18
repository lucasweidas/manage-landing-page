'use client';
import Image from 'next/image';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useDevice } from './device';
import { Indicator, UseScrollSliderProps } from '@/interfaces';

const INDICATORS: Array<Indicator> = Array(4)
  .fill(null)
  .map((_, i) => ({ id: i }));

export function Carousel() {
  const [selectedId, setSelectedId] = useState(0);
  const { device } = useDevice();
  const translateX = getTranslateX(selectedId, device === 'desktop');
  const sliderRef = useRef<HTMLDivElement>(null);

  function handleTabChange({ currentTarget }: MouseEvent<HTMLButtonElement>) {
    const id = +currentTarget.dataset.carouselButton!;
    setSelectedId(id);
  }

  useScrollSlider({ sliderRef, setSelectedId });

  return (
    <div className="pt-24 overflow-hidden">
      <div className="lg:flex lg:items-center lg:justify-center cursor-grab" ref={sliderRef}>
        <ul className={`flex ${translateX} transition-transform duration-700 gap-4 motion-reduce:transition-none lg:gap-8 lg:w-[33.75rem] pointer-events-none`}>
          <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md lg:px-10">
            <Image src="/images/avatar-anisha.png" alt="Anisha Li" width={144} height={144} className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4" />
            <h3 className="font-bold text-blue-900" id="carousel-title-0">
              Anisha Li
            </h3>
            <p className="text-sm text-gray-400 mt-4 !leading-relaxed lg:text-base">
              “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
            </p>
          </li>
          <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md lg:px-10">
            <Image src="/images/avatar-ali.png" alt="Ali Bravo" width={144} height={144} className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4" />
            <h3 className="font-bold text-blue-900" id="carousel-title-1">
              Ali Bravo
            </h3>
            <p className="text-sm text-gray-400 mt-4 !leading-relaxed lg:text-base">
              “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more
              focused.”
            </p>
          </li>
          <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md lg:px-10">
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
            <p className="text-sm text-gray-400 mt-4 !leading-relaxed lg:text-base">
              “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
            </p>
          </li>
          <li className="flex-carousel-item px-6 bg-neutral-50 relative pt-16 pb-11 rounded-md lg:px-10">
            <Image
              src="/images/avatar-shanai.png"
              alt="Shanai Gough"
              width={144}
              height={144}
              className="w-18 h-18 absolute -top-9 left-2/4 -translate-x-2/4"
            />
            <h3 className="font-bold text-blue-900" id="carousel-title-3">
              Shanai Gough
            </h3>
            <p className="text-sm text-gray-400 mt-4 !leading-relaxed lg:text-base">
              “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being
              intrusive.”
            </p>
          </li>
        </ul>
      </div>
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

function getTranslateX(id: number, isDesktop: boolean) {
  switch (id) {
    case 0:
      return 'translate-x-0';
    case 1:
      return isDesktop ? '-translate-x-[calc(100%+2rem)]' : '-translate-x-[calc(100%+1rem)]';
    case 2:
      return isDesktop ? '-translate-x-[calc(200%+4rem)]' : '-translate-x-[calc(200%+2rem)]';
    case 3:
      return isDesktop ? '-translate-x-[calc(300%+6rem)]' : '-translate-x-[calc(300%+3rem)]';
    default:
      return '';
  }
}

function useScrollSlider({ sliderRef, setSelectedId }: UseScrollSliderProps) {
  const isDown = useRef(false);
  const startX = useRef(0);
  const currX = useRef(0);

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    function handleDown(e: globalThis.MouseEvent | TouchEvent) {
      e.preventDefault();
      if (!sliderRef.current) return;

      const target = e.target as HTMLElement;
      const targetRect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const { pageX } = 'changedTouches' in e ? e.changedTouches[0] : e;
      const x = pageX - (targetRect.left - bodyRect.left);

      isDown.current = true;
      startX.current = x;
      currX.current = x;
    }

    function handleUp(e: globalThis.MouseEvent | TouchEvent) {
      e.preventDefault();
      if (!sliderRef.current) return;

      const division = Math.trunc(sliderRef.current.offsetWidth / 4);
      const breakPoint = division > 60 ? 60 : division;
      const traveled = startX.current - currX.current;

      if (traveled >= breakPoint) {
        setSelectedId(selectedId => (selectedId === 3 ? 0 : selectedId + 1));
      } else if (traveled <= -breakPoint) {
        setSelectedId(selectedId => (selectedId === 0 ? 3 : selectedId - 1));
      }
      isDown.current = false;
      startX.current = 0;
      currX.current = 0;
    }

    function handleMove(e: globalThis.MouseEvent | TouchEvent) {
      e.preventDefault();
      if (!isDown.current || !sliderRef.current) return;

      const target = e.target as HTMLElement;
      const targetRect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const { pageX } = 'changedTouches' in e ? e.changedTouches[0] : e;
      const x = pageX - (targetRect.left - bodyRect.left);

      currX.current = x;
    }

    function handleLeave(e: globalThis.MouseEvent) {
      e.preventDefault();
      isDown.current = false;
      startX.current = 0;
      currX.current = 0;
    }

    slider.addEventListener('touchstart', handleDown);
    slider.addEventListener('touchend', handleUp);
    slider.addEventListener('touchmove', handleMove);

    slider.addEventListener('mousedown', handleDown);
    slider.addEventListener('mouseup', handleUp);
    slider.addEventListener('mousemove', handleMove);
    slider.addEventListener('mouseleave', handleLeave);

    return () => {
      slider.removeEventListener('touchstart', handleDown);
      slider.removeEventListener('touchend', handleUp);
      slider.removeEventListener('touchmove', handleMove);

      slider.removeEventListener('mousedown', handleDown);
      slider.removeEventListener('mouseup', handleUp);
      slider.removeEventListener('mousemove', handleMove);
      slider.removeEventListener('mouseleave', handleLeave);
    };
  }, [sliderRef, setSelectedId]);
}
