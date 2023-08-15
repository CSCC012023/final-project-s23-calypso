import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { set } from 'react-hook-form'


interface ActiveFilter {
  value: string;
  label: string;
  checked: boolean;
}

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'pricelow', name: 'Price: Low to High' },
  { id: 'pricehigh', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest Arrivals' },
];

const filters = [
  {
    id: 'medium',
    name: 'Medium',
    options: [
      { value: 'painting', label: 'Painting', checked: false },
      { value: 'drawing', label: 'Drawing', checked: false },
      { value: 'sculpture', label: 'Sculpture', checked: false },
      { value: 'digitalmedium', label: 'Digital', checked: false },
      { value: 'photography', label: 'Photography', checked: false },
      { value: 'prints', label: 'Prints', checked: false },
    ],
  },
  {
    id: 'material',
    name: 'Material',
    options: [
      { value: 'acrylic', label: 'Acrylic', checked: false },
      { value: 'artpaper', label: 'Art Paper', checked: false },
      { value: 'canvas', label: 'Canvas', checked: false },
      { value: 'digitalmaterial', label: 'Digital', checked: false },
      { value: 'oil', label: 'Oil', checked: false },
      { value: 'mixedmedia', label: 'Mixed Media', checked: false },
    ],
  },
  {
    id: 'rarity',
    name: 'Rarity',
    options: [
      { value: 'unique', label: 'Unique', checked: false },
      { value: 'limited', label: 'Limited Edition', checked: false },
      { value: 'open', label: 'Open Edition', checked: false },
    ],
  },
]


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterBar(props: any) {
  const [open, setOpen] = useState(false)
  const [currentSortOption, setCurrentSortOption] = useState('')
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([])

  const handleSortOptionClick = (sortOption: string) => {
    let currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set('sort', sortOption);
    window.history.pushState({}, '', window.location.pathname + "?" + currentUrlParams.toString());
    setCurrentSortOption(sortOption);
  }

  const addFilterOption = (filter: ActiveFilter) => {
    // Add filter to the activeFilters array
    setActiveFilters([...activeFilters, filter]);
  }

  const removeFilterOption = (filter: ActiveFilter) => {
    // Remove filter from the activeFilters array
    setActiveFilters((activeFilters) => activeFilters.filter((item) => item.value !== filter.value))
  }

  const handleFilterUpdate = (checked: boolean, filter: ActiveFilter) => {
    // If clicked and checked, call handleFilterOptionClick
    if (!checked) {
      filter.checked = true;
      addFilterOption(filter);
    }
    // If clicked and unchecked, call handleRemoveFilterOptionClick
    else {
      filter.checked = false;
      removeFilterOption(filter);
    }
  }

  useEffect(() => {
    let currentUrlParams = new URLSearchParams(window.location.search);
    let initSort = currentUrlParams.get('sort') || '';
    let initFilters = currentUrlParams.getAll('filter');
    window.history.pushState({}, '', window.location.pathname + "?" + currentUrlParams.toString());


    if (initSort !== '') {
      handleSortOptionClick(initSort);
    }

    if (initFilters.length > 0) {
      let tempFilters: ActiveFilter[] = [];
      initFilters.forEach((filterStr) => {
        //If the filterStr is in filters, add it to tempFilters
        filters.forEach((filter) => {
          filter.options.forEach((option) => {
            if (option.value === filterStr) {
              option.checked = true;
              tempFilters.push(option);
            }
          });
        });
      })
      setActiveFilters([...activeFilters, ...tempFilters]);
    }
  }, [])

  useEffect(() => {
    async function fetchArtworks() {
      let currentUrlParams = new URLSearchParams(window.location.search);
      await currentUrlParams.delete('filter');
      activeFilters.map((item) => { currentUrlParams.append('filter', item.value) });
      window.history.pushState({}, '', window.location.pathname + "?" + currentUrlParams.toString());
    }
    fetchArtworks();
  }, [activeFilters])


  return (
    <div className="bg-white">
      {/* Category Sidebar for Small Windows */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.name} className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>



      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        {/* Sort Options */}
        <div className="relative pt-4 z-10 bg-gray-100 border-b border-gray-200 pb-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.id}>
                        {({ active }) => (
                          <a
                            className={classNames(
                              option.id === currentSortOption ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                            onClick={() => handleSortOptionClick(option.id)}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>



            {/* Filter Options */}

            <button
              //Opens the filter panel
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">

                {/* Filter Dropdown Sections */}
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  {/* Goes through each filter category */}
                  {filters.map((section, sectionIdx) => (
                    <Popover key={section.id} className="px-4 relative inline-block text-left">
                      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>{section.name}</span>
                        <ChevronDownIcon
                          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      {/* Transition for Open/Close Dropdown Menu */}
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">

                            {/* Checkbox for Filters */}
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-gray-100 focus:ring-indigo-500"
                                  onClick={() => handleFilterUpdate(option.checked, option)}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap hover:text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.value}
                    className="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                      onClick={() => handleFilterUpdate(activeFilter.checked, activeFilter)}
                    >
                      <span className="sr-only">Remove filter for {activeFilter.label}</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
