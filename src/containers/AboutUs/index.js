import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
    {
        question: "What is SendMe.Gives?",
        answer:
            "SendMe.Gives is a mobile platform that allows you to give spare change from daily purchase to a Missionary of your choice.",
    },
    {
        question: "How do Round-Ups Work?",
        answer:
            "Round-Ups allow you to round up spare change from your daily purchases. For Example, if you buy a coffee for $3.25, we will automatically round up $0.75 for your Missionary.",
    },
    {
        question: "Can I pause Round-Up Payments?",
        answer:
            "Yes. The Sponsor and Missionary and pause Round-Ups anytime from the app.",
    },
    {
        question: "Can I make One-Time Gifts?",
        answer:
            "Yes, One-Time gifts can easily be made within the app.",
    },
    {
        question: "Are Spare-Change Apps Secure?",
        answer:
            "Yes! Security is essential to everything we do. SendMe.Gives uses the same secure technology as major financial apps and services like Acorns, Venmo, Robinhood, Betterment, Coinbase and Stripe.",
    },
    {
        question: "When are Round-Ups given to the Missionary?",
        answer:
            "Your Round-Ups are given to the missionary every other Friday.",
    },
    {
        question: "Why are gifts not tax deductible?",
        answer:
            "Simply put, more Missionaries will be able to take advantage of the Round-Up giving.  However, we are considering a tax-deductible option for the future.",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function AboutUs() {
    return (
        <div className="md:pl-64 flex flex-col flex-1">
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">About Us</h1>
                    <p className="text-base text-gray-500">SendMe is the easiest way to support your favorite missionaries. Support through one-time payments or round up the change from every transaction to send in support each week.</p>
                </div>
            </header>
            <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">FAQ's</h1>
                </div>
            </header>
            <main>
                <div className="lg:px-8">
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </main>
        </div>
    )
}