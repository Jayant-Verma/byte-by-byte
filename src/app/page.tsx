'use client';

import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import EducationExperience from '@/components/EducationExperience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function HomePage() {
    return (
        <>
            <Hero />
            <EducationExperience />
            <Projects />
            <About />
            <ContactMe />
        </>
    );
}