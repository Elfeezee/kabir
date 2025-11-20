'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { handleGenerateConcept, type DesignConceptState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Loader2 } from 'lucide-react';

const initialState: DesignConceptState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Generate Concept
    </Button>
  );
}

export function DesignAssistant() {
  const [state, formAction] = useActionState(handleGenerateConcept, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.resetKey) {
      formRef.current?.reset();
    }
  }, [state.resetKey]);

  return (
    <section id="design-ai" className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">AI-Powered Design Assistant</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get a head start on your next furniture piece. Describe your vision and let our AI create a preliminary design concept for you.
          </p>
        </div>
        <Card className="shadow-lg">
          <form ref={formRef} action={formAction}>
            <CardHeader>
              <CardTitle>Create Your Design Concept</CardTitle>
              <CardDescription>Fill out the details below to generate your initial design idea.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid w-full gap-2">
                <Label htmlFor="requirements">Functional Requirements</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  placeholder="e.g., 'A dining table for 6 people, must be extendable. Needs to be child-friendly with rounded corners.'"
                  rows={4}
                  required
                />
                {state.errors?.requirements && <p className="text-sm text-destructive">{state.errors.requirements[0]}</p>}
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="preferences">Style & Material Preferences</Label>
                <Textarea
                  id="preferences"
                  name="preferences"
                  placeholder="e.g., 'I prefer a minimalist, Scandinavian style. I like light woods like oak or ash. No visible hardware.'"
                  rows={4}
                  required
                />
                {state.errors?.preferences && <p className="text-sm text-destructive">{state.errors.preferences[0]}</p>}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.concept && (
          <div className="mt-8 animate-in fade-in">
            <h3 className="text-2xl font-bold mb-4 text-center">Your Generated Concept</h3>
            <Card className="bg-background shadow-inner">
              <CardContent className="p-6">
                <pre className="whitespace-pre-wrap font-body text-base leading-relaxed">
                  {state.concept}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
        {state.message && !state.concept && (
          <p className={`mt-4 text-center text-sm ${state.errors ? 'text-destructive' : 'text-muted-foreground'}`}>
            {state.message}
          </p>
        )}
      </div>
    </section>
  );
}
