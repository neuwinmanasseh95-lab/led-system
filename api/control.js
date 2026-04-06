import mqtt from "mqtt";

export default function handler(req, res) {
  const { command } = req.query;

  const client = mqtt.connect("mqtt://broker.hivemq.com");

  client.on("connect", () => {
    client.publish("home/leds/control", command, () => {
      client.end();
    });
  });

  res.status(200).json({ success: true });
}
