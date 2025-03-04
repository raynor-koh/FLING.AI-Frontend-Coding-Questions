from flask import Flask
from route.contactForm import contact_form_blueprint

app = Flask(__name__)

app.register_blueprint(contact_form_blueprint, url_prefix="/api")

if __name__ == "__main__":
    # run with flask run --debug instead of flask run
    app.run(debug=True)
