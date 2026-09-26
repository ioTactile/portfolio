import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const resend = new Resend(env.RESEND_API_KEY);

export const actions = {
  default: async ({ request }) => {
    if (!env.RESEND_API_KEY) {
      return fail(500, { contactStatus: 'error' as const });
    }

    const formData = await request.formData();
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return fail(400, { contactStatus: 'error' as const });
    }

    const { error } = await resend.emails.send({
      from: 'Jordan Site <onboarding@resend.dev>',
      to: ['jbs.io@protonmail.com'],
      replyTo: email,
      subject: `Nouveau message depuis le site — ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    if (error) {
      return fail(500, { contactStatus: 'error' as const });
    }

    return { contactStatus: 'success' as const };
  },
} satisfies Actions;
