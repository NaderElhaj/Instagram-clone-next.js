import React from 'react'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from './../../components/Header'

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <img src="/images/instagram.png" alt="Logo" className='w-80' />
        <p className="fo nt-xs italic">
            This app is for educational purpose only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => SignIntoProvider(provider.id,{callbackUrl:"/"})}
                className="rounded-lg bg-blue-500 p-3 text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signin
