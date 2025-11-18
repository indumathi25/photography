import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Gallery />
      <ContactForm />
    </>
  );
}
