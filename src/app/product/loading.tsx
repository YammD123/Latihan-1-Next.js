export default function Loading() {
  return (
    <div>
      <div className=" grid grid-cols-4 mt-5 place-items-center">
        <div className="my-5 w-full max-w-sm bg-white border rounded-lg shadow h-96 dark:bg-gray-400 ">
          <a href="#"></a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
            </a>

            <div className="flex items-center justify-between mt-5">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
