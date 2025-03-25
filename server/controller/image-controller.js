// filepath: c:\Users\Suyas\Videos\fileselink\server\controller\image-controller.js
import dotenv from 'dotenv';
import File from '../models/file.js';

dotenv.config();

const API_URI = process.env.API_URI;

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }

    try {
        const file = await File.create(fileObj);
        response.status(200).json({ path: `${API_URI}/file/${file._id}` });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        console.log('File:', file);
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}