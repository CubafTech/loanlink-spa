import { Store,Building2,Landmark,  CreditCard } from 'lucide-react';

const features = [
  {
    name: 'Micro business Loans',
    description:
      "Empower your small-scale enterprise with LoanLinkapos;s Micro-Business Loans. Access fast, flexible financing solutions tailored to the unique needs of micro-entrepreneurs, enabling growth and success.",
        icon: Store,
    bgColor:'bg-[#f2f0ed]'
  },
  {
    name: 'Small Enterprise Loans',
    description:
      "Fuel your small business dreams with LoanLink's Small Enterprise Loans. Secure affordable capital for expansion, equipment, or working capital, and take your business to the next level.",
      icon: Building2,
    bgColor:'bg-[#f2f0ed]'
  },
  {
    name: 'Medium Enterprise Loans',
    description:
      "Drive sustainable growth for your medium-sized enterprise with LoanLink's Medium Enterprise Loans. Access substantial funding options and strategic financial support to scale your operations and reach new heights.",
      icon: Landmark,
      bgColor:'bg-[#e9eff6]'

  },
  {
    name: "Merchant Cash Advances(MCA's)",
    description:
      "Our Merchant Cash Advances offer a quick and convenient financing solution for businesses that rely on credit card sales. Whether it's seizing growth opportunities, managing cash flow, or covering unforeseen expenses, we've got you covered.",
      icon: CreditCard,
    bgColor:'bg-[#fbf3ee]'
  },
]

export default function Feature({bgColor}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h4 className="text-base font-semibold leading-7 text-indigo-600">Grow faster with </h4>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products that meets your buiness goals
          </h1>
          <h4 className="mt-6 text-lg leading-8 text-gray-600">
            you can get quick loans to fund that your next project/products with minimal interest.
          </h4>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`relative pl-16 ${feature.bgColor}  rounded-3xl p-3`}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
