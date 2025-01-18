const API_URL = 'http://localhost:8080'; // URL do seu back-end

export const login = async (loginData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const error = await response.text();
      return { error };
    }

    const result = await response.json();
    return { login: result.login, password: result.password };
  } catch (error) {
    return { error: 'Erro ao fazer login. Tente novamente.' };
  }
};
