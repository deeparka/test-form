import { useState } from "react";

const DetailsForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { firstName, lastName, email, password };
        setIsPending(true);
        console.log(data);

        fetch("http://localhost:8001/data", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        }).then(() => {
            console.log("Data added successfully");
            setIsPending(false);
            alert("Data added successfully");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            {!isPending && <button>CLAIM YOUR FREE TRIAL</button>}
            {isPending && <button disabled>Adding Data</button>}

            <p className="agree">
                By clicking the button, you are agreeing to our
                <span> Terms and Services</span>
            </p>
        </form>
    );
};

export default DetailsForm;
