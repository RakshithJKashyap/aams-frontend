const FourOhFour = ({ error }) => {
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
          <header className="mb-auto flex justify-center z-50 w-full py-4">
            <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <a
                className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
                href="#"
                aria-label="Brand"
              >
                AAMS
              </a>
            </nav>
          </header>

          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              404
            </h1>
            <h1 className="block text-2xl font-bold text-white"></h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Oops, something went wrong.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find your page.
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center flex-col">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Error
                      </h3>
                    </div>
                    <div className="p-3 bg-gray-700 rounded">{error}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-auto text-center py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-500">© All Rights Reserved. 2022.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
