const BREVO_SMTP_URL = 'https://api.brevo.com/v3/smtp/email';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const field = (label, value) =>
  value
    ? `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;white-space:nowrap;">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`
    : '';

export async function POST(request) {
  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME || 'Royal Travel Website';
  const toEmail = process.env.BREVO_TO_EMAIL || fromEmail;

  if (!apiKey || !fromEmail) {
    console.error('Brevo is not configured: missing BREVO_API_KEY or BREVO_FROM_EMAIL');
    return Response.json(
      { ok: false, error: 'Email is not configured on the server.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(body.name || '').trim().slice(0, 120);
  const email = String(body.email || '').trim().slice(0, 200);
  const phone = String(body.phone || '').trim().slice(0, 40);
  const interest = String(body.interest || '').trim().slice(0, 120);
  const message = String(body.message || '').trim().slice(0, 5000);
  const source = String(body.source || 'Website').trim().slice(0, 60);

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: 'Please fill in your name, email and message.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const htmlContent = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;">
      <h2 style="margin:0 0 12px;">New website enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px;">
        ${field('Source', source)}
        ${field('Name', name)}
        ${field('Email', email)}
        ${field('Phone', phone)}
        ${field('Interested in', interest)}
        ${field('Message', message)}
      </table>
      <p style="color:#6b7280;margin-top:12px;">Sent from the Royal Travel website contact form.</p>
    </div>
  `.trim();

  try {
    const res = await fetch(BREVO_SMTP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: toEmail, name: 'Royal Travel' }],
        replyTo: { email, name },
        subject: `[${source}] New enquiry from ${name}`,
        htmlContent,
        tags: ['website-contact'],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`Brevo error ${res.status}: ${detail}`);
      return Response.json(
        { ok: false, error: 'We could not send your message right now. Please try again or call us.' },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Brevo request failed:', err);
    return Response.json(
      { ok: false, error: 'We could not reach the mail server. Please try again later.' },
      { status: 502 }
    );
  }
}
