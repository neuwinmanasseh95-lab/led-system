export default async function handler(req, res) {
  try {
    const { command } = req.query;

    // ❗ Replace with your ESP32 IP
    const ESP_IP = "http://192.168.1.45";

    if (!command) {
      return res.status(400).json({ error: "Missing command" });
    }

    // Send request to ESP32
    const response = await fetch(`${ESP_IP}/control?command=${command}`, {
      method: "GET",
    });

    const text = await response.text();

    return res.status(200).json({
      success: true,
      command,
      esp_response: text
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
