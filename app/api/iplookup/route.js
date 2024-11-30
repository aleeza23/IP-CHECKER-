// app/api/iplookup/route.js

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const ip = searchParams.get('ip');
  
    if (!ip) {
      return new Response(JSON.stringify({ error: 'IP address is required' }), { status: 400 });
    }
  
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
  
      // Check for error in API response
      if (data.status === 'fail') {
        return new Response(JSON.stringify({ error: data.message }), { status: 400 });
      }
  
      // Send the data back to the client
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch IP details' }), { status: 500 });
    }
  }
  