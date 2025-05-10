export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { shortUrl } = req.body;

    if (!shortUrl) {
        return res.status(400).json({ error: 'Short URL is required' });
    }

    try {
        // Simulate expanding the shortened URL (replace with actual logic or API call)
        const longUrl = 'https://www.google.com/maps?q=12.9738,80.2634'; // Example long URL
        res.status(200).json({ longUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to expand URL' });
    }
}
