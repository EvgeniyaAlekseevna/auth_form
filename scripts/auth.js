document.getElementById('auth-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await mockFetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            alert('Login successful!');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error('Error:', error);
    }
});

function mockFetch(url, options) {
    return new Promise((resolve) => {
        console.log('Request URL:', url);
        console.log('Request options:', options);

        setTimeout(() => {
            if (options.body.includes('success@example.com')) {
                resolve(new Response(null, { status: 200 }));
            } else {
                resolve(new Response(null, { status: 401 }));
            }
        }, 1000);
    });
}