const Loading = () => {
  return (
    <div class="min-h-screen flex justify-center items-center bg-black">
      <div class="loader bg-white p-5 rounded-full flex space-x-3">
        <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
