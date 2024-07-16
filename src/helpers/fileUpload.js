export const fileUpload = async (file) => {
    if (!file) throw new Error('No tenemos ningún archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/diu2godjy/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal-app');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        console.log(resp);
        if (!resp.ok) throw new Error('No se pudo subir imagen');

        const cloudResponse = await resp.json();

        return cloudResponse.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }
};
