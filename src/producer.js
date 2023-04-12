import kafka from './kafka.mjs';
import partitioners from './partitioners.js';
import crypto from 'node:crypto';

const producer = kafka.producer({
  createPartitioner: partitioners.LegacyPartitioner,
});

await producer.connect();

await producer.send({
  topic: 'DEMO_TOPIC',
  messages: [
    {
      key: crypto.randomUUID(),
      value: 'Hello micro-services worlds!',
    },
    {
      key: crypto.randomUUID(),
      value: 'Hello micro-services mother fuckers!',
    },
  ],
});

await producer.disconnect();
