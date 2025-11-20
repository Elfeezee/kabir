import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { visionAndMission } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
              Vision & Mission
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our commitment to excellence, quality, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="shadow-lg">
                <CardHeader className="text-center items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Target className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Our Vision & Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">{visionAndMission.vision}</p>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader className="text-center items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Company Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">{visionAndMission.objectives}</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
