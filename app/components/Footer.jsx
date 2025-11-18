import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-white border-t mt-12'>
      <div className='container-padding py-6 text-center text-sm text-gray-600'>
        © {new Date().getFullYear()} Vinay — Photography
      </div>
    </footer>
  );
}
