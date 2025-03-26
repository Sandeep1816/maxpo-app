import Image from "next/image"
import { ArrowRight, CheckCircle, Briefcase, MapPin, Clock, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/WhatsApp Image 2025-03-21 at 12.41.51 PM.jpeg"
            alt="Careers at Maxpo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Careers at Maxpo</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Join our team of passionate professionals and help shape the future of the exhibition industry.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Join Maxpo?</h2>
            <p className="mb-16 text-lg text-gray-600">
              At Maxpo, we believe in talent, ambition, and fresh perspectives. We offer a dynamic work environment
              where creativity thrives and innovation is encouraged.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Innovation Culture</h3>
                <p className="text-gray-600">
                  We foster a culture of innovation where new ideas are welcomed and creativity is encouraged. Our team
                  members have the freedom to explore new approaches and contribute to the evolution of our industry.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Global Opportunities</h3>
                <p className="text-gray-600">
                  With offices in Dubai and India, and projects around the world, Maxpo offers global career
                  opportunities and the chance to work with diverse teams and clients across different markets and
                  cultures.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Professional Growth</h3>
                <p className="text-gray-600">
                  We invest in our team&apos;s development through training programs, mentorship opportunities, and
                  challenging projects that push boundaries and develop new skills.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Collaborative Environment</h3>
                <p className="text-gray-600">
                  Our team works collaboratively, sharing knowledge and expertise to create exceptional exhibition
                  experiences. We believe in the power of teamwork and the value of diverse perspectives.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 5 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-lg font-bold">5</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We understand the importance of balance and offer flexible work arrangements, competitive benefits,
                  and a supportive environment that prioritizes wellbeing.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 6 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-lg font-bold">6</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Impactful Work</h3>
                <p className="text-gray-600">
                  At Maxpo, your work has a direct impact on the success of our events and the experiences of thousands
                  of attendees. We create platforms that drive business growth and foster meaningful connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto">
              <Image
                src="/images/careers/WhatsApp Image 2025-03-21 at 2.34.40 PM.jpeg"
                alt="Maxpo Team Culture"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Culture</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  At Maxpo, we work hard, but we also know how to keep the energy high. Our culture is a mix of
                  collaboration, ambition, and celebration. We support each other, push each other to do better, and
                  celebrate our successes together.
                </p>
                <p>
                  Innovation drives everything we do. Brainstorming sessions at Maxpo are dynamic, fast-paced, and
                  filled with fresh perspectives. We challenge conventional thinking, explore new possibilities, and
                  turn ambitious ideas into reality.
                </p>
                <p>
                  We operate in a world that&apos;s constantly evolving, and we embrace that change. Our team stays ahead of
                  industry trends, new technologies, and market shifts to ensure our events remain relevant, impactful,
                  and future-focused.
                </p>
                <p>
                  At the core of it all, Maxpo is more than a team—we&apos;re a force for change in the industry, shaping the
                  future of global trade shows and business connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Open Positions</h2>
            <p className="mb-16 text-lg text-gray-600">
              Explore our current opportunities and find your perfect role at Maxpo.
            </p>
          </div>

          <Tabs defaultValue="dubai" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="dubai">Dubai Office</TabsTrigger>
              <TabsTrigger value="india">India Office</TabsTrigger>
            </TabsList>

            <TabsContent value="dubai" className="space-y-6">
              {/* Job 1 */}
              <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Event Manager</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Dubai, UAE
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Clock className="mr-1 h-3 w-3" /> Immediate
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re looking for an experienced Event Manager to plan and execute trade shows and exhibitions,
                      managing all aspects from concept to completion.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Manage end-to-end event planning and execution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Coordinate with vendors, exhibitors, and sponsors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Develop and manage event budgets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="rounded-full bg-blue-950 px-6 text-white hover:bg-gray-800">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Job 2 */}
              <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Marketing Specialist</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Dubai, UAE
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Clock className="mr-1 h-3 w-3" /> Immediate
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re seeking a creative and data-driven Marketing Specialist to develop and implement marketing
                      strategies for our exhibitions and events.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Develop and execute marketing campaigns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Manage social media and digital marketing initiatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Analyze campaign performance and optimize strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="rounded-full bg-blue-950 px-6 text-white hover:bg-gray-800">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="india" className="space-y-6">
              {/* Job 3 */}
              <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Exhibition Designer</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Mumbai, India
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Clock className="mr-1 h-3 w-3" /> Immediate
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re looking for a talented Exhibition Designer to create innovative and impactful exhibition
                      stands and spaces for our clients.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Design exhibition stands and spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Create 3D visualizations and renderings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">
                            Collaborate with clients to understand their brand and objectives
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="rounded-full bg-black px-6 text-white hover:bg-gray-800">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Job 4 */}
              <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Business Development Manager</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Mumbai, India
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <DollarSign className="mr-1 h-3 w-3" /> Competitive
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re seeking an experienced Business Development Manager to drive growth in the Indian market and
                      expand our client base.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Identify and pursue new business opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Build and maintain client relationships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">
                            Develop proposals and presentations for potential clients
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="rounded-full bg-black px-6 text-white hover:bg-gray-800">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals to join our
              team.
            </p>
            <Button size="lg" className="rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800">
              Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Internship Program</h2>
            <p className="mb-16 text-lg text-gray-600">
              Gain hands-on experience in the exhibition industry through our comprehensive internship program.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto">
              <Image src="/images/careers/WhatsApp Image 2025-03-21 at 2.46.38 PM.jpeg" alt="Maxpo Interns" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-3 text-2xl font-semibold">Learn from Industry Experts</h3>
                <p className="text-gray-600">
                  Our internship program offers a unique opportunity to work alongside experienced professionals and
                  gain valuable insights into the exhibition industry. You&apos;ll be involved in real projects and
                  contribute to the success of our events.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">Develop Practical Skills</h3>
                <p className="text-gray-600">
                  From event planning and marketing to design and client management, our internships provide hands-on
                  experience in various aspects of the exhibition business, helping you build a strong foundation for
                  your career.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">Potential for Full-Time Roles</h3>
                <p className="text-gray-600">
                  Many of our full-time team members started as interns. We&apos;re committed to identifying and nurturing
                  talent, with opportunities for exceptional interns to join our team permanently.
                </p>
              </div>

              <Button size="lg" className="mt-4 rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800">
                Apply for Internship <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      {/* <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">What Our Team Says</h2>
            <p className="mb-16 text-lg text-gray-600">Hear from the people who make Maxpo a great place to work.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            {/* <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="John Doe"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-500">Event Manager, 5 years</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                &quot;Working at Maxpo has been an incredible journey. The collaborative environment, opportunities for
                growth, and the chance to work on exciting global projects have made it a rewarding experience. I&apos;ve
                developed both professionally and personally during my time here.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            {/* <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Jane Smith"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Jane Smith</h3>
                  <p className="text-gray-500">Marketing Specialist, 3 years</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                &quot;The culture at Maxpo is what sets it apart. There&apos;s a perfect balance of autonomy and support, allowing
                you to take ownership of your work while having the resources you need to succeed. The team is
                passionate, innovative, and always pushing boundaries.&quot;
              </p>
            </div> */}

            {/* Testimonial 3 */}
            {/* <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ahmed Hassan"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ahmed Hassan</h3>
                  <p className="text-gray-500">Exhibition Designer, 2 years</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                &quot;Starting as an intern and growing into a full-time role has been an amazing experience. Maxpo truly
                invests in its people, providing mentorship, training, and opportunities to work on challenging projects
                that push your creative boundaries.&quot;
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section .*/}
      {/* <section className="bg-gray-100 py-24 text-white">
  <div className="container mx-auto px-4">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
        Ready to Join Our Team?
      </h2>
      <p className="mb-8 text-lg text-gray-300">
        Explore our current opportunities and take the next step in your career with Maxpo.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="rounded-full bg-white px-8 text-black hover:bg-gray-200 cursor-pointer"
        >
          View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full border-white px-8 text-black hover:bg-white hover:text-black cursor-pointer"
        >
          Submit Your Resume
        </Button>
      </div>
    </div>
  </div>
</section> */}
    </div>
  )
}

