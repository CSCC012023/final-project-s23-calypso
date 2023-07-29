import React, { useEffect, useState } from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'

import { RefreshIcon } from '@heroicons/react/solid'
import axios from 'axios'

function AdminDashboardPage() {
  const [pages, setPages] = useState([])
  const [artworks, setArtworks] = useState([])

  const getArtworks = async () => {
    axios
      .get(`http://localhost:8080/api/v0/artworks/all?sort=visits`, {})
      .then((response) => {
        const data = response.data
        setArtworks(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const getPages = async () => {
    axios
      .get(`http://localhost:8080/api/v0/dashboard/admin`, {})
      .then((response) => {
        const data = response.data
        setPages(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    getPages()
    getArtworks()
  })

  return (
    <div className="bg-darkGrey flex flex-col">
      {/* Header Navigation bar */}
      <div className="">
        <HeaderNavBar />
      </div>

      <div className="flex-1 pb-32">
        <div className="sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="pt-8 pl-4 sm:flex-auto font-medium text-white text-xl">
              Page analytics
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-black bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                onClick={() => getPages()}
              >
                Refresh
                <RefreshIcon
                  className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-white:"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 w-10/12 text-left text-sm font-bold text-gray-900 sm:pl-6"
                        >
                          Page
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                        >
                          Visitors Count
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {pages.map((page: any) => (
                        <tr key={page.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              {/* <div className="h-16 w-16 flex-shrink-0">
                                                                <img className="h-full w-full rounded-md" src={page.imageSrc} alt="" />
                                                            </div> */}
                              <div className="ml-4 pl-4">
                                <div className="font-medium text-gray-900">
                                  {page.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold">
                            {page.visits}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="py-8 pl-4 sm:flex-auto font-medium text-white text-xl">
              Artwork analytics
            </div>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Artwork
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Release Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Visitors Count
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {artworks.map((artwork: any) => (
                    <tr key={artwork.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0">
                            <img
                              className="h-full w-full rounded-md"
                              src={artwork.imageSrc}
                              alt=""
                            />
                          </div>
                          <div className="ml-4 pl-4">
                            <div className="font-medium text-gray-900">
                              {artwork.name}
                            </div>
                            <div className="text-gray-500">
                              {artwork.artistName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">${artwork.price}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{artwork.date}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-bold">
                        {artwork.visits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default AdminDashboardPage
