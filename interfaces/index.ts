import { schema } from '@/schemas/newsletterForm';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { InferType } from 'yup';

export type device = 'mobile' | 'desktop';

export interface DeviceContextValue {
  device: device;
  setDevice?: Dispatch<SetStateAction<device>>;
}

export interface NavGuideProps {
  isOpen: boolean;
  toggleNav: () => void;
  device: 'mobile' | 'desktop';
}

export type Indicator = { id: number };

export type FormData = InferType<typeof schema>;

export interface UseScrollSliderProps {
  sliderRef: RefObject<HTMLElement>;
  setSelectedId: Dispatch<SetStateAction<number>>;
}
