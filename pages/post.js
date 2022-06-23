import React from 'react';

const Post = ({ data }) => {
    return (
        <section>
            <h3>Posts</h3>
            {
                data?.map(photo =>
                    <div key={photo.id}>
                        <img src={photo.url} width="120" height="120" alt="" />
                        <h5>{photo.title}</h5>
                    </div>
                )
            }
        </section>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Post;