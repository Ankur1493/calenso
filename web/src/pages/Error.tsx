const ErrorPage = () => {
  return (
    <div className="flex bg-main bg-dot-white/[0.2] text-white flex-col h-screen w-screen justify-center items-center">
      <div className="text-5xl font-heading">Hey There we are so sorry to say but there was a problem</div>
      <div className="text-8xl font-heading mb-10">Our server is down for sometime</div>
      <div className="text-2xl text-gray-400 font-heading cursor-pointer">Try again later or we will redirect you when we fix the issue</div>
    </div>
  )
}

export default ErrorPage
