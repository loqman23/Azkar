import fs from 'fs/promises';
import path from 'path';

const LOG_FILE = 'service-logs.json';

export async function logServiceAction(userId, action, details) {
  try {
    const logEntry = {
      timestamp: new Date().toISOString(),
      userId,
      action,
      details
    };

    let logs = [];
    try {
      const existingLogs = await fs.readFile(LOG_FILE, 'utf8');
      logs = JSON.parse(existingLogs);
    } catch (error) {
    }

    logs.push(logEntry);
    await fs.writeFile(LOG_FILE, JSON.stringify(logs, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error logging action:', error);
    return false;
  }
}

export async function getServiceLogs(userId = null) {
  try {
    const logs = await fs.readFile(LOG_FILE, 'utf8');
    const parsedLogs = JSON.parse(logs);
    
    if (userId) {
      return parsedLogs.filter(log => log.userId === userId);
    }
    return parsedLogs;
  } catch (error) {
    return [];
  }
}

// © All rights reserved to Loqmanas (L.Q1).  // © All rights reserved to Loqmanas (L.Q1).  