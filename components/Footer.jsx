import Logo from "./Logo";

export const Footer = () => {
  return (
    <div className="relative mt-16 ske">
      <Logo />
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="text-xl font-bold tracking-wide text-black uppercase">
                LoanLink: Bridging Financial Aspirations
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <h4 className="text-sm text-primary">
              LoanLink is your trusted partner in financial success. We connect borrowers with tailored loan solutions and empower lenders to invest in promising opportunities. Join our lending marketplace and bridge the gap between financial aspirations
            and reality.
              </h4>
              <h4 className="mt-4 text-sm text-primary">
                 Grow, invest, and prosper with LoanLink today.
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <h4 className="font-semibold tracking-wide text-teal-accent-400">
                Category
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold tracking-wide text-teal-accent-400">
                Cherry
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold tracking-wide text-teal-accent-400">
                Apples
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold tracking-wide text-teal-accent-400">
                Business
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-primary hover:text-teal-accent-400"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <h4 className="text-sm text-black">
            © Copyright 2023 CabufTech Team. All rights reserved.
          </h4>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
           
            <a
              href="/"
              className=""
            >
                          <div className="flex items-center ring-1 ring-gray-300 p-2 rounded-2xl">
                              <h4>System Status:</h4>
                              <h4 className="text-sm ml-4 ">All system operational</h4>
                              <div className="ml-3 w-3 h-4 rounded-full bg-green-500 animate-pulse"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer