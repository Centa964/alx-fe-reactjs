import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1); // For pagination

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1); // Reset to first page

    if (username && !location && !minRepos) {
      try {
        const data = await fetchUserData(username);
        setUsers([data]);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    } else {
      try {
        const data = await searchUsers(username, location, minRepos);
        setUsers(data.items);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
  };

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    try {
      const data = await searchUsers(username, location, minRepos, nextPage);
      setUsers([...users, ...data.items]); // Add new users to the list
      setPage(nextPage);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">GitHub Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter GitHub username"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter location (e.g., London)"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(event) => setMinRepos(event.target.value)}
            placeholder="Enter minimum repo count"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && (
        <p className="mt-4 text-center text-red-500">
          Looks like we cant find the user
        </p>
      )}
      {users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <p>Location: {user.location || 'Not specified'}</p>
                <p>Repositories: {user.public_repos || '0'}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          ))}
          {users.length >= 30 && (
            <button
              onClick={loadMore}
              className="mt-4 w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;