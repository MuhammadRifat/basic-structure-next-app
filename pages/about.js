import React, { useEffect, useState } from 'react';

const About = () => {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        const getPhotos = async () => {
            const res = await fetch('https://expressapi.muhammadrifat.xyz/products');
            const data = await res.json();
            console.log(data);
        }
        getPhotos();
    }, [])
  
    return (
        <div>
            {
                photos?.map(photo =>
                    <div key={photo.id}>
                        <h5>{photo.title}</h5>
                    </div>
                )
            }
        </div>
    );
};

export default About;