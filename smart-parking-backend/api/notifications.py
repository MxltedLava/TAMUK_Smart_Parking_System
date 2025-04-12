from twilio.rest import Client
from django.conf import settings
from datetime import datetime

def send_sms_alert(plate_text, lot_name):
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    message = (
        f"🚨 Unauthorized plate detected!\n"
        f"Plate: {plate_text}\n"
        f"Lot: {lot_name}\n"
        f"Time: {timestamp}"
    )

    try:
        client.messages.create(
            to="+13617372065",  # Replace with admin/security phone number
            from_=settings.TWILIO_PHONE_NUMBER,
            body=message
        )
    except Exception as e:
        print(f"[SMS ERROR] {e}")