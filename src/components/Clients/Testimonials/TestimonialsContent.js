import React, { Component } from 'react';
import { Link } from "gatsby"


class TestimonialsContent extends Component {
    render() {
        return (
            <section className="client-area inner-client-page ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6">
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <img src="/images/clients/client4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>


                        {/* Pagination */}
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link href="/testimonials/#">
                                                <a className="page-link page-links">
                                                    <i className='bx bx-chevrons-left'></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="page-item active">
                                            <Link href="/testimonials/#">
                                                <a className="page-link">1</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="/testimonials/#">
                                                <a className="page-link">2</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="/testimonials/#">
                                                <a className="page-link">3</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="/testimonials/#">
                                                <a className="page-link">
                                                    <i className='bx bx-chevrons-right'></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialsContent;
