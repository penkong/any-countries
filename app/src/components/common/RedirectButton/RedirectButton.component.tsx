import Link from 'next/link'
import React from 'react'

export const RedirectButton = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-2 gap-1">
        <div className="text-center sm:text-left whitespace-nowrap">
          <Link href="/register">
            <span className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block align-text-top"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              <span className="inline-block ml-4">
                Haven't account? Register
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
