async function generateShareableLink() {
    const input = document.getElementById('shortUrl').value.trim();
    const resultBox = document.getElementById('result');

    if (!input) {
        alert('Please enter a plus code or address.');
        return;
    }

    resultBox.innerHTML = '⏳ Generating link...';

    try {
        const res = await fetch('/api/geocode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plusCode: input }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Something went wrong');
        }

        const link = document.createElement('a');
        link.href = data.href;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        resultBox.innerHTML = `📍 Location fetched successfully!`;
    } catch (err) {
        resultBox.innerHTML = `❌ ${err.message}`;
    }
}
