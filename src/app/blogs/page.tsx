import { useEffect } from "react";
import { setMetaData } from "../functions";
import Blog from "@/components/blog";
import { IBlog } from "@/interfaces/interfaces";


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Blogs() {
    const blogs: IBlog[] = await getData();

    setMetaData(`Blogs (${blogs.length})`, "This is blogs page");
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-3">
                {
                    blogs?.map(blog => <Blog blog={blog} key={blog.id} />)
                }
            </div>
        </>
    );
}