import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== match) {
            setMatch(media.matches);
        }

        const listner = () => {
            setMatch(media.matches);
        };

        media.addEventListener('change', listner);
        return () => media.removeEventListener('change', listner);

    }, [query, match]);
    return match;
};

export default useMediaQuery;