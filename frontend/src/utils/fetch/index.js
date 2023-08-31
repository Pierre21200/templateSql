const BACKEND_URL = 'http://localhost:5000';

export async function login(userInfos) {
  try {
    const response = await fetch(`${BACKEND_URL}/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userInfos),
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error('Erreur lors de la connexion');
    }
  } catch (error) {
    console.log(error);
  }
}
