import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility after 2 seconds
  const toggleVisibility = () => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 2000); // 2000 milliseconds = 2 seconds
  };
  return (
    <>
      <h1 className="text-4xl text-center">Travel booking system</h1>
      <div className="flex justify-center py-5">
        <button
          onClick={toggleVisibility}
          className="bg-indigo-500 px-10 py-1 rounded-md text-white "
        >
          Click && Wait
        </button>
      </div>
      <div className="text-xl font-medium ">
        {isVisible && (
          <div>
            welcome Everyone :
            <p className="text-sm font-normal">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
