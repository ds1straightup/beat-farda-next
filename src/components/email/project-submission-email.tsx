import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Text,
    Hr,
    Heading,
    Row,
    Column,
} from "@react-email/components";
import * as React from "react";

interface ProjectSubmissionEmailProps {
    name: string;
    email: string;
    role: string;
    phone: string;
    social_handle: string;
    website?: string;
    contact_method: string;
    services: string[];
    project_name?: string;
    idea_description?: string;
    timeline: string;
    budget: string;
    reference_links?: string;
    extra_info?: string;
}

export const ProjectSubmissionEmail = ({
    name,
    email,
    role,
    phone,
    social_handle,
    website,
    contact_method,
    services,
    project_name,
    idea_description,
    timeline,
    budget,
    reference_links,
    extra_info,
}: ProjectSubmissionEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Project Request from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Project Submission</Heading>
                    <Text style={text}>
                        You have received a new project request via the FardaVision website.
                    </Text>

                    <Section style={section}>
                        <Heading style={h2}>Client Details</Heading>
                        <Row>
                            <Column>
                                <Text style={label}>Name:</Text>
                                <Text style={value}>{name}</Text>
                            </Column>
                            <Column>
                                <Text style={label}>Role:</Text>
                                <Text style={value}>{role}</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={label}>Email:</Text>
                                <Text style={value}>
                                    <a href={`mailto:${email}`} style={link}>
                                        {email}
                                    </a>
                                </Text>
                            </Column>
                            <Column>
                                <Text style={label}>Phone:</Text>
                                <Text style={value}>{phone}</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={label}>Social Handle:</Text>
                                <Text style={value}>{social_handle}</Text>
                            </Column>
                            <Column>
                                <Text style={label}>Website:</Text>
                                <Text style={value}>
                                    {website ? (
                                        <a href={website} style={link}>
                                            {website}
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </Text>
                            </Column>
                        </Row>
                        <Text style={label}>Preferred Contact:</Text>
                        <Text style={value}>{contact_method}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading style={h2}>Project Vision</Heading>
                        <Text style={label}>Services Interested In:</Text>
                        <Text style={value}>
                            {services && services.length > 0
                                ? services.join(", ")
                                : "None selected"}
                        </Text>

                        <Text style={label}>Project Name:</Text>
                        <Text style={value}>{project_name || "N/A"}</Text>

                        <Text style={label}>Idea Description:</Text>
                        <Text style={value}>{idea_description || "N/A"}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading style={h2}>Logistics</Heading>
                        <Row>
                            <Column>
                                <Text style={label}>Timeline:</Text>
                                <Text style={value}>{timeline}</Text>
                            </Column>
                            <Column>
                                <Text style={label}>Budget:</Text>
                                <Text style={value}>{budget}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading style={h2}>Additional Info</Heading>
                        <Text style={label}>Reference Links:</Text>
                        <Text style={value}>{reference_links || "N/A"}</Text>

                        <Text style={label}>Extra Details:</Text>
                        <Text style={value}>{extra_info || "N/A"}</Text>
                    </Section>

                    <Text style={footer}>
                        Sent from FardaVision Website System V6.5
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: "#000000",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const h1 = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
};

const h2 = {
    color: "#a855f7",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "20px 0 10px",
    textTransform: "uppercase" as const,
};

const section = {
    padding: "24px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.05)",
    marginBottom: "20px",
};

const text = {
    color: "#cccccc",
    fontSize: "16px",
    lineHeight: "26px",
};

const label = {
    color: "#888888",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase" as const,
    marginBottom: "4px",
    marginTop: "12px",
};

const value = {
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "12px",
    marginTop: "0",
};

const link = {
    color: "#a855f7",
    textDecoration: "underline",
};

const hr = {
    borderColor: "rgba(255,255,255,0.1)",
    margin: "20px 0",
};

const footer = {
    color: "#666666",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "40px",
};

export default ProjectSubmissionEmail;
