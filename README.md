# Google Maps Location Share

This project allows users to generate shareable Google Maps links for Ola and Uber apps. It includes:

- A mobile-responsive frontend built with vanilla JavaScript.
- A lightweight backend hosted on Vercel to expand shortened URLs.

## Features
- Input a shortened Google Maps URL.
- Generate a shareable link for Ola/Uber apps.
- Mobile-friendly design.

## How to Run
1. Deploy the backend to Vercel.
2. Open the `index.html` file in a browser.
3. Enter a shortened Google Maps URL and click "Share".

## Backend API
- **Endpoint**: `/api/expand-url`
- **Method**: `POST`
- **Request Body**: `{ "shortUrl": "<shortened-url>" }`
- **Response**: `{ "longUrl": "<expanded-url>" }`

## License
This project is licensed under the MIT License.
