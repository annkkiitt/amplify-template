"use client"

import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";

import { Authenticator, Button, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';

Amplify.configure(outputs);

export default function Home() {

  const parentDivStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7F8',
  };
  
    return (
      // <div className='h-screen flex justify-center items-center bg-[#F5F7F8]'>
      <div style={parentDivStyle}>
        <Authenticator loginMechanisms={['email']} socialProviders={['google']} signUpAttributes={['name']}>
        {({ signOut, user }) => {
          return (
            <main>
              <HomePage/>
              {/* <Button onClick={signOut}>Sign out</Button> */}
            </main>
          )
        }}
      </Authenticator>
      </div>

    );
}
