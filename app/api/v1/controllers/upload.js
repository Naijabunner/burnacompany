import axios from "axios";
import FormData from "form-data";

const OPENDRIVE_API_BASE = process.env.OPENDRIVE_API_BASE;

export async function uploadFile(file, folderPath, subfolder) {
  try {
    // Step 1: Authenticate
    const authResponse = await axios.post(
      `${OPENDRIVE_API_BASE}/session/login.json`,
      {
        username: process.env.OPENDRIVE_USERNAME,
        passwd: process.env.OPENDRIVE_PASSWORD,
      }
    );
    const sessionId = authResponse.data.SessionID;

    // Step 2: Get folder ID
    const folderListResponse = await axios.get(
      `${OPENDRIVE_API_BASE}/folder/list.json/${sessionId}/${folderPath}`
    );

    // step 2.1 Checks for the SubFolder
    const imagesFolder = folderListResponse.data.Folders.find(
      (folder) => folder.Name === subfolder
    );

    const folderId = imagesFolder && imagesFolder.FolderID;

    // Step 3: Create file
    const createFileResponse = await axios.post(
      `${OPENDRIVE_API_BASE}/upload/create_file.json`,
      {
        session_id: sessionId,
        folder_id: folderId,
        file_name: file.name,
        file_size: file.size,
      }
    );
    const { FileId, TempLocation } = createFileResponse.data;

    // Step 4: Open file upload
    await axios.post(`${OPENDRIVE_API_BASE}/upload/open_file_upload.json`, {
      session_id: sessionId,
      file_id: FileId,
      file_size: file.size,
    });

    // Step 5: Upload file
    const formData = new FormData();
    formData.append("file_data", file.buffer, { filename: file.name });
    formData.append("temp_location", TempLocation);
    formData.append("chunk_offset", 0);
    formData.append("chunk_size", file.size);
    await axios.post(
      `${OPENDRIVE_API_BASE}/upload/upload_file_chunk2.json/${sessionId}/${FileId}`,
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    // Step 6: Close file upload
    const closeResponse = await axios.post(
      `${OPENDRIVE_API_BASE}/upload/close_file_upload.json`,
      {
        session_id: sessionId,
        file_id: FileId,
        file_size: file.size,
        temp_location: TempLocation,
      }
    );

    // Return the download link
    return closeResponse.data.StreamingLink;
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
