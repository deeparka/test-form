const DetailsForm = () => {
    return (
        <form className="form">
            <input
                type="text"
                placeholder="First Name"
                id="first-name"
                required
            />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input
                type="submit"
                className="claim"
                value="Claim your free trial"
            />
            <br />
            <p className="agree">
                By clicking the button, you are agreeing to our
                <span> Terms and Services</span>
            </p>
        </form>
    );
};

export default DetailsForm;
