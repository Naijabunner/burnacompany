async function getAllFolders(sessionId, folderPath) {
  try {
    const folderListResponse = await axios.get(
      `${OPENDRIVE_API_BASE}/folder/list.json/${sessionId}/${folderPath}`
    );

    const folders = folderListResponse.data.Folders;

    return folders;
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

async function getFileDetailsById(fileId, folderPath, sessionId) {
  try {
    const folderListResponse = await axios.get(
      `${OPENDRIVE_API_BASE}/folder/list.json/${sessionId}/${folderPath}`
    );

    const file = folderListResponse.data.Files.find(
      (file) => file.FileId === fileId
    );

    if (file) {
      return file;
    } else {
      throw new Error("File not found");
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

async function deleteFileById(sessionId, fileId) {
  try {
    const deleteResponse = await axios.post(
      `${OPENDRIVE_API_BASE}/file/delete.json`,
      {
        session_id: sessionId,
        file_id: fileId,
      }
    );
    return deleteResponse.data;
  } catch (error) {
    throw new Error("File deletion failed: " + error.message);
  }
}
