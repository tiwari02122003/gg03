# from flask import Flask, request
# from twilio.twiml.messaging_response import MessagingResponse
# import os
# from dotenv import load_dotenv
# from twilio.rest import Client

# load_dotenv()

# app = Flask(__name__)

# # Healthy Menu items in INR
# menu = {
#     "1": "Banana Shake - ₹150",
#     "2": "Protein Shake - ₹200",
#     "3": "Green Salad - ₹100",
#     "4": "Oatmeal Bowl - ₹180",
#     "5": "Grilled Chicken Breast - ₹250",
#     "6": "Fruit Bowl - ₹180",
#     "7": "Avocado Toast - ₹220",
#     "8": "Greek Yogurt with Honey - ₹150",
#     "9": "Smoothie Bowl - ₹250",
#     "10": "Quinoa Salad - ₹200"
# }

# # List of template IDs
# template_ids = [
#     "HX42909d2812a160ae63d22eac23b04ab4",  # Customer Care
#     "HXbbce3c7181ef04556abec55fd38e0ff4",  # Track Delivery
#     "HX80508428df791df1dc430cae90b4abbc",  # Food Order
#     "HX61a611b27c68482aceea7c162d01c1d6"   # First Line
# ]

# # To store user orders
# orders = {}

# # TWILIO_ACCOUNT_SID = "AC484989ad6e64da6440dc4c41a91ef94c"
# # TWILIO_AUTH_TOKEN= "16cf3283ad6890a813ec326293bd294e"
# # TWILIO_WHATSAPP_NUMBER= "+14155238886"

# TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
# TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
# TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER")

# @app.route('/whatsapp', methods=['POST'])
# def whatsapp_bot():
#     try:
#         # Extract data from the Twilio request
#         user_number = request.form.get('From')
#         user_message = request.form.get('Body').strip().lower()

#         # Initialize Twilio response
#         response = MessagingResponse()

#         # Get or create user data
#         user_data = orders.get(user_number, {"state": "initial", "items": []})

#         # Chatbot logic
#         if user_data["state"] == "initial":
#             # Send main menu with clickable options
#             response.message("Welcome to Healthy Bites! Please select an option by clicking:\n\n"
#                              "1. Order Food\n"
#                              "2. Track Delivery\n"
#                              "3. Contact Customer Care")
#             client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
#             print(client)
#             # message = client.messages.create(
#             #     body="Hello! Here's an image for you.",  # Message text
#             #     from_=f'whatsapp:{TWILIO_WHATSAPP_NUMBER}',
#             #     # Replace with your Twilio phone number (e.g., WhatsApp-enabled number)
#             #     to=f'{user_number}',  # Replace with the recipient's phone number
#             #     media_url=['https://ibb.co/wWg4S8F'],
#             # )
#             # try:
#             #     message = client.messages.create(
#             #         from_=f'whatsapp:{TWILIO_WHATSAPP_NUMBER}',  # Twilio's shared WhatsApp number
#             #         content_sid="HXe494a24625a946aff2cabd2e7825bc25",
#             #         # media_url='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',  # Corrected media URL
#             #         to=f'{user_number}'  # Replace with your WhatsApp number
#             #     )
#             #     print(f"Message sent successfully: SID {message.sid}")
#             # except Exception as e:
#             #     print(f"Error: {e}")
#             # user_data["state"] = "initial"
#             # Reverse the order of template IDs
#             for content_sid in reversed(template_ids):  # Sending in reverse order
#                 try:
#                     message = client.messages.create(
#                         from_=f'whatsapp:{TWILIO_WHATSAPP_NUMBER}',
#                         to=user_number,
#                         content_sid=content_sid  # Use the reversed template ID
#                     )
#                     print(f"Message sent successfully: SID {message.sid} for Template ID {content_sid}")
#                 except Exception as e:
#                     print(f"Failed to send message for Template ID {content_sid}: {e}")
#             user_data["state"] = "main_menu"

#         elif user_data["state"] == "main_menu":
#             print(user_message)
#             if user_message == "1":
#                 # Send the food menu with clickable options
#                     food_menu_message = "Here’s our healthy menu! Please click the button below to explore and add items to your order."
#                     response.message(food_menu_message).media('http://localhost:3000/menu')  # Use your frontend URL

#                     user_data["state"] = "ordering"
#             elif user_message == "2":
#                 # Simulate delivery tracking
#                 response.message("Your order is on its way! 🚚 Expected delivery time: 30 minutes.")
#                 user_data["state"] = "initial"
#             elif user_message == "3":
#                 # Contact customer care
#                 response.message("You can reach our customer care at +91-1234567890. We're here to help!")
#                 user_data["state"] = "initial"
#             else:
#                 response.message("Invalid option. Please click one of the options:\n\n"
#                                  "1. Order Food\n"
#                                  "2. Track Delivery\n"
#                                  "3. Contact Customer Care")

#         elif user_data["state"] == "ordering":
#             if user_message in menu:
#                 item = menu[user_message]
#                 user_data["items"].append(item)
#                 response.message(f"You've added {item} to your order. Reply 'yes' to confirm or 'no' to cancel.")
#                 user_data["state"] = "confirm"
#             else:
#                 response.message("Invalid option. Please select a valid item from the menu.")

#         elif user_data["state"] == "confirm":
#             if user_message == "yes":
#                 order_summary = "\n".join(user_data["items"])
#                 response.message(f"Order confirmed:\n{order_summary}\nThank you! Your healthy meal will be delivered shortly.")
#                 user_data["state"] = "completed"
#             elif user_message == "no":
#                 response.message("Order cancelled. Thank you!")
#                 user_data = {"state": "initial", "items": []}
#             else:
#                 response.message("Please reply 'yes' to confirm or 'no' to cancel.")

#         else:
#             # Reset state if unexpected input
#             response.message("Sorry, I didn't understand that. Let's start over!")
#             user_data = {"state": "initial", "items": []}

#         # Update user data
#         orders[user_number] = user_data
#         return str(response)

#     except Exception as e:
#         # Handle unexpected errors
#         response = MessagingResponse()
#         response.message(f"An error occurred: {str(e)}")
#         return str(response)


# if __name__ == "_main_":
#     # Run Flask app
#     app.run(debug=True, port=5000)

from flask import Flask, request
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
import qrcode
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Twilio credentials
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER")

# Initialize Twilio client
client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

app = Flask(__name__)

# UPI QR code generation
def generate_qr_code(upi_id):
    # Ensure the 'static' directory exists
    if not os.path.exists("static"):
        os.makedirs("static")

    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(upi_id)
    qr.make(fit=True)
    img = qr.make_image(fill="black", back_color="white")
    img.save("static/upi_qr.png")


# Generate the UPI QR code
UPI_ID = "7543822373@ybl"
generate_qr_code(UPI_ID)

# Bot logic
user_state = {}

@app.route("/webhook", methods=["POST"])
def whatsapp_bot():
    global user_state
    incoming_msg = request.values.get("Body", "").strip()
    sender = request.values.get("From", "")
    interactive_response = request.values.get("ButtonPayload", "").strip()

    if sender not in user_state:
        user_state[sender] = {"stage": 0}

    response = MessagingResponse()
    msg = response.message()

    # Chatbot stages
    if user_state[sender]["stage"] == 0:
        # Greet the user and show buttons
        msg.body("Hello, welcome to Grainy Giggles! 🍽️")
        msg.add_action(
            action="interactive",
            interactive_type="button",
            header={
                "type": "text",
                "text": "What would you like to do?",
            },
            buttons=[
                {"type": "reply", "reply": {"id": "order_now", "title": "Order Now"}},
                {"type": "reply", "reply": {"id": "exit", "title": "Exit"}},
            ],
        )
        user_state[sender]["stage"] = 1

    elif user_state[sender]["stage"] == 1:
        if interactive_response == "order_now":
            msg.body("Redirecting you to our menu: https://www.grainygiggles.com")
            user_state[sender]["stage"] = 2
        elif interactive_response == "exit":
            msg.body("Thank you! Have a great day! 😊")
            del user_state[sender]
        else:
            msg.body("Please select a valid option.")

    elif user_state[sender]["stage"] == 2:
        # Handle the message after redirection
        if incoming_msg.startswith("Hi! Here's my order:"):
            user_state[sender]["order_details"] = incoming_msg
            msg.body("Thank you for your order! Please provide your delivery address:")
            user_state[sender]["stage"] = 3
        else:
            msg.body("Please return to the bot from the menu to continue.")

    elif user_state[sender]["stage"] == 3:
        user_state[sender]["address"] = incoming_msg
        msg.body("Got it! Please provide your name:")
        user_state[sender]["stage"] = 4

    elif user_state[sender]["stage"] == 4:
        user_state[sender]["name"] = incoming_msg
        msg.body("Thank you! Please provide your phone number:")
        user_state[sender]["stage"] = 5

    elif user_state[sender]["stage"] == 5:
        user_state[sender]["phone"] = incoming_msg
        msg.body("How would you like to pay?")
        msg.add_action(
            action="interactive",
            interactive_type="button",
            header={
                "type": "text",
                "text": "Payment Options",
            },
            buttons=[
                {"type": "reply", "reply": {"id": "cod", "title": "Pay on Delivery"}},
                {"type": "reply", "reply": {"id": "upi", "title": "UPI Payment"}},
            ],
        )
        user_state[sender]["stage"] = 6

    elif user_state[sender]["stage"] == 6:
        if interactive_response == "cod":
            msg.body("Thanks for ordering from us! 😊\nOur delivery agent will reach you shortly.\nEstimated time: 40 minutes.")
            del user_state[sender]
        elif interactive_response == "upi":
            msg.body("Please use the following UPI ID or scan the QR code to make your payment:\nUPI ID: grainygiggles@upi")
            msg.media(request.url_root + "static/upi_qr.png")
            user_state[sender]["stage"] = 7
        else:
            msg.body("Please select a valid option.")

    elif user_state[sender]["stage"] == 7:
        msg.body("Payment successful! 🎉\nThanks for ordering from us! 😊\nOur delivery agent will reach you shortly.\nEstimated time: 40 minutes.")
        del user_state[sender]

    return str(response)

# Serve static files for QR code
@app.route("/static/<path:path>")
def serve_static(path):
    return app.send_static_file(path)

if __name__ == "__main__":
    app.run(debug=True)
    