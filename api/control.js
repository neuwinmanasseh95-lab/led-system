export default async function handler(req, res) {
  const { command } = req.query;

  // 🔥 Replace with YOUR ngrok URL
  const ESP_URL = "https://abc123.ngrok-free.app";

  try {
    const response = await fetch(`${ESP_URL}/control?command=${command}`);
    const data = await response.text();

    res.status(200).json({
      success: true,
      command,
      response: data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
