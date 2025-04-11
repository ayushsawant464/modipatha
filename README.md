# modipatha
Reviving Ancient Scripts 

## Description
Welcome to modipatha, your all-in-one platform for exploring and interacting with the historic Modi script! Our site is designed to using Modi script accessible, engaging, and informative.

### Transliteration Tool: 
Instantly convert Modi text to English with our intuitive transliteration feature. Whether you’re reading an ancient document or practicing Modi, our tool provides a seamless translation experience.

#### Virtual Keyboard: 
Practice typing in Modi script with our virtual keyboard, designed for ease and accuracy. This feature is perfect for learners and anyone interested in gaining fluency in typing Modi characters.

### Interactive Drawing Pad: 
Draw Modi characters or words directly on our site! This drawing pad allows you to sketch Modi letters, making learning through drawing fun and interactive.

### Blog:
 Dive deeper into the history, cultural significance, and evolution of the Modi script with our blog. Our articles provide insights, tutorials, and resources to expand your knowledge and appreciation of this unique script.(yet to add more information).

 ## Screenshots
Landing page![alt text](./public/Screenshot%20from%202024-11-12%2000-18-56.png) 
![alt text](./public/Screenshot%20from%202024-11-12%2000-19-11.png) 
![alt text](./public/Screenshot%20from%202024-11-12%2000-19-28.png) 


 Modi Typing page 
 ![alt text](./public/Screenshot%20from%202024-11-12%2000-19-43.png)


  Transliteration Page
   ![alt text](./public/Screenshot%20from%202024-11-12%2000-20-11.png) 


   Modi Writing Pad![alt text](./public/Screenshot%20from%202024-11-12%2000-20-21.png)


   Blog Page
    ![alt text](./public/Screenshot%20from%202024-11-12%2000-20-36.png)

## Installation

Frontend 
```bash
git clone <repo name>
cd modipatha
npm install
npm start
```
To transliterate from modi to english

Backend
```bash
pip install -r /path/to/requirements.txt
python backend/app.py
```
## Roadmap

## Integrating a Chatbot

Develop and integrate a chatbot feature for enhanced user interaction. This chatbot will assist users in navigating the platform, answering queries, and providing real-time support for various Modi script-related tasks.

##  Machine Learning-Based Transliteration Improvement

Improve the transliteration feature using machine learning models to enhance accuracy and provide more seamless conversion between Modi script and other languages, making it more intuitive and responsive.

## UI Improvements

Revamp the user interface (UI) to create a more modern, user-friendly, and intuitive experience. Focus on accessibility, performance, and design enhancements to ensure smoother interactions and ease of use for all users.

## Load testing using JMeter

Run app.py on 3 servers (for eg: python app.py <port number>)
Run proxy_server.py (python proxy_server.py)
Configure apache jmeter and load test /api/convert endpoint
Results are displayed in backend/load-testing-results
