function UserProfile() {
    return (
      <div className="hover:shadow-xl user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img className="hover:scale-110 transition-tranform duration-300 ease-in-out rounded-full sm:h-24 sm:w-24 md:h-36 md:w-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="hover:text-blue-500 text-lg md:text-xl text-blue-800 my-4" >John Doe</h1>
        <p className="text-gray-600 md:text-base text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
s