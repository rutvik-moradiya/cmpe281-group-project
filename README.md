# Rock-N-Roll
---------------------
- University Name: [San jose state university](http://www.sjsu.edu/)
- Course: [Cloud Technologies](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE281.html)
- Professor [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)
- Student: 
  - [Poojan Shah](https://www.linkedin.com/in/poojan-shah-2aa8b5136/)
  - [Rutvik Moradiya](https://www.linkedin.com/in/rutvik-moradiya-a6989312a/)
  - [Jack Kalavadia](https://www.linkedin.com/)
  - [Rishabh Gupta](https://www.linkedin.com/in/rishabhgupta95/)
  


# Pre-requisites Set Up
-----------------------
1. Resources you need to configure on your AWS account
    - S3 Bucket - Create bucket with proper access policy
    - Route53 - http://rocknroll.hackjack.host:3000/
    - EC2 Instance - Setup environment
    - CloudFront Distribution
    - Glacier 365 days 
    - Auto scalling - Scalling Instance according to the demand
    - DynamoDB - Create table named as users and prescriptions
    - Cloudwatch- Complete stack and use alarms, logs, and events data to take automated actions
    - SNS- Notification Services
    - AWS lex Chat bot 

# Here include bullet point list of resources one need to configure in their cloud account. 
    - Aws Account
    - S3 bucket
    - EC2 Instance
    - Load balancer
    - Auto Scalling
    - Cloudwatch
    - SNS 
    - Route53
    
    
# List of required software to download locally:
 - Node.js
 - React.js
 - Aws Account
 

# Here include quick steps on how to compile and run your project on local machine (whichever you used, Mac or Windows either one).

    -EC2 instnace setup;
        -sudo apt-get update
        -sudo apt-get install -y nodejs
        -node -v and npm -v
        -sudo apt-get install nginx -y
        
        
    - Install React And Run forever:
       -npx create-react-app reactHosting
       -cd reactHosting
       -Inside security group clickAdd rule and set type as Custome TCP and give port as 3000 and add another rule with custom TCP with port 8080(To nodejs         port) and select source as Anywhere custom ip4
       -pm2 start npm -- start
       -pm2 ps
    

## Introduction
Rock-N-Roll is a single page Docker, GraphQL and MERN stack (MongoDB, Express, React, Node) application inspired on the concept and style of Spotify. RocknRoll provides a common platform where content creators can add their music and also get profit by having rights to the content they upload. The user is able to choose from the large variety of original content and play songs on the go. To ensure that there is high availability of the platform and content to users, we will use AWS cloud services.

![716iny](https://user-images.githubusercontent.com/45978869/202560869-4301cb1f-6f92-4e95-b884-83daba89b7a6.gif)

## How It Works
To see the most up to date version, please visit [the homepage](http://rocknroll.hackjack.host:3000/).


## Technologies Used
* Routing – Express
* Database – MongoDB, GraphQL
* Libraries – Mongoose, React
* Server Environment – NodeJS
* Storage- AWS S3

## Feature Spotlight
* Users can create Playlist
* Users can search for their favorites, including albums, songs
* Can play albums and songs
* Albums show page with songs list
* Player component
* User authentication pattern

# cmpe281-group-project
