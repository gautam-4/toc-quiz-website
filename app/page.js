// app/page.tsx
import Link from 'next/link';
import { BookOpen, Brain, ArrowRight, Code, Cpu, GitBranch, Lock } from 'lucide-react';
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

        {/* Topic Explanations */}
        <section className="max-w-4xl mx-auto mt-28">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            Understanding Key Concepts
          </h2>

          {/* CSG Explanation */}
          <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Code className="h-6 w-6" />
              Context-Sensitive Grammars (CSG)
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Context-Sensitive Grammars (CSGs) are a formal grammar type in the Chomsky hierarchy,
                positioned between context-free grammars and unrestricted grammars. They are capable
                of generating context-sensitive languages (CSLs).
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-blue-600" />
                    Key Characteristics
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Productions of form αAβ → αγβ</li>
                    <li>Non-contracting (|RHS| ≥ |LHS|)</li>
                    <li>Context-dependent rules</li>
                    <li>More powerful than CFGs</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-blue-600" />
                    Properties
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Closed under union, concatenation</li>
                    <li>Closed under intersection</li>
                    <li>Not closed under complementation</li>
                    <li>Decidable membership problem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* LBA Explanation */}
          <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <Cpu className="h-6 w-6" />
              Linear Bounded Automata (LBA)
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Linear Bounded Automata (LBA) are a type of restricted Turing machine where the tape
                head can only move within a bounded portion of the tape. They are the computational
                model equivalent to context-sensitive grammars.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-purple-600" />
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Bounded tape length</li>
                    <li>Two-way head movement</li>
                    <li>Read/write capabilities</li>
                    <li>Linear space complexity</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-purple-600" />
                    Computational Power
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Recognizes CSLs</li>
                    <li>More powerful than PDAs</li>
                    <li>Less powerful than TMs</li>
                    <li>Deterministic = Nondeterministic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}