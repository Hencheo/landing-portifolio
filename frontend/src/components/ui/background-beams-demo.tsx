'use client';

import React from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="h-[400px]">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
        Desenvolvimento Web{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(0,_140,_255,_0.4))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-500 via-blue-400 to-cyan-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Moderno e Elegante.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 py-4">
            <span className="">Moderno e Elegante.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

export { BackgroundBeamsWithCollisionDemo }; 