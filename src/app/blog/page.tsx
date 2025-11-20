import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
              From the Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Insights, tips, and stories from the Kafas Group team. Your source for industry trends and expert advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => {
              const postImage = PlaceHolderImages.find(img => img.id === post.imagePlaceholderId);
              return (
                <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {postImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={postImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                        </div>
                    </div>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="px-0">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
