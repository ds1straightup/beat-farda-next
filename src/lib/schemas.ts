import { z } from "zod"

export const projectSchema = z.object({
    name: z.string().min(1, "Name is required"),
    role: z.string().min(1, "Role is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone is required"),
    social_handle: z.string().min(1, "Social handle is required"),
    website: z.string().optional(),
    contact_method: z.string().min(1, "Contact method is required"),
    services: z.array(z.string()).optional(),
    project_name: z.string().optional(),
    idea_description: z.string().optional(),
    timeline: z.string().min(1, "Timeline is required"),
    budget: z.string().min(1, "Budget is required"),
    reference_links: z.string().optional(),
    extra_info: z.string().optional(),
})

export type ProjectFormValues = z.infer<typeof projectSchema>
