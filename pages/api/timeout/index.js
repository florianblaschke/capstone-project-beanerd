export default async function handler(req, res) {
  setTimeout(() => {
    return res.status(201).json({ proceed: true });
  }, 5000);
}
