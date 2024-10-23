import axios from "axios";

const OPENDRIVE_API_BASE = process.env.OPENDRIVE_API_BASE;

async function login() {
  try {
    const authResponse = await axios.post(
      `${OPENDRIVE_API_BASE}/session/login.json`,
      {
        username: process.env.OPENDRIVE_USERNAME,
        passwd: process.env.OPENDRIVE_PASSWORD,
      }
    );
    return authResponse.data.SessionID;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
}

async function getFileId(sessionId, folderPath, fileName) {
  try {
    const folderListResponse = await axios.get(
      `${OPENDRIVE_API_BASE}/folder/list.json/${sessionId}/${folderPath}`
    );

    const file = folderListResponse.data.Files.find(
      (file) => file.Name === fileName
    );

    if (file) {
      return file.FileId;
    } else {
      throw new Error("File not found");
    }
  } catch (error) {
    throw new Error("Error retrieving file ID: " + error.message);
  }
}

async function moveFileToTrash(sessionId, fileId) {
  try {
    // Move the file to the trash (instead of deleting)
    const moveToTrashResponse = await axios.post(
      `${OPENDRIVE_API_BASE}/file/trash.json`,
      {
        session_id: sessionId,
        file_id: fileId,
      }
    );

    return moveToTrashResponse; // Return the response
  } catch (error) {
    throw new Error("Moving file to trash failed: " + error.message);
  }
}

export async function deleteFile(fileName, folderPath) {
  try {
    // Step 1: Log in and get session ID
    const sessionId = await login();

    // Step 2: Check if the file exists and get fileId
    const fileId = await getFileId(sessionId, folderPath, fileName);

    // Step 3: Delete the file using the fileId
    const TrashResponse = await moveFileToTrash(sessionId, fileId);

    return TrashResponse.data;
  } catch (error) {
    return { error: error.message };
  }
}
