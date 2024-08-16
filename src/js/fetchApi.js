const keyAPI = "45468562-3d934deccae668c7d7f46b2f1";
const urlAPI = `https://pixabay.com/api/?key=${keyAPI}&q=${searchElValue}&image_type=photo`;

const searchElValue = "cat"

fetch(urlAPI)
    .then((resolve) => {
        if (!resolve.ok) {
            throw new Error("Error!")
        }
        return resolve.join();
    }).then((data) => {
        
    })
    .catch((err) => {
        console.log(err);
    })