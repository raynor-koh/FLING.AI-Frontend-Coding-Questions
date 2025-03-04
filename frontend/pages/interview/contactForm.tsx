import React from "react";
import styles from "./contactForm.module.css";

const ContactFormTask = () => {
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
                <p>Your frontend changes will be reflected below:</p>
            </div>

            {/* Contact Form */}
        </div>
    );
};

export default ContactFormTask;
