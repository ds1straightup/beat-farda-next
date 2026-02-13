import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { projectSchema } from '@/lib/schemas';

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

        return NextResponse.json({ success: true, message: "Project request submitted successfully" }, { status: 201 });
    } catch (error) {
        console.error("Submission Error:", error);

        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: (error as any).errors || (error as any).issues }, { status: 400 });
        }

        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
