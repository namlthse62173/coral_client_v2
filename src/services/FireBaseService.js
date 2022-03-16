import { getStorage, ref, uploadBytes } from "./FirebaseConfig.js";
import { storageBucket, getDownloadURL } from "./FirebaseConfig.js";

const storage = getStorage();

export const firebaseUpload = async (folderName = "media", file, fileName) => {
    let resUrl = null;

    const fileRef = ref(storage, `media/${fileName}`);
    await uploadBytes(fileRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot)
    });

    const fileReference = ref(storage, `gs://${storageBucket}/${folderName}/${fileName}`)
    const httpsReference = ref(storage, `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${folderName}%2F${fileName}`);

    await getDownloadURL(fileReference).then(url => {
        resUrl = url
    })
    return resUrl
}