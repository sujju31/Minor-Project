export type JobPosting = {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
    description:string;
    skills: string;
    eligibility: string;
    lastDate: Date;
    ctc: string;
    jobLocation: string;
    jobType: string;
}
export type User = {
    id: string;
    email: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    admin: boolean;
}