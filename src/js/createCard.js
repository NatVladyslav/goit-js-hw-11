export default function createImgCard() {
    return `
    <li>
        <img src="" alt="" />
        <ul>
          <li>
            <h3>Likes</h3>
            <p>info:</p>
          </li>
          <li>
            <h3>Views</h3>
            <p>info:</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>info:</p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p>info:</p>
          </li>
        </ul>
    </li>
    `
}
export const cardArr = [];
for (let i = 0; i < 4; i++){
    cardArr[i] = createImgCard();
}