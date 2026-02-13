CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  social_handle TEXT NOT NULL,
  website TEXT,
  contact_method TEXT NOT NULL,
  services JSONB,
  project_name TEXT,
  idea_description TEXT,
  timeline TEXT NOT NULL,
  budget TEXT NOT NULL,
  reference_links TEXT,
  extra_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);
