'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

export default function LenisWrapper({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}
