# MongoDB Seeding and Query Performance Analysis

This repository contains a script to seed a MongoDB collection with 10 million user records and perform query performance analysis before and after indexing. The aim is to compare the execution time and efficiency of queries with and without indexes.

## Seeding Script

The provided script seeds the `users` collection in the `backoffice` database with 10 million records. Each record contains a `userId`, a `uniqueId`, an `email`, a `password`, and an array of `products`.

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.

### Usage

To run the script, use the following command:

```bash
node seedDatabase.js
```

This script will connect to the MongoDB server, create 10 million user records, and insert them into the users collection in batches of 1000.

### Query Performance Analysis
##### Initial Queries (Without Indexes)
###### Query by userId
**Query**:
```json 
{
  "userId": 799999
}
```
**Performance Summary:**

Documents returned: 0
Documents examined: 10,000,000
Execution time: 3581 ms
Indexes used: None (COLLSCAN)

**Raw Output:**

```json
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "backoffice.users",
    "parsedQuery": { "userId": { "$eq": 799999 } },
    "winningPlan": {
      "stage": "COLLSCAN",
      "filter": { "userId": { "$eq": 799999 } },
      "direction": "forward"
    }
  },
  "executionStats": {
    "executionTimeMillis": 3581,
    "totalDocsExamined": 10000000
  }
}
```

###### Query by uniqueId
**Query**
```json
{
  "uniqueId": "034477cf-e2f2-4df8-8d30-99cc931e6509"
}
```

**Performance Summary:**

Documents returned: 1
Documents examined: 10,000,000
Execution time: 3245 ms
Indexes used: None (COLLSCAN)

**Raw Output:**

```json
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "backoffice.users",
    "parsedQuery": { "uniqueId": { "$eq": "034477cf-e2f2-4df8-8d30-99cc931e6509" } },
    "winningPlan": {
      "stage": "COLLSCAN",
      "filter": { "uniqueId": { "$eq": "034477cf-e2f2-4df8-8d30-99cc931e6509" } },
      "direction": "forward"
    }
  },
  "executionStats": {
    "executionTimeMillis": 3245,
    "totalDocsExamined": 10000000
  }
}
```

### Creating Indexes
Indexes were created on userId and uniqueId fields.

```javascript
db.users.createIndex({ userId: 1 })
db.users.createIndex({ uniqueId: 1 })
```

##### Initial Queries (Without Indexes)
###### Query by userId
**Query**:
```json 
{
  "userId": 789089
}
```
**Performance Summary:**

Documents returned: 1
Documents examined: 1
Execution time: 1 ms
Indexes used: userId_1 (IXSCAN)

**Raw Output:**

```json
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "backoffice.users",
    "parsedQuery": { "userId": { "$eq": 789089 } },
    "winningPlan": {
      "stage": "FETCH",
      "inputStage": {
        "stage": "IXSCAN",
        "keyPattern": { "userId": 1 },
        "indexName": "userId_1",
        "indexBounds": { "userId": ["[789089, 789089]"] }
      }
    }
  },
  "executionStats": {
    "executionTimeMillis": 1,
    "totalDocsExamined": 1
  }
}
```

###### Query by uniqueId
**Query**
```json
{
  "uniqueId": "034477cf-e2f2-4df8-8d30-99cc931e6509"
}
```

**Performance Summary:**

Documents returned: 1
Documents examined: 1
Execution time: 1 ms
Indexes used: uniqueId_1 (IXSCAN)

**Raw Output:**

```json
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "backoffice.users",
    "parsedQuery": { "uniqueId": { "$eq": "034477cf-e2f2-4df8-8d30-99cc931e6509" } },
    "winningPlan": {
      "stage": "FETCH",
      "inputStage": {
        "stage": "IXSCAN",
        "keyPattern": { "uniqueId": 1 },
        "indexName": "uniqueId_1",
        "indexBounds": { "uniqueId": ["[034477cf-e2f2-4df8-8d30-99cc931e6509, 034477cf-e2f2-4df8-8d30-99cc931e6509]"] }
      }
    }
  },
  "executionStats": {
    "executionTimeMillis": 1,
    "totalDocsExamined": 1
  }
}
```

## Conclusion
Adding indexes on the userId and uniqueId fields significantly improved query performance. The execution time was reduced from several seconds to just 1 millisecond, demonstrating the importance of indexing in large datasets.

For further details or issues, please refer to the MongoDB documentation or open an issue in this repository