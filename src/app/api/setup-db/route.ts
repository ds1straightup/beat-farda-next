import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        social_handle VARCHAR(255) NOT NULL,
        website VARCHAR(255),
        contact_method VARCHAR(50) NOT NULL,
        services JSONB DEFAULT '[]'::jsonb,
        project_name VARCHAR(255),
        idea_description TEXT,
        timeline VARCHAR(50),
        budget VARCHAR(50),
        reference_links TEXT,
        extra_info TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'new'
      );
    `;
        return NextResponse.json({ message: "Database table 'projects' created successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
