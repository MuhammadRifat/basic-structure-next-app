import { IBlog } from "@/interfaces/interfaces";

export default function Blog({ blog }: { blog: IBlog }) {
    const { title, body } = blog;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>

    );
}