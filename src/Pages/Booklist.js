import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux'

const Booklist = () => {
    const books = useSelector((state) => state.books);
    return (
        <Container>
            <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Cozy Store</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">My Books</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Add Book</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                     
                    </ul>
                </li>
                </ul>
                </div>
            <div class="row ">
                <div class="col-lg-12 col-md-6 col-sm-12">
                    <h5 class="mt-3 mb-3 text-secondary">
                        Check More Records of Users
                    </h5>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead class="thead-light">
                                <tr>
                                    <th>S.No</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <th>Category</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((output) =>
                                    <tr>
                                        <td>{output.activeId}</td>
                                        <td>{output.title}</td>
                                        <td>{output.author}</td>
                                        <td>{output.category}</td>

                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Booklist;
