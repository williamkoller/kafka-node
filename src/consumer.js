import kafka from './kafka.mjs';

const consumer = kafka.consumer({ groupId: 'kafka-node' });

await consumer.connect();

await consumer.subscribe({ topic: 'DEMO_TOPIC', fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      topic,
      partition,
      key: message.key.toString(),
      value: message.value.toString(),
      offset: message.offset,
    });
  },
});
