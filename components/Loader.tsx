function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {/* Animated gradient spinner */}
      <div className="animate-spin rounded-full size-12 border-4 border-transparent border-t-blue-500 border-r-purple-500"></div>
      
      {/* Optional: Your name or "Loading..." text with fade animation */}
      <p className="text-lg font-medium text-gray-700 animate-pulse">
        Loading George &apos;s Portfolio...
      </p>
    </div>
  );
}

export default Loader;
