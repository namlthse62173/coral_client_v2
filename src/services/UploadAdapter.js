import { getStorage, ref, uploadBytes, getDownloadURL } from "./FirebaseConfig.js";

export class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }
    
    upload() {
        return this.loader.file.then(
            file =>
                new Promise((resolve, reject) => {
                    let storage = getStorage()
                    const fileRef = ref(storage, `article/${"nametest"}`);
                    uploadBytes(fileRef, file).then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(function (downloadURL) {
                                resolve({
                                    default: downloadURL
                                });
                            });
                    });
                })
        );
    }
}
