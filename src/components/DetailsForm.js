const DetailsForm = () => {
    return (
        <form action="" className="form">
            <input
                type="text"
                value="first-name"
                placeholder="First Name"
                required
            />
            <input
                type="text"
                value="last-name"
                placeholder="Last Name"
                required
            />
            <input
                type="email"
                value="email"
                placeholder="Email Address"
                required
            />
            <input
                type="password"
                value="password"
                placeholder="Password"
                required
            />
            <input
                type="submit"
                className="claim"
                value="Claim your free trial"
            />
            <div className="accept">
                By clicking the button, you are agreeing to our
                <span>Terms and Services</span>
            </div>
        </form>
    );
};

export default DetailsForm;
