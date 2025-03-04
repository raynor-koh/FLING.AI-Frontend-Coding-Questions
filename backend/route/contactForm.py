import re
from flask import Blueprint, request, jsonify

# This method is to be used for processing the data
from ..services.contactForm import process_contact_data

contact_form_blueprint = Blueprint("contactForm", __name__)
EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")


@contact_form_blueprint.route("/contactForm", methods=["GET", "POST"])
def handle_contact_form():
    """
    API Endpoint: /contactForm

    Supported Methods:
      - GET: Returns a simple text message.
      - POST: Accepts a JSON payload for contact form submission.

    POST Request Requirements:
      - Expected JSON Payload:
          {
              "email": <string>,    # User's email address in valid format
              "message": <string>   # The contact message
          }
      - Validation:
          - Both 'email' and 'message' fields must be present.
          - The 'email' must follow a proper email format (e.g., using regex or a validation library).
      - Error Handling:
          - If the JSON payload is missing or required fields are absent, return a JSON error response with a 400 status code.
          - If the email format is invalid, return a JSON error response with a 400 status code.
      - Successful Submission:
          - Upon valid input, process the data (e.g., save to a database, send an email, etc.).
          - Return a JSON response: {"message": "Contact form submitted successfully!"} with a 200 status code.

    Implementation Notes:
      - Use Flask's Blueprint for organizing the endpoint.
      - Ensure that the code is modular, well-commented, and handles exceptions gracefully.
    """
    # TODO: Implement the API endpoint for the contact form submission
    raise NotImplementedError()
