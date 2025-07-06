import { currentUser } from '@clerk/nextjs/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function Profile() {
	const authUser = await currentUser();
	if (!authUser) {
		console.log('User is not authenticated');
	}

	return <>{!authUser ? <Unauthenticated /> : <Authenticated />}</>;
}

const Unauthenticated = () => {
	return (
		<div className='sticky '>
			<Card>
				<CardHeader>
					<CardTitle className='text-center text-xl font-semibold'>
						Welcome Back!
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='text-center text-muted-foreground mb-4'>
						Login to access your profile and connect with others.
					</p>
					<SignInButton mode='modal'>
						<Button
							className='w-full'
							variant='outline'>
							Login
						</Button>
					</SignInButton>
					<SignUpButton mode='modal'>
						<Button
							className='w-full mt-2'
							variant='default'>
							Sign Up
						</Button>
					</SignUpButton>
				</CardContent>
			</Card>
		</div>
	);
};

const Authenticated = () => {
	return (
		<div className='bg-[#232323] rounded-xl  w-80 mx-auto shadow-lg'>
			<div className='relative w-full'>
				<div className='absolute right-10 top-8 z-50'>:)</div>
				<div className='h-32 flex items-center justify-center'>
					<Image
						src='/profileBg.jpg'
						alt='Profile Picture'
						className='object-cover w-full h-full'
						width={32}
						height={32}
					/>
				</div>
			</div>
			<div className='relative flex flex-col items-center p-6'>
				{/* Follower/Following */}
				<div
					className='relative flex justify-between items-center w-full mt-2 text-sm'
					style={{ minHeight: 60 }}>
					{/* Centered Profile Image */}
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[130px] z-10'>
						<Image
							src='https://images.unsplash.com/photo-1541519481457-763224276691?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							width={80}
							height={80}
							className='rounded-md border-1 border-white shadow-lg'
						/>
					</div>
					{/* Followers */}
					<div className='flex flex-col items-center'>
						<span className='text-lg'>1984</span>
						<span className='text-xs text-gray-400'>Followers</span>
					</div>
					{/* Following */}
					<div className='flex flex-col items-center'>
						<span className='text-lg'>1984</span>
						<span className='text-xs text-gray-400'>Following</span>
					</div>
				</div>

				{/* Name and Username */}
				<div className='mt-4 text-center space-y-2'>
					<div className='text-lg font-semibold text-white'>Evgen Ledo</div>
					<div className='text-gray-400 text-sm'>@ledoteam</div>
				</div>
				{/* Bio */}
				<div className='m-4 text-center text-gray-200 text-sm'>
					<span
						role='img'
						aria-label='spark'>
						🌟
					</span>{' '}
					Hello, I&apos;m UX/UI designer. Open to the new projects.{' '}
					<span
						role='img'
						aria-label='spark'>
						🌟
					</span>
				</div>
				{/* My Profile Button */}
				<Link href='' className='w-full'>
					<Button
						variant='outline'
						className='w-full mt-4'>
						My Profile
					</Button>
				</Link>
			</div>
		</div>
	);
};
