let command = "NONE";

export default function handler(req, res) {
  const { command: cmd } = req.query;

  // If button clicked → store command
  if (cmd) {
    command = cmd;
    return res.status(200).json({ success: true, command });
  }

  // If ESP32 calls → return last command
  return res.status(200).json({ command });
}
