import React from "react";
import styles from "./contactForm.module.css";

const ContactFormTask = () => {
    const handleSubmit = async () => {};

    return (
        <div className={styles.container}>
            {/* Instructions Panel */}
            <div className={styles.instructions}>
                <h2>Task Instructions</h2>
                <p>
                    <strong>This is the task:</strong>
                </p>
                <p>
                    Building forms is a common task in Frontend. In this
                    exercise, we will build a basic "Contact Us" form, commonly
                    seen on marketing websites for visitors to ask questions or
                    provide feedback.
                </p>
                <p>
                    <strong>Requirements:</strong>
                </p>
                <ul>
                    <li>Name field.</li>
                    <li>Email field.</li>
                    <li>
                        Message field (<code>textarea</code> is recommended for
                        longer text).
                    </li>
                    <li>Submit button containing the text "Send".</li>
                    <li>
                        No client-side validation is necessary; validation will
                        be done on the server.
                    </li>
                </ul>
                <p>
                    <strong>Test Cases</strong>
                </p>
                <ul>
                    <li> Fields:</li>
                        <ul>
                            <li>All fields can be updated.</li>
                        </ul>
                    <li>Submission</li>
                            <ul>
                                <li>Clicking on the submit button triggers form submission</li>
                                <li>Success alert is seen if all fields are filled during the submission</li>
                            </ul>
                </ul>
                <p>Your frontend changes will be reflected below:</p>
            </div>
            {/* TODO: Implement Contact Form frontend here*/}
        </div>
    );
};

export default ContactFormTask;
