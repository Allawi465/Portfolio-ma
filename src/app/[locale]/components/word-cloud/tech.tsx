'use client';
import React, { useEffect, useState } from 'react';
import BallCanvas from './index';
import { Technologies } from '../../asset/constants';

const Tech = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const smallDeviceTechnologies = [
    'Next.js',
    'React JS',
    'Three JS',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
  ];

  const technologiesToShow = isSmallDevice
    ? Technologies.filter((technology) =>
        smallDeviceTechnologies.includes(technology.name)
      )
    : Technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-10 md:w-10/12 w-full m-auto mt-2 md:mt-10 mb-4">
      {technologiesToShow.map((technology) => (
        <div
          className="w-24 h-24 md:w-28 md:h-28  cursor-pointer	cursor: pointer;"
          key={technology.name}
        >
          <BallCanvas image={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
