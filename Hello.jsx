import { useState } from "react";

function AdvancedForm() {
    const [formData, setformData] = useState({
        gender: "",
        country: "Pakistan",
        agree: false
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>By Using For Control Form Validation</h2>
            <h3>Form with Checkbox, Radio & Select</h3>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                />
                Female
            </label>
            <br />
            <label>
                Country:
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="UK">UK</option>
                </select>
            </label>
            <br />

            <label>
                <input type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                />

                I agree to trems and conditions

            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default AdvancedForm;