async function generateShareableLink() {
    const shortUrl = document.getElementById('shortUrl').value;
    if (!shortUrl) {
        alert('Please enter a shortened URL.');
        return;
    }

    try {
        const response = await fetch('/api/expand-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ shortUrl }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch the lengthy URL.');
        }

        const { longUrl } = await response.json();
        const url = new URL(longUrl);
        const lat = url.searchParams.get('q').split(',')[0];
        const lng = url.searchParams.get('q').split(',')[1];

        const shareableLink = `<a href="geo:${lat},${lng}?q=${lat},${lng}(My+Home)">Open in Maps</a>`;
        document.getElementById('result').innerHTML = shareableLink;
    } catch (error) {
        alert(error.message);
    }
}
