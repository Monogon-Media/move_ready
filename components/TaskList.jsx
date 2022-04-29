import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function TaskList() {
    return (
        <div className="px-4 pt-16 w-full">
            <div className="p-2 mx-auto w-full max-w-md bg-white rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg focus:outline-none hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>What is your refund policy?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : 'w-5 h-5 text-purple-500' }`}
                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                If you're unhappy with your purchase for any reason, email us
                                within 90 days and we'll refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg focus:outline-none hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Do you offer technical support?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : 'w-5 h-5 text-purple-500'}`}
                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                No.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
