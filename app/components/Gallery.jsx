import React from 'react';

const IMAGES = [
  {
    src: 'https://www.sharmilajitan.nl/wp-content/uploads/2022/04/Cakesmash-fotograaf-amsterdam-cakesmash-utrecht.png',
    title: 'Birthday shoot',
  },
  {
    src: 'https://www.sharmilajitan.nl/wp-content/uploads/2022/03/Newborn-shoot-almere-fotograaf-amsterdam-fotoshoot-babys-lelystad.jpg',
    title: 'New born baby shoot',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60',
    title: 'Forest path',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
    title: 'Waves',
  },
  {
    src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=60',
    title: 'Portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60',
    title: 'Mountains',
  },
];

export default function Gallery() {
  return (
    <section id='gallery' className='py-6 bg-gray-50 p-6'>
      <div className='container-padding'>
        <h2 className='text-3xl font-semibold'>Portfolio</h2>
        <p className='mt-2 text-gray-600'>A selection of recent work.</p>

        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className='overflow-hidden rounded-lg bg-white shadow'
            >
              <a href={img.src} target='_blank' rel='noreferrer noopener'>
                <img
                  loading='lazy'
                  src={img.src}
                  alt={img.title}
                  className='w-full h-56 object-cover transform hover:scale-105 transition duration-300'
                />
              </a>
              <figcaption className='p-3 text-sm text-gray-600'>
                {img.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
