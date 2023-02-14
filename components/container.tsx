
export const Container = (props) => {
  return (
    <div className="App px-2 py-3 container mx-auto flex flex-col justify-between gap-2 min-h-screen">
      <div
        className="grow
    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white  "
      >
        {props.children}
      </div>

      <input
        type="text"
        className=" h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
