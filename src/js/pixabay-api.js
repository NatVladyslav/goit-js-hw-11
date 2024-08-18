const baseURL = 'https://pixabay.com';
export const fetchRequest = (value) => {
const urlOptions = new URLSearchParams({
    key: "45468562-3d934deccae668c7d7f46b2f1",
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
});
    
    console.log(`${baseURL}/api/?${urlOptions}`);
   return fetch(`${baseURL}/api/?${urlOptions}`)
    .then((resolve) => {
        if (!resolve.ok) {
            throw new Error("Error!")
        }
        return resolve.json();
    })
}