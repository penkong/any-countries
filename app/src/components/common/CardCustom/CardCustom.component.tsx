import React from 'react'

export const CardCustom = () => (
  <div className="sm:w-1/4 p-2">
    <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
      <div className="mb-3">
        <img
          className="w-auto mx-auto rounded-full"
          src="https://i.pravatar.cc/150?img=66"
          alt=""
        />
      </div>
      <h2 className="text-xl font-medium text-gray-700">Pande Muliada</h2>
      <span className="text-blue-500 block mb-5">Front End Developer</span>

      <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full">
        Hire
      </a>
    </div>
  </div>
)
