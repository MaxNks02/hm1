function navigateTo(page) {
  window.location.href = page;
}
document.addEventListener('DOMContentLoaded', async () => {
  const email = 'm.torebaev@innopolis.university';
  const params = new URLSearchParams({ email });
  const idUrl = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

  try {

    const idResponse = await fetch(idUrl);
    if (!idResponse.ok) throw new Error('Failed to fetch comic ID');
    const comicId = await idResponse.json();


    const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
    const comicResponse = await fetch(comicUrl);
    if (!comicResponse.ok) throw new Error('Failed to fetch comic details');
    const comicData = await comicResponse.json();


    const titleElement = document.getElementById('comic-title');
    const imgElement = document.getElementById('comic-img');
    const altElement = document.getElementById('comic-alt');
    const dateElement = document.getElementById('comic-date');

    titleElement.textContent = comicData.safe_title;
    imgElement.src = comicData.img;
    imgElement.alt = comicData.alt;
    altElement.textContent = comicData.alt;

    const publishDate = new Date(comicData.year, comicData.month - 1, comicData.day);
    dateElement.textContent = `Published on: ${publishDate.toLocaleDateString()}`;

  } catch (error) {
    console.error('Error:', error);
  }
});
