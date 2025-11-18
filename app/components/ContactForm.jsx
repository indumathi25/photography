'use client';
import React from 'react';

export default function ContactForm() {
  return (
    <section id='contact' className='py-6 p-8'>
      <div className='container-padding'>
        <h2 className='text-2xl font-semibold'>Get in touch</h2>
        <p className='mt-2 text-gray-600'>
          I&apos;m available for commissions and collaborations. Send a message
          below.
        </p>

        <form
          className='mt-6 max-w-xl bg-white p-6 rounded-lg shadow'
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='grid grid-cols-1 gap-4'>
            <label className='flex flex-col'>
              <span className='text-sm text-gray-700 mb-1'>Name</span>
              <input
                name='name'
                className='border rounded px-3 py-2'
                placeholder='Your name'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-sm text-gray-700 mb-1'>Email</span>
              <input
                name='email'
                type='email'
                className='border rounded px-3 py-2'
                placeholder='you@example.com'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-sm text-gray-700 mb-1'>Message</span>
              <textarea
                name='message'
                className='border rounded px-3 py-2 h-32'
                placeholder='Tell me about your project'
              />
            </label>
            <div>
              <button
                type='submit'
                className='bg-black text-white px-4 py-2 rounded'
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
