import { setMetaData } from "../functions";

export default function About() {
    setMetaData("About", "This is about page");
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}