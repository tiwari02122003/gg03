from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import os
from dotenv import load_dotenv
from twilio.rest import Client

load_dotenv()

app = Flask(__name__)

# Healthy Menu items in INR
menu = {
    "1": "Banana Shake - ₹150",
    "2": "Protein Shake - ₹200",
    "3": "Green Salad - ₹100",
    "4": "Oatmeal Bowl - ₹180",
    "5": "Grilled Chicken Breast - ₹250",
    "6": "Fruit Bowl - ₹180",
    "7": "Avocado Toast - ₹220",
    "8": "Greek Yogurt with Honey - ₹150",
    "9": "Smoothie Bowl - ₹250",
    "10": "Quinoa Salad - ₹200"
}

# List of template IDs
template_ids = [
    "HX42909d2812a160ae63d22eac23b04ab4",  # Customer Care
    "HXbbce3c7181ef04556abec55fd38e0ff4",  # Track Delivery
    "HX80508428df791df1dc430cae90b4abbc",  # Food Order
    "HX61a611b27c68482aceea7c162d01c1d6"   # First Line
]

# To store user orders
orders = {}

# TWILIO_ACCOUNT_SID = "AC484989ad6e64da6440dc4c41a91ef94c"
# TWILIO_AUTH_TOKEN= "16cf3283ad6890a813ec326293bd294e"
# TWILIO_WHATSAPP_NUMBER= "+14155238886"

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER")

@app.route('/whatsapp', methods=['POST'])
def whatsapp_bot():
    try:
        # Extract data from the Twilio request
        user_number = request.form.get('From')
        user_message = request.form.get('Body').strip().lower()

        # Initialize Twilio response
        response = MessagingResponse()

        # Get or create user data
        user_data = orders.get(user_number, {"state": "initial", "items": []})

        # Chatbot logic
        if user_data["state"] == "initial":
            # Send main menu with clickable options
            # response.message("Welcome to Healthy Bites! Please select an option by clicking:\n\n"
            #                  "1. Order Food\n"
            #                  "2. Track Delivery\n"
            #                  "3. Contact Customer Care")
            client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
            print(client)
            # message = client.messages.create(
            #     body="Hello! Here's an image for you.",  # Message text
            #     from_=f'whatsapp:{TWILIO_WHATSAPP_NUMBER}',
            #     # Replace with your Twilio phone number (e.g., WhatsApp-enabled number)
            #     to=f'{user_number}',  # Replace with the recipient's phone number
            #     media_url=['https://ibb.co/wWg4S8F'],
            # )
            # try:
            #     message = client.messages.create(
            #         from_=f'whatsapp:{TWILIO_WHATSAPP_NUMBER}',  # Twilio's shared WhatsApp number
            #         content_sid="HXe494a24625a946aff2cabd2e7825bc25",
            #         # media_url='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',  # Corrected media URL
            #         to=f'{user_number}'  # Replace with your WhatsApp number
            #     )
            #     print(f"Message sent successfully: SID {message.sid}")
            # except Exception as e:
            #     print(f"Error: {e}")
            # user_data["state"] = "initial"
            # Reverse the order of template IDs
            for content_sid in reversed(template_ids):  # Sending in reverse order
                try:
                    message = client.messages.create(
                        from_=f'whatsapp:{TWILIO_WHATSAPP_NUMBER}',
                        to=user_number,
                        content_sid=content_sid  # Use the reversed template ID
                    )
                    print(f"Message sent successfully: SID {message.sid} for Template ID {content_sid}")
                except Exception as e:
                    print(f"Failed to send message for Template ID {content_sid}: {e}")
            user_data["state"] = "main_menu"

        elif user_data["state"] == "main_menu":
            print(user_message)
            if user_message == "1":
                # Send the food menu with clickable options
                food_menu_message = "Here’s our healthy menu! Please click an item to add to your order:\n" + \
                    "\n".join([f"{key}. {value}" for key, value in menu.items()])
                response.message(food_menu_message)
                user_data["state"] = "ordering"
            elif user_message == "2":
                # Simulate delivery tracking
                response.message("Your order is on its way! 🚚 Expected delivery time: 30 minutes.")
                user_data["state"] = "initial"
            elif user_message == "3":
                # Contact customer care
                response.message("You can reach our customer care at +91-1234567890. We're here to help!")
                user_data["state"] = "initial"
            else:
                response.message("Invalid option. Please click one of the options:\n\n"
                                 "1. Order Food\n"
                                 "2. Track Delivery\n"
                                 "3. Contact Customer Care")

        elif user_data["state"] == "ordering":
            if user_message in menu:
                item = menu[user_message]
                user_data["items"].append(item)
                response.message(f"You've added {item} to your order. Reply 'yes' to confirm or 'no' to cancel.")
                user_data["state"] = "confirm"
            else:
                response.message("Invalid option. Please select a valid item from the menu.")

        elif user_data["state"] == "confirm":
            if user_message == "yes":
                order_summary = "\n".join(user_data["items"])
                response.message(f"Order confirmed:\n{order_summary}\nThank you! Your healthy meal will be delivered shortly.")
                user_data["state"] = "completed"
            elif user_message == "no":
                response.message("Order cancelled. Thank you!")
                user_data = {"state": "initial", "items": []}
            else:
                response.message("Please reply 'yes' to confirm or 'no' to cancel.")

        else:
            # Reset state if unexpected input
            response.message("Sorry, I didn't understand that. Let's start over!")
            user_data = {"state": "initial", "items": []}

        # Update user data
        orders[user_number] = user_data
        return str(response)

    except Exception as e:
        # Handle unexpected errors
        response = MessagingResponse()
        response.message(f"An error occurred: {str(e)}")
        return str(response)


if __name__ == "_main_":
    # Run Flask app
    app.run(debug=True, port=5000)