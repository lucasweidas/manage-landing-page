import { schema } from '@/schemas/newsletterForm';
import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { InferType } from 'yup';

export type device = 'mobile' | 'desktop';

export interface DeviceContextValue {
  device: device;
  setDevice?: Dispatch<SetStateAction<device>>;
}

export interface MobileGuideWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export type Indicator = { id: number };

export type FormData = InferType<typeof schema>;

export interface UseScrollSliderProps {
  sliderRef: RefObject<HTMLElement>;
  setSelectedId: Dispatch<SetStateAction<number>>;
}
