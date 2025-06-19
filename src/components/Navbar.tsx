'use client'

import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs';
import React from 'react';
import { Button } from './ui/button';
import Toggle from './Toggle';

export default function Navbar() {
	return (
		<nav className='flex items-center justify-between w-full p-4'>
			<div>
				{/* <Image src={'...'} fill alt='logo'/>  */}
				{/* logo is added here  */}
				<h3>logo</h3>
			</div>
			<div>
				{/*  making a search bar here ..... */}
				<h3>Search</h3>
			</div>
			<div className='flex gap-4'>
				<Toggle/>
				{/* user signin or signup and user button section */}
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton mode='modal'>
						<Button variant='outline'>Sign-In</Button>
					</SignInButton>
					<SignUpButton mode='modal'>
						<Button>Sign-Up</Button>
					</SignUpButton>
				</SignedOut>
			</div>
		</nav>
	);
}
