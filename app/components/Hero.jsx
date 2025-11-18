import Link from 'next/link';
import React from 'react';

export default function Hero() {
  const bg =
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=60';
  return (
    <section id='home' className='relative'>
      <div
        className='h-[60vh] md:h-[75vh] flex items-center p-10'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* subtle dark overlay for contrast */}
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='container-padding relative text-white max-w-2xl'>
          <h1 className='text-4xl md:text-6xl font-extrabold drop-shadow-lg'>
            Capturing life, one moment at a time
          </h1>
          <p className='mt-4 text-lg md:text-xl drop-shadow'>
            Fine art photography and personal stories. Based in the Netherlands.
          </p>
          <Link
            href='/gallery'
            className='inline-block mt-6 bg-white text-black px-6 py-3 rounded-md font-medium shadow'
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
