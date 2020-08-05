import React, { useRef, useEffect } from 'react';
import './App.css';
import { ReactComponent as Scene } from './scene.svg';
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const girl = elements.getElementById('girl');
    const rain = elements.getElementById('rain');
    const umbrella = elements.getElementById('umbrella');

    gsap.set([girl, ...rain.children, umbrella], { autoAlpha: 0 });
    gsap.set(umbrella, { transformOrigin: '50% 100%' });

    const tl = gsap.timeline({ delay: 3, defaults: { ease: 'power2.inOut' } })

    tl.fromTo(girl, { x: '+=300' }, { duration: 1, x: '-=300', autoAlpha: 1 })
      .to(rain.children, { duration: 1, autoAlpha: 1, stagger: 0.1 }, '+=1')
      .fromTo(umbrella, { scaleY: 0 }, { duration: 1.5, autoAlpha: 1, scaleY: 1 }, '-=3')
  });

  return (
    <div ref={wrapper} className="App">
      <Scene />
    </div>
  );
}

export default App;
