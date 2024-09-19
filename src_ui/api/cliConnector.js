import axios from 'axios';

const API_BASE_URL = 'http://localhost:7863';

export const runCommand = async (command, args = []) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/run`, {
      command,
      args,
    });
    return response.data;
  } catch (error) {
    console.error('Error running command:', error);
    throw error;
  }
};

export const listCommands = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error listing commands:', error);
    throw error;
  }
};

export const getCommandDetails = async (command) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/details`, {
      params: { command },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting command details:', error);
    throw error;
  }
};

export const listAllArgs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/args`);
    return response.data;
  } catch (error) {
    console.error('Error listing all args:', error);
    throw error;
  }
};

export const executeCommand = async (command, options = {}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/execute`, {
      command,
      options,
    });
    return response.data;
  } catch (error) {
    console.error('Error executing command:', error);
    throw error;
  }
};

export const fetchCommandOutput = async (commandId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/output`, {
      params: { commandId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching command output:', error);
    throw error;
  }
};
