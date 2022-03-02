const DetailsForm = () => {
    return (
        <form action="" className="form">
            <div>
                <input type="text" placeholder="First Name" required />
            </div>
            <div>
                <input type="text" placeholder="Last Name" required />
            </div>
            <div>
                <input type="email" placeholder="Email Address" required />
            </div>
            <div>
                <input type="text" placeholder="Password" required />
            </div>
            <div>
                <input
                    type="submit"
                    className="claim"
                    value="Claim your free trial"
                />
            </div>
            <div className="accept">
                By clicking the button, you are agreeing to our
                <span>Terms and Services</span>
            </div>
        </form>
    );
};

export default DetailsForm;
