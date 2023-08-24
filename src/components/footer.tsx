import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid mt-4 bg-light">
                <div className="row pt-2 px-0">
                    <div className="col-md-3">
                        <div className="p-2">
                            <h6>Contact Information</h6><hr />
                            <p>
                                We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.<br /><br />
                                hrifat450@gmail.com<br />
                                Phone: 01772722727<br />
                                Mymensingh, Bangladesh<br />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2">
                            <h6>About Us</h6><hr />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ducimus quia.<br />
                                <div className="d-flex mt-3">
                                    <Link href="#">Link</Link>
                                    <Link href="#">Link</Link>
                                    <Link href="#">Link</Link>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2">
                            <h6>Useful Links</h6><hr />
                            <Link href="/about">About </Link><br />
                            <Link href="#">Special Offers</Link><br />
                            <Link href="#">Social</Link><br />
                            <Link href="#">Site Map</Link><br />
                            <Link href="#">Help Topics</Link><br />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2">
                            <h6>Mailing List</h6><hr />
                            <p>Enter your email address for our mailing list to keep yourself updated.</p>
                            <div className="d-flex">
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-primary" type="submit">DONE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 text-center">
                    <div className="col py-2">
                        <small>Copyright {new Date().getFullYear()}, Muhammad Rifat. All rights reserved.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}