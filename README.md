# Bus Safety Monitoring System

## Overview

The **Bus Safety Monitoring System** is an IoT and MERN (MongoDB, Express.js, React, Node.js) stack-based project designed to enhance safety in buses. This system monitors and counts passengers, detects fire, alcohol levels, and other safety parameters to ensure a secure environment within the bus. The system utilizes MongoDB App Services HTTP Endpoint for efficient data management and retrieval.

## Features

- **Real-time Monitoring**: Continuously tracks the number of passengers, fire detection, and alcohol levels.
- **Data Visualization**: Displays sensor data in a user-friendly interface.
- **Alerts and Notifications**: Sends alerts when any parameter exceeds safe levels.
- **IoT Integration**: Uses sensors to collect real-time data.
- **MERN Stack**: Utilizes MongoDB, Express.js, React, and Node.js for a robust and scalable application.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas, MongoDB App Services HTTP Endpoint)
- **IoT**: Various sensors for passenger counting, fire detection, alcohol detection

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account
- IoT sensors (Passenger Counting Sensor, Fire Detection Sensor, Alcohol Detection Sensor)
- ESP8266 or similar microcontroller

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nimesh-korat/bus-safety-monitoring-system.git
   cd bus-safety-monitoring-system
   ```

2. **Install dependencies:**

   ```bash
   cd bus_safety_backend
   npm install
   cd ../bus_safety_admin
   npm install
   cd ../bus_safety_user
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the `bus_safety_backend` directory and add your MongoDB Atlas connection string and other necessary configurations.

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the application:**

   ```bash
   # In the bus_safety_backend directory
   npm start

   # In the bus_safety_admin directory
   npm start

   # In the bus_safety_user directory
   npm start
   ```

### IoT Setup

1. **Connect the sensors** to your ESP8266 or other microcontroller.
2. **Upload the code** to your microcontroller using the Arduino IDE or similar.
3. **Configure the sensors** to send data to your MongoDB App Services HTTP Endpoint.

### Usage

- Open your browser and go to `http://localhost:3000` to see the user dashboard.
- Open your browser and go to `http://localhost:3001` to see the admin dashboard.
- Monitor real-time data for passenger count, fire detection, and alcohol levels.
- Set threshold levels for alerts and notifications.
