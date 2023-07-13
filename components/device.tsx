import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext, useEffect } from 'react';

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
