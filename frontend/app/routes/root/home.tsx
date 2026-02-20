import React from 'react'
import type { Route } from "./+types/home";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Limflow" },
    { name: "description", content: "Welcome to Limflow!" },
  ];
}


const HomePage = () => {
  return (
    <div className="w-full h-full flex item-center justify-center gap-5">
      <Link to="/login">
        <Button className='bg-blue-500 text-white'>Login</Button>
      </Link>
      <Link to="/register">
        <Button className='bg-blue-500 text-white'>Register</Button>
      </Link>
    </div>
  )
}

export default HomePage