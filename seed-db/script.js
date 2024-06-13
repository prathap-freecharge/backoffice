const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

const url = 'mongodb://localhost:27017';
const dbName = 'backoffice';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const batch_size = 1000;  // Number of documents to insert per batch
const total_batches = 10000; // Total number of batches
const userIdToQuery = 500000; // Example userId to search
const uniqueIdToQuery = uuidv4(); // Example uniqueId to search

// Function to seed the database with fake records
async function seedDatabase() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const collection = db.collection('users');

        // Optional: Clear the collection if already present
        await collection.deleteMany({});

        console.time("Seeding Execution Time"); // Start measuring execution time

        for (let batch = 0; batch < total_batches; batch++) {
            let users = [];
            for (let i = 0; i < batch_size; i++) {
                const userId = batch * batch_size + i;
                users.push({
                    userId: userId,
                    uniqueId: uniqueId(),
                    email: `user${userId}@gmail.com`,
                    password: 'password' + userId,
                    products: [
                        {
                            productName: "quick-overdraft",
                            moduleName: "hunter",
                            roles: ["admin", "CPA"]
                        },
                        {
                            productName: "merchant-current-account",
                            moduleName: "field-investigation",
                            roles: ["admin", "CPA"]
                        },
                        {
                            productName: "merchant-finance-account",
                            moduleName: "field-investigation",
                            roles: ["admin", "CPA"]
                        }
                    ]
                });
            }

            await collection.insertMany(users);
            console.log(`Inserted batch ${batch + 1}`);
        }

        console.log("Database seeded! :)");
        console.timeEnd("Seeding Execution Time"); // End measuring execution time
    } catch (err) {
        console.log(err.stack);
    }
}

// Function to measure query performance before indexing
async function measureQueryTimeBeforeIndexing() {
    try {
        const db = client.db(dbName);
        const collection = db.collection('users');

        console.time("Query by userId before indexing");
        await collection.findOne({ userId: userIdToQuery });
        console.timeEnd("Query by userId before indexing");

        console.time("Query by uniqueId before indexing");
        await collection.findOne({ uniqueId: uniqueIdToQuery });
        console.timeEnd("Query by uniqueId before indexing");
    } catch (err) {
        console.log(err.stack);
    }
}

// Function to create indexes
async function createIndexes() {
    try {
        const db = client.db(dbName);
        const collection = db.collection('users');

        console.time("Creating Index on userId");
        await collection.createIndex({ userId: 1 });
        console.timeEnd("Creating Index on userId");

        console.time("Creating Index on uniqueId");
        await collection.createIndex({ uniqueId: 1 });
        console.timeEnd("Creating Index on uniqueId");
    } catch (err) {
        console.log(err.stack);
    }
}

// Function to measure query performance after indexing
async function measureQueryTimeAfterIndexing() {
    try {
        const db = client.db(dbName);
        const collection = db.collection('users');

        console.time("Query by userId after indexing");
        await collection.findOne({ userId: userIdToQuery });
        console.timeEnd("Query by userId after indexing");

        console.time("Query by uniqueId after indexing");
        await collection.findOne({ uniqueId: uniqueIdToQuery });
        console.timeEnd("Query by uniqueId after indexing");
    } catch (err) {
        console.log(err.stack);
    }
}

// Main function to run all steps in sequence
async function run() {
    try {
        await seedDatabase();
        await measureQueryTimeBeforeIndexing();
        await createIndexes();
        await measureQueryTimeAfterIndexing();
    } finally {
        client.close();
    }
}

run();
