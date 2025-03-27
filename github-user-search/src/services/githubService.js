import axios from 'axios';

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
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
    const url = `https://api.github.com/search/users?q=${query}&page=${page}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Search failed');
  }
}