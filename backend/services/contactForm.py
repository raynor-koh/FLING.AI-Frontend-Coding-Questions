import time
import uuid
import os
import json

DATA_FILE = "contact_data.json"


def store_contact_data(data):
    """Stores the contact data in a JSON file."""
    raise NotImplementedError()


def process_contact_data(data):
    """
    Simulates processing of the contact form data.

    Parameters:
        data (dict): A dictionary containing the contact form data.
                     Expected keys: 'email', 'message'

    Returns:
        dict: A result dictionary containing:
            - status (str): "success" if processing is simulated successfully.
            - ticket_id (str): A unique ticket identifier for the submission.
            - message (str): A descriptive success message.
    """
    # Simulate processing delay (e.g., saving to a database or sending an email)
    time.sleep(1)

    # Generate a unique ticket id using uuid4
    ticket_id = str(uuid.uuid4())

    record = {}

    # Log the received data (in a real scenario, further processing would occur)
    print(f"Processing data for email: {data.get('email')}")
    print(f"Message: {data.get('message')}")

    # Store the record in a JSON file
    store_contact_data(record)

    # Return the simulated processing result
    return {
        "status": "success",
        "ticket_id": ticket_id,
        "message": "Contact form processed successfully",
    }
