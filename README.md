# serverless-iot-aws-
# Serverless IoT Data Processing using AWS

## Project Overview

This project implements a fully serverless IoT data processing pipeline using AWS services.

IoT devices send real-time sensor data using MQTT.  
AWS Lambda processes the data and stores it in DynamoDB.  
API Gateway exposes REST endpoints.  
A web dashboard hosted in S3 displays real-time data.  
CloudWatch monitors system activity and SNS sends alerts.

---

## Architecture

IoT Device → AWS IoT Core → Lambda → DynamoDB → API Gateway → S3 Dashboard  
CloudWatch → SNS Alerts

---

## AWS Services Used

- AWS IoT Core
- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- Amazon S3
- Amazon CloudWatch
- Amazon SNS
- AWS IAM

---

## Sample IoT Data

```json
{
  "temperature": 32,
  "humidity": 65,
  "light": 300,
  "air_quality": 120
}
