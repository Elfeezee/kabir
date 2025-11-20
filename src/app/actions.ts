'use server';

import { z } from 'zod';
import { generateFurnitureDesignConcept } from '@/ai/flows/generate-furniture-design-concept';
import { portfolioDescription, serviceCatalog } from '@/lib/data';

const DesignConceptSchema = z.object({
  requirements: z.string().min(10, { message: 'Please describe your requirements in at least 10 characters.' }),
  preferences: z.string().min(10, { message: 'Please describe your preferences in at least 10 characters.' }),
});

export type DesignConceptState = {
  message?: string;
  concept?: string;
  errors?: {
    requirements?: string[];
    preferences?: string[];
  };
  resetKey?: string;
};

export async function handleGenerateConcept(prevState: DesignConceptState, formData: FormData): Promise<DesignConceptState> {
  const validatedFields = DesignConceptSchema.safeParse({
    requirements: formData.get('requirements'),
    preferences: formData.get('preferences'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }

  try {
    const result = await generateFurnitureDesignConcept({
      requirements: validatedFields.data.requirements,
      preferences: validatedFields.data.preferences,
      portfolioDescription,
      serviceCatalog,
    });
    
    return { message: 'Concept generated successfully!', concept: result.designConcept, resetKey: Date.now().toString() };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while generating the design concept. Please try again.' };
  }
}

const ContactFormSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters."}),
    email: z.string().email({message: "Please enter a valid email address."}),
    message: z.string().min(10, {message: "Message must be at least 10 characters."})
});

export type ContactFormState = {
    message?: string;
    status?: 'success' | 'error';
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    }
    resetKey?: string;
}

export async function handleContactSubmit(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            status: 'error',
            message: 'Please correct the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    console.log('Contact form submitted:', validatedFields.data);

    return {
        status: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
        resetKey: Date.now().toString()
    };
}
