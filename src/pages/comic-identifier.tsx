// pages/comic-identifier.tsx
import { GetServerSideProps } from 'next';
import ComicComponent, { ComicProps } from '../components/Comic';

interface ComicPageProps {
  comic: ComicProps | null;
}

const ComicPage: React.FC<ComicPageProps> = ({ comic }) => {
  return <ComicComponent comic={comic} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const email = 'm.torebaev@innopolis.university';
  const baseUrl = 'https://fwd.innopolis.university/api/';
  const params = new URLSearchParams({ email });
  const idUrl = `${baseUrl}hw2?${params.toString()}`;

  try {
    const idResponse = await fetch(idUrl);
    if (!idResponse.ok) throw new Error('Failed to fetch comic ID');
    const { id } = await idResponse.json();
    const comicUrl = `${baseUrl}comic?id=443`;
    const comicResponse = await fetch(comicUrl);
    if (!comicResponse.ok) throw new Error('Failed to fetch comic details');
    const comicData = await comicResponse.json();

    return {
      props: {
        comic: comicData,
      },
    };
  } catch (error) {
    console.error('Error fetching comic details:', error);
    return {
      props: {
        comic: null,
      },
    };
  }
};

export default ComicPage;
