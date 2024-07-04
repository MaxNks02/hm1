import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import '../styles/comicStyle.css';

dayjs.extend(relativeTime);

interface Comic {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}

const ComicComponent: React.FC = () => {
    const [comic, setComic] = useState<Comic | null>(null);

    useEffect(() => {
        const fetchComic = async () => {
            const email = 'm.torebaev@innopolis.university';
            const baseUrl = "https://fwd.innopolis.university/api/";
            const params = new URLSearchParams({ email });
            const idUrl = `${baseUrl}hw2?${params.toString()}`;


            try {
                console.log('Fetching comic ID from:', idUrl);
                const idResponse = await fetch(idUrl);
                if (!idResponse.ok) throw new Error('Failed to fetch comic ID');
                const { id } = await idResponse.json();
                console.log('Fetched comic ID:', id);
                const comicUrl = `${baseUrl}comic?id=443`;
                const comicResponse = await fetch(comicUrl);
                if (!comicResponse.ok) throw new Error('Failed to fetch comic details');
                const comicData = await comicResponse.json();
                setComic(comicData);
            } catch (error) {
                console.error('Error fetching comic details:', error);
            }
        };

        fetchComic();
    }, []);

    if (!comic) {
        return <p>Loading...</p>;
    }

    const publishDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);
    const formattedDate = publishDate.format('MMMM DD, YYYY');

    return (
        <div className="body"> {/* Apply class directly here */}
            <div className="container"> {/* Apply class directly here */}
                <div className="comic-container"> {/* Apply class directly here */}
                    <h2 className="comic-title">{comic.safe_title}</h2>
                    <img className="comic-img" src={comic.img} alt={comic.alt} />
                    <p className="comic-alt">{comic.alt}</p>
                    <p className="comic-date">Published on: {formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default ComicComponent;
