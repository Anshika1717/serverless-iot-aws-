import json
import boto3
import time

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('iot-data-table')

def lambda_handler(event, context):
    
    temperature = event['temperature']
    humidity = event['humidity']
    light = event['light']
    air_quality = event['air_quality']
    
    timestamp = int(time.time())
    
    table.put_item(
        Item={
            'timestamp': timestamp,
            'temperature': temperature,
            'humidity': humidity,
            'light': light,
            'air_quality': air_quality
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Data stored successfully')
    }
