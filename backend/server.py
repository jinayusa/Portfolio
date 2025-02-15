import os
import smtplib
from flask import Flask, request, jsonify
from flask_cors import CORS
from email.message import EmailMessage
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Enable CORS for React frontend (localhost:3000)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Ensure email credentials exist
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

if not EMAIL_USER or not EMAIL_PASS:
    print("⚠️ Missing EMAIL_USER or EMAIL_PASS in .env file!")
    exit(1)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        sender_email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")

        if not sender_email or not subject or not message:
            return jsonify({"error": "All fields are required"}), 400

        print(f"📩 Sending email from {sender_email} with subject: {subject}")

        # Create the email
        email = EmailMessage()
        email["From"] = EMAIL_USER  # Ensure you send from your configured email
        email["To"] = EMAIL_USER
        email["Subject"] = f"New Contact Form Message: {subject}"
        email.set_content(f"From: {sender_email}\n\nMessage:\n{message}")

        # Send email
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(email)

        print("✅ Email sent successfully!")

        response = jsonify({"success": True, "message": "Email sent successfully!"})
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
        return response

    except Exception as e:
        print(f"❌ Error sending email: {e}")
        response = jsonify({"error": str(e)})
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
        return response, 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)
