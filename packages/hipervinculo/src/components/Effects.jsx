import React from 'react';
import {Suspense} from 'react';
import { BrightnessContrast, EffectComposer, DepthOfField, Bloom, Noise, Vignette, Outline } from '@react-three/postprocessing';
import { BlendFunction, OverrideMaterialManager } from 'postprocessing';
import { useRef, useEffect } from 'react';
import { storeApi } from '../state/store';
import { useFrame } from 'react-three-fiber';
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'

const Effects = () => {

  const outlineRef = useRef();
  
  useEffect(() => {

    OverrideMaterialManager.workaroundEnabled = true;
  }, []);

  useFrame(() => {
    if(outlineRef.current) {
      outlineRef.current.selection.set(Object.values(storeApi.getState().outline));
    }
  });
  
  return (
    <Suspense fallback={null}>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.01} />
        <Glitch
    delay={[1.5, 3.5]} // min and max glitch delay
    duration={[0.6, 1.0]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  />
      </EffectComposer>
    </Suspense>
  );
};

export default Effects;
