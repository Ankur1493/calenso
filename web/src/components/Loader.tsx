import { useState, useEffect } from 'react';

function LoadingComponent() {
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const cycleText = ['.', '..', '...'];
    let index = 0;

    const intervalId = setInterval(() => {
      setLoadingText(cycleText[index]);
      index = (index + 1) % cycleText.length;
    }, 500); // Adjust the cycle period as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="text-white text-2xl">
        Loading{loadingText}
      </div>
    </div>
  );
}


export default LoadingComponent;
