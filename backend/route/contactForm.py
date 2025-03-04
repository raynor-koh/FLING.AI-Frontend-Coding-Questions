from flask import Blueprint

contact_form_blueprint = Blueprint("contactForm", __name__)


@contact_form_blueprint.route("/contactForm", methods=["GET", "POST"])
def contactForm():
    return "Hello, this is the contact form"
