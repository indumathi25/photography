import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <h1 className='text-4xl font-bold text-zinc-900 dark:text-zinc-100'>
        Welcome to Next.js!
      </h1>
      <Image
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
        className='ml-4'
      />
      <Link href='/users' className='ml-4 text-blue-500'>
        Go to Users Page
      </Link>
      <ProductCard />
    </div>
  );
}
