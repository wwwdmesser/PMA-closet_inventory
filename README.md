# Closet Inventory Management System

A web application designed to manage and track the closet inventory for the Mu Chapter of Phi Mu Alpha Sinfonia. Built with Node.js and Express, it features automatic alphabetical category sorting, a live search bar, and a secure private section for sensitive records. Designed for easy cloud deployment so it can be seamlessly handed over year after year.

# Features
Automatic Category Organization: Groups items by category dynamically and sorts them alphabetically (A–Z), complete with prominent section headers.

Live Global Search: Filters inventory items by name or category across all sections as you type.

Password-Protected Sub-Section: Restricts secretive inventory items behind a secure passcode without requiring full user account management.

Persistent & Lightweight: Easily stores data and runs locally or deploys for free to cloud hosts.

Custom Dark Theme: Styled with colors to match those of Phi Mu Alpha Sinfonia.

Tech Stack
Back-End: Node.js, Express.js

Front-End: HTML5, CSS3, Vanilla JavaScript

Hosting Ready: Configured for cloud platforms like Render, Railway, or Fly.io

# Getting Started Locally
## Prerequisites
Make sure you have Node.js installed on your machine.

## Installation & Setup
Clone or download this repository to your computer:

Bash
git clone <your-repository-url>
cd closet-inventory
Install dependencies:

Bash
npm install
Start the server:

Bash
node server.js
Open your web browser and navigate to:

Plaintext
http://localhost:3000
# Configuration & Environment Variables
You can customize the private section access password by setting an environment variable before starting the server. If no variable is provided, it defaults to a standard test password (secret123).

Environment Variable Name: PRIVATE_PASSWORD

Example (PowerShell):

PowerShell
$env:PRIVATE_PASSWORD="your_secure_password_here"
node server.js
# Cloud Deployment (For Next Year's Handoff)
To ensure anyone with the link can access the inventory without needing your local computer running, deploy it to a free-tier cloud host (such as Render or Railway):

1. Push your repository to a public GitHub repository.

2. Link your GitHub repository to Render or Railway.

3. Set the Build Command to npm install and the Start Command to node server.js.

4. Add your PRIVATE_PASSWORD as an environment variable in your cloud host dashboard settings.

5. Share the resulting public URL! When it's time to pass the torch next year, transfer repository ownership or share the codebase access with the next student in charge.

# Support
For any support requests, contact Will Messer at williamdmesser@tx.rr.com

# Author
- Will Messer
