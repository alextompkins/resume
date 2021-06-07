export type NameData = {
    first: string,
    middle?: string
    last: string,
};

export type LocationData = {
    city: string,
    country: string,
};

export type BasicData = {
    name: NameData
    occupation: string,
    identities: string[],
    description: string,
    bio: string,
    contactMessage: string,
    email: string,
    phone: string,
    location: LocationData,
    website: string,
    profilePicPath: string,
    pdfUrl: string,
};

export type SocialData = {
    name: string,
    url: string,
    className: string,  // e.g. fa fa-linkedin
}

export type EducationData = {
    school: string,
    degree: string,
    graduated: string,
    description: string,
};

export type WorkData = {
    company: string,
    title: string,
    years: {
        from: string,
        to: string,
    },
    description: string,
};

export type ExperienceData = {
    experienceMessage: string,
    education: EducationData[],
    work: WorkData[],
};

export type SkillData = {
    name: string,
    level: string,
};

export type ProjectData = {
    title: string,
    tagline: string,
    image: string,
    url: string,
};

export type TestimonialData = {
    text: string,
    author: string,
};

export type ResumeData = {
    basic: BasicData,
    socials: SocialData[],
    experience: ExperienceData,
    skills: SkillData[],
    portfolio: {
        projects: ProjectData[]
    },
    testimonials: TestimonialData[]
};
