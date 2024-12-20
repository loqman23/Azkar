import fs from 'fs/promises';

const DATA_FILE = 'te-data-token.json';

export async function loadData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    const initialData = { users: {} };
    await saveData(initialData);
    return initialData;
  }
}

export async function saveData(data) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
}

export async function getUserService(userId) {
  try {
    const data = await loadData();
    return data.users[userId];
  } catch (error) {
    console.error('Error getting user service:', error);
    return null;
  }
}

export async function saveUserService(userId, serviceData) {
  try {
    const data = await loadData();
    data.users[userId] = serviceData;
    return await saveData(data);
  } catch (error) {
    console.error('Error saving user service:', error);
    return false;
  }
}

export async function removeUserService(userId) {
  try {
    const data = await loadData();
    delete data.users[userId];
    return await saveData(data);
  } catch (error) {
    console.error('Error removing user service:', error);
    return false;
  }
}