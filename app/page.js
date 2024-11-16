import Link from 'next/link';
import { BookOpen, Brain, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Theory of Computation Quiz
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Context-Sensitive Grammars
              </CardTitle>
              <CardDescription>
                Test your knowledge of CSGs and their properties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-600">
                Explore questions about CSG rules, language properties, and their relationship with
                the Chomsky hierarchy.
              </p>
              <Link 
                href="/csg-quiz"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Quiz <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-purple-600" />
                Linear Bounded Automata
              </CardTitle>
              <CardDescription>
                Challenge yourself with LBA concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-600">
                Test your understanding of LBAs, their properties, and their relationship with
                context-sensitive languages.
              </p>
              <Link 
                href="/lba-quiz"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Quiz <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}