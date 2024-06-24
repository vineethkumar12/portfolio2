import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = (props) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: false,
        "max-glare": 0.5,
      });
    }
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      {props.children}
    </div>
  );
};

export default Tilt;
