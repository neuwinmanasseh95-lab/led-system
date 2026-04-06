export default async function handler(req, res) {
  const { command } = req.query;

  const ESP_IP = "http://192.168.1.45"; // 🔥 replace with your ESP IP

  try {
    const response = await fetch(`${ESP_IP}/control?command=${command}`);
    const data = await response.text();

    res.status(200).json({ success: true, esp: data });
  } catch (err) {
    res.status(500).json({ error: "ESP32 not reachable" });
  }
}
