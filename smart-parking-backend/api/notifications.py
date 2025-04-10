# api/notifications.py
from django.conf import settings
from django.core.mail import send_mail
from twilio.rest import Client
from datetime import datetime

def send_email_alert(plate, image_path):
    try:
        send_mail(
            subject="🚨 Unauthorized Parking Detected",
            message=f"""
Unauthorized plate detected:
Plate Number: {plate}
Image Path: {image_path}
Time: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
""",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.ALERT_EMAIL],  # Custom alert email
            fail_silently=True
        )
    except Exception as e:
        print(f"[Email Error] {e}")


def send_sms_alert(plate):
    try:
        client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

        message = f"🚨 Unauthorized Plate Detected: {plate} @ {datetime.now().strftime('%H:%M:%S')}"

        client.messages.create(
            body=message,
            from_=settings.TWILIO_PHONE_NUMBER,
            to=settings.ADMIN_ALERT_PHONE
        )
    except Exception as e:
        print(f"[SMS Error] {e}")