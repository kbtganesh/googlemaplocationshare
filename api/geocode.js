export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { plusCode } = req.body;

  if (!plusCode) {
    return res.status(400).json({ error: 'Missing plusCode or address' });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const encoded = encodeURIComponent(plusCode);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=${apiKey}`;
  console.log('came into api', url);
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (
      !data.results ||
      !data.results[0] ||
      !data.results[0].geometry ||
      !data.results[0].geometry.location
    ) {
      return res.status(400).json({ error: 'Invalid plus code or address' });
    }

    const { lat, lng } = data.results[0].geometry.location;
    const geoHref = `geo:${lat},${lng}?q=${lat},${lng}`;
  console.log('came into geoHref', JSON.stringify(data.results, null, 2));

    return res.status(200).json({ lat, lng, href: geoHref });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}
