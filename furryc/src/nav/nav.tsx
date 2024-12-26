function Nav()
{
    return (
    <>
        <nav className="nav  bg-dark text-light d-flex justify-content-center flex-row justify-content-between">
            <div className="align-self-center">
                <a href=""><img src="./pic/logo.png" alt="logo" className="h-75 "/></a>
            </div>
            <div className="items align-self-center w-25 d-flex justify-content-around">
                <a className="btn btn-secondary px-3 rounded hover:bg-alert" href="#">Home</a>
                <a className=" btn btn-secondary px-3 rounded hover:bg-alert" href="#">About</a>
                <a className=" btn btn-secondary px-3 rounded hover:bg-alert" href="#">Port</a>
                <a className="btn btn-secondary px-3 rounded hover:bg-alert" href="#">Login</a>
            </div>
        </nav>
    </>
    );
} 
export default Nav;  