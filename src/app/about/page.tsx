import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { aboutUsContent } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 sm:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
              About KAFAS Group
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A group of capable, talented, energetic, aggressive, enterprising, and well-tested professionals with experience in several fields of human endeavors.
            </p>
          </div>

          <div className="space-y-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Company Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aboutUsContent.overview}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Experience and Core Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aboutUsContent.experience}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">What Sets Us Apart</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aboutUsContent.whatSetsUsApart}</p>
              </CardContent>
            </Card>

             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Our Leverage in Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aboutUsContent.leverage}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aboutUsContent.team}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
