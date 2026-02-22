# Integration Test Cases

## Test Case 1: IoT Data Ingestion

Objective:
Verify MQTT message is received in IoT Core.

Expected Result:
Message appears in subscribed topic window.

Result:
PASS

---

## Test Case 2: Lambda Trigger Test

Objective:
Verify Lambda executes when IoT message arrives.

Expected Result:
Lambda logs visible in CloudWatch.

Result:
PASS

---

## Test Case 3: DynamoDB Storage Test

Objective:
Verify sensor data is inserted into DynamoDB.

Expected Result:
New record appears in table.

Result:
PASS

---

## Test Case 4: API Retrieval Test

Objective:
Verify API returns sensor data.

Expected Result:
JSON data returned in browser.

Result:
PASS

---

## Test Case 5: Alert Test

Objective:
Verify SNS sends notification on abnormal value.

Expected Result:
Alert email received.

Result:
PASS
