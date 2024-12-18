"use client"
import SearchForm, { SearchFormScema } from '@/components/SearchForm'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

export function Header() {
  const router = useRouter()

  const handleSubmit = async (values: z.infer<typeof SearchFormScema>) => {
    // const data = await Search(values.query)
    router.push("/search/" + values.query)
  }

  return (
    <header className="sticky top-0 z-10 bg-background border-b p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1 max-w-xl">
          <SearchForm handlesubmit={handleSubmit} />
        </div>
        <div className='flex justify-center items-center gap-4 '>
          <SignedOut>
            <SignUpButton mode='modal' />
            <SignInButton mode='modal' />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}

