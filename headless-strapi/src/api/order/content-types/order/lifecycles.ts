import axios from "axios";

export default {
  async afterUpdate(event) {
    const { result } = event;
    console.log("afterUpdate", result);
    // grant githubUsername access to the repo
    if (
      !(result.paid && result.githubUsername) ||
      result.wasAddedToGithubRepo
    ) {
      return;
    }

    const githubToken = process.env.GITHUB_PRIVATE_ACCESS_TOKEN;
    const repoOwner = "DerMambo";
    const repoName = "headless-content-starter-kit";
    const username = result.githubUsername;
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators/${username}`;
    const headers = {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    try {
      const existingColaboratorResponse = await axios.get(url, {
        headers,
      });

      if (existingColaboratorResponse.status === 204) {
        console.log(`User ${username} is already colaborator in the project`);
        return;
      }
    } catch (e) {
      console.log(`User ${username} seems not to exist on the repo yet`);
    }

    try {
      console.log("go add to github repo", { username });

      const response = await axios.put(
        url,
        {},
        {
          headers,
        }
      );

      await strapi.entityService.update("api::order.order", result.id, {
        data: {
          wasAddedToGithubRepo: new Date(),
        },
      });

      console.log(`User ${username} added`, response.data);
    } catch (e) {
      console.log(`error adding ${username} to the repo`, e.message);
    }
  },
};

/**
 * const axios = require('axios');
const token = 'YOUR_GITHUB_TOKEN'; // Make sure to keep your token secure
const repoOwner = 'owner_username';
const repoName = 'repository_name';

const addUserToRepo = async (username) => {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators/${username}`;
  try {
    const response = await axios.put(url, {}, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    console.log('User added:', response.data);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};
 */
