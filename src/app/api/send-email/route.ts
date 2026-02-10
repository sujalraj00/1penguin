import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.budget || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to your inbox
    const recipientEmail = 'hello@1penguin.in';

    // Create email content
    const mailOptions = {
      from: 'hello@1penguin.in',
      to: recipientEmail,
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7C3AED;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
            <p><strong>Company:</strong> ${body.company ? escapeHtml(body.company) : 'Not provided'}</p>
            <p><strong>Service:</strong> ${escapeHtml(body.service)}</p>
            <p><strong>Budget:</strong> ${escapeHtml(body.budget)}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">
              ${escapeHtml(body.message)}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="color: #999; font-size: 12px;">
            This is an automated message from your website's contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Company: ${body.company || 'Not provided'}
Service: ${body.service}
Budget: ${body.budget}

Message:
${body.message}

---
This is an automated message from your website's contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: body.email,
      subject: 'We received your message - 1penguin',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7C3AED;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${escapeHtml(body.name)},</p>
          
          <p style="line-height: 1.6; color: #555;">
            We've received your message and will get back to you as soon as possible. Our team typically responds within 24-48 hours.
          </p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Service Request:</strong> ${escapeHtml(body.service)}</p>
            <p><strong>Budget Range:</strong> ${escapeHtml(body.budget)}</p>
          </div>

          <p style="line-height: 1.6; color: #555;">
            In the meantime, feel free to explore our portfolio and services on our website.
          </p>

          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Best regards,<br/>
            The 1penguin Team
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
