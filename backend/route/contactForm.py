import re
from flask import Blueprint, request, jsonify

contact_form_blueprint = Blueprint("contactForm", __name__)
EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")


@contact_form_blueprint.route("/contactForm", methods=["GET", "POST"])
def contactForm():
    # TODO: Implement the API endpoint for the contact form submission
    return "Hello, this is the contact form"
