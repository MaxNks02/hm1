import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Comic, ComicIdentifierResponse} from './interfaces';

dayjs.extend(relativeTime);

const email = 'm.torebaev@innopolis.university';
const baseUrl = "https://fwd.innopolis.university/api/";

export async function getComicId(): Promise<number> {
  try {
    const params = new URLSearchParams({ email });
    const response = await fetch(`${baseUrl}hw2?${params.toString()}`);


    if (!response.ok) {
      throw new Error(`Failed to fetch comic ID: ${response.statusText}`);
    }
    const data = await response.json() as ComicIdentifierResponse;
    return data.id;
  } catch (error) {
    console.error('Error fetching comic ID:', error);
    throw error;
  }
}

export async function getComic(comicId: number): Promise<Comic> {
  try {
    console.log('Comic ID:', comicId);
    const response = await fetch(`${baseUrl}comic?id=443}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch comic details: ${response.statusText}`);
    }
    const data = await response.json() as Comic;
    return data;
  } catch (error) {
    console.error('Error fetching comic details:', error);
    throw error;
  }
}


export function displayComic(comic: Comic): void {
  const titleElement = document.getElementById('comic-title') as HTMLElement;
  const imgElement = document.getElementById('comic-img') as HTMLImageElement;
  const altElement = document.getElementById('comic-alt') as HTMLElement;
  const dateElement = document.getElementById('comic-date') as HTMLElement;

  titleElement.textContent = comic.safe_title;
  imgElement.src = comic.img;
  imgElement.alt = comic.alt;
  altElement.textContent = comic.alt;

  const publishDate = dayjs(new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day)));
  const formattedDate = publishDate.format('MMMM DD, YYYY');
  dateElement.textContent = `Published on ${formattedDate}`;
}

export function navigateTo(page: string): void {
  window.location.href = page;
}
(window as any).navigateTo = navigateTo;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const comicId = await getComicId();
    const comicData = await getComic(comicId);
    displayComic(comicData);
  } catch (error) {
    console.error('Error:', error);
  }
});

