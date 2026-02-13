import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';
import { projectSchema } from '@/lib/schemas';
import { ProjectSubmissionEmail } from '@/components/email/project-submission-email';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate data
        const validatedData = projectSchema.parse(body);

        // Insert into database
        // Note: We use JSON.stringify for the services array to store it as JSONB
        await sql`
      INSERT INTO projects (
        name, role, email, phone, social_handle, website, contact_method, 
        services, project_name, idea_description, timeline, budget, 
        reference_links, extra_info
      ) VALUES (
        ${validatedData.name}, 
        ${validatedData.role}, 
        ${validatedData.email}, 
        ${validatedData.phone}, 
        ${validatedData.social_handle}, 
        ${validatedData.website || ''}, 
        ${validatedData.contact_method}, 
        ${JSON.stringify(validatedData.services || [])}, 
        ${validatedData.project_name || ''}, 
        ${validatedData.idea_description || ''}, 
        ${validatedData.timeline}, 
        ${validatedData.budget}, 
        ${validatedData.reference_links || ''}, 
        ${validatedData.extra_info || ''}
      );
    `;

        // Send Email Notification
        // Only attempt to send if API key exists to prevent crashing in dev if not set
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            try {
                await resend.emails.send({
                    from: 'FardaVision Web <onboarding@resend.dev>', // Keep as default for Resend free tier/testing
                    to: 'ds1straightup@gmail.com', // Updated to user's verified Resend email
                    // Note: If using Resend free tier, this email MUST be the one you signed up with.
                    // We'll trust the user to update this or Verify their domain.
                    // Actually, getting the user's email from the form might be better for 'reply-to'.
                    subject: `New Project Request: ${validatedData.name}`,
                    react: ProjectSubmissionEmail({
                        name: validatedData.name,
                        email: validatedData.email,
                        role: validatedData.role,
                        phone: validatedData.phone,
                        social_handle: validatedData.social_handle,
                        website: validatedData.website,
                        contact_method: validatedData.contact_method,
                        services: validatedData.services || [],
                        project_name: validatedData.project_name,
                        idea_description: validatedData.idea_description,
                        timeline: validatedData.timeline,
                        budget: validatedData.budget,
                        reference_links: validatedData.reference_links,
                        extra_info: validatedData.extra_info,
                    }),
                    replyTo: validatedData.email,
                });
            } catch (emailError) {
                console.error("Email Sending Failed:", emailError);
                // We don't want to fail the request if just the email fails, 
                // since the DB insert was successful.
            }
        } else {
            console.warn("RESEND_API_KEY is missing. Email not sent.");
        }

        return NextResponse.json({ success: true, message: "Project request submitted successfully" }, { status: 201 });
    } catch (error) {
        console.error("Submission Error:", error);

        if (error instanceof z.ZodError) {
            // Fix: Use type assertion or access .issues safely
            // @ts-expect-error: ZodError types can be tricky with different versions
            return NextResponse.json({ success: false, errors: error.errors || error.issues }, { status: 400 });
        }

        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
