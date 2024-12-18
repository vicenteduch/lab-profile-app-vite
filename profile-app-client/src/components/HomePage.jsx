import { Link, useNavigate } from "react-router-dom";
import './HomePage.css'


function HomePage() {
    return (
        <div>
            <div className="home-page-card">

                <div className="card-text">
                    <h1>IronProfile</h1>
                    <p>Today we will create an app <br></br>
                        with authoritation, adding <br></br>
                        some cool styles!</p>
                </div>
                <div className="home-page-buttons">
                    <Link to="/auth/signup">
                        <button> Sign up </button>
                    </Link>
                    <Link to="/auth/login">
                        <button> Login </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage