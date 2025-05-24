import { useEffect, useRef } from 'react';

export default function HydrationDebug({ children }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const serverHTML = ref.current.innerHTML;
      setTimeout(() => {
        const clientHTML = ref.current.innerHTML;
        if (serverHTML !== clientHTML) {
          console.warn('[Hydration Mismatch] Detected here:', ref.current);
        }
      }, 0);
    }
  }, []);

  return <div ref={ref}>{children}</div>;
}
