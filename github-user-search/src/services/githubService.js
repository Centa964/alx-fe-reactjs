import axios from 'axios';

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
}

export async function searchUsers(username, location, minRepos, page = 1) {
  let query = username || '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
      params: { page }
    });
    return response.data;
  } catch (error) {
    throw new Error('Search failed');
  }
}