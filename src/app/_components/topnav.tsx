export function TopNav() {
  return (
    <nav className="flex h-16 items-center justify-between bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a
              href="https://t3.gg/docs/t3-core/introduction"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Docs
            </a>
            <a
              href="https://github.com/t3-oss/create-t3-app"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-4">
          <a
            href="https://github.com/t3-oss/create-t3-app"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
