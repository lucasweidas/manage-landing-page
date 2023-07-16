'use client';

import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext, useEffect, useLayoutEffect } from 'react';

type device = 'mobile' | 'desktop';
interface DeviceContextValue {
  device: device;
  setDevice?: Dispatch<SetStateAction<device>>;
}

const DeviceContext = createContext<DeviceContextValue>({ device: 'mobile' });

export function Device({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<device>('mobile');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    function handleChange({ matches }: MediaQueryListEvent) {
      setDevice(matches ? 'desktop' : 'mobile');
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useLayoutEffect(() => {
    setDevice(window.innerWidth >= 1024 ? 'desktop' : 'mobile');
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        device,
        setDevice,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  return useContext(DeviceContext);
}
