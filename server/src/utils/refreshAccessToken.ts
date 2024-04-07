const refreshAccessToken = async (refreshToken: string | undefined): Promise<string | undefined> => {
  if (!refreshToken) {
    throw new Error('Refresh token is missing.');
  }

  const refreshTokenEndpoint = 'https://oauth2.googleapis.com/token';
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Google client ID or secret is missing.');
  }

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('refresh_token', refreshToken);
  params.append('grant_type', 'refresh_token');

  try {
    const response = await fetch(refreshTokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error('Failed to refresh access token.');
    }

    const data = await response.json();
    const accessToken = data.access_token;
    return accessToken;
  } catch (error) {
    throw new Error('Failed to refresh access token.');
  }
};

export default refreshAccessToken;

