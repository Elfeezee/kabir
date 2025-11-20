// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview An AI agent that generates a preliminary furniture design concept.
 *
 * - generateFurnitureDesignConcept - A function that handles the furniture design concept generation process.
 * - GenerateFurnitureDesignConceptInput - The input type for the generateFurnitureDesignConcept function.
 * - GenerateFurnitureDesignConceptOutput - The return type for the generateFurnitureDesignConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFurnitureDesignConceptInputSchema = z.object({
  requirements: z.string().describe('The user provided furniture requirements.'),
  portfolioDescription: z.string().describe('The company\'s existing furniture portfolio description.'),
  serviceCatalog: z.string().describe('The company\'s service catalog.'),
  preferences: z.string().describe('The user\'s design preferences.'),
});
export type GenerateFurnitureDesignConceptInput = z.infer<typeof GenerateFurnitureDesignConceptInputSchema>;

const GenerateFurnitureDesignConceptOutputSchema = z.object({
  designConcept: z.string().describe('The generated furniture design concept.'),
});
export type GenerateFurnitureDesignConceptOutput = z.infer<typeof GenerateFurnitureDesignConceptOutputSchema>;

export async function generateFurnitureDesignConcept(input: GenerateFurnitureDesignConceptInput): Promise<GenerateFurnitureDesignConceptOutput> {
  return generateFurnitureDesignConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFurnitureDesignConceptPrompt',
  input: {schema: GenerateFurnitureDesignConceptInputSchema},
  output: {schema: GenerateFurnitureDesignConceptOutputSchema},
  prompt: `You are an AI assistant specializing in generating preliminary furniture design concepts based on user requirements, the company's existing portfolio, service catalog, and user preferences.

  User Requirements: {{{requirements}}}
  Company Portfolio: {{{portfolioDescription}}}
  Service Catalog: {{{serviceCatalog}}}
  User Preferences: {{{preferences}}}

  Generate a detailed and creative furniture design concept, incorporating all provided information. Consider the style, materials, functionality, and overall aesthetic.
  Ensure the design concept is realistic and aligned with the company's capabilities as described in the service catalog. The design concept should be detailed enough for a potential client to visualize the potential outcome and get a head start on the design process.
  `,
});

const generateFurnitureDesignConceptFlow = ai.defineFlow(
  {
    name: 'generateFurnitureDesignConceptFlow',
    inputSchema: GenerateFurnitureDesignConceptInputSchema,
    outputSchema: GenerateFurnitureDesignConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
