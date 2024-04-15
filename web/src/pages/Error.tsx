const ErrorPage = () => {
  return (
    <div className="flex bg-main bg-dot-white/[0.2] text-white flex-col h-screen w-screen text-center justify-center items-center">
      <div className="text-3xl md:text-5xl font-heading">
        Hey There we are so sorry to say but there was a problem
      </div>
      <div className="text-4xl md:text-7xl text-gray-400 mt-2 font-heading mb-10">
        Our server is down for sometime
      </div>
      <div className="text-2xl font-heading cursor-pointer">
        Try again later or we will redirect you when we fix the issue
      </div>
    </div>
  );
};

export default ErrorPage;
