const connectDB = require("../../db/dbConnect");

async function ViewAlertsUser(req, res) {
    try {
        const db = await connectDB();

        const sensorGreaterValues = {
            fire: 0, //collection name : max value for alert
            mq_135: 0,
            mq_3: 0,
            smoke: 0,
            temprature: 30,
        };

        const sensorNames = {
            fire: "Fire Sensor",
            mq_135: "MQ 135 Sensor",
            mq_3: "MQ3 Sensor",
            smoke: "Smoke Sensor",
            temprature: "Temperature Sensor",
        };

        const collections = Object.keys(sensorGreaterValues);

        const results = await Promise.all(
            collections.map(async (collectionName) => {
                const collection = db.collection(collectionName);
                const greaterThanValue = sensorGreaterValues[collectionName];
                const sensorName = sensorNames[collectionName];

                const pipeline = [
                    {
                        $group: {
                            _id: "$deviceId",
                            lastSensorValue: { $last: "$sensorValue" },
                            lastTimestamp: { $last: "$timestamp" }, // Add last timestamp
                        },
                    },
                    {
                        $match: {
                            lastSensorValue: { $gt: greaterThanValue },
                        },
                    },
                    {
                        $lookup: {
                            from: "devices",
                            localField: "_id",
                            foreignField: "_id",
                            as: "device",
                        },
                    },
                    {
                        $unwind: "$device",
                    },
                    {
                        $project: {
                            sensorName,
                            sensorValue: "$lastSensorValue",
                            timestamp: "$lastTimestamp", // Include timestamp
                            userId: "$device.userId",
                            deviceName: "$device.deviceName",
                            area: "$device.area",
                        },
                    },
                ];

                const data = await collection.aggregate(pipeline).toArray();

                return data;
            })
        );

        const flattenedResults = results.flat();

        const alertData = flattenedResults.reduce((acc, currentValue) => {
            const { deviceName, _id, sensorName, sensorValue } = currentValue;
            if (!acc[_id]) {
                acc[_id] = { deviceName, deviceId: _id.toString(), data: [] };
            }
            acc[_id].data.push({ sensorName, sensorValue });
            return acc;
        }, {});

        const alertDataArray = Object.values(alertData);

        res.status(200).json({
            liveData: alertDataArray,
            success: true,
            message: "Alert fetched successfully!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { ViewAlertsUser };
