import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail,  MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <div className="relative h-10 w-32">
                <Image
                  src="/maxpo.png?height=80&width=240"
                  alt="Maxpo Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="mb-6 text-gray-400">
              Redefining the business event landscape by creating dynamic trade shows, conferences, and immersive
              experiences.
            </p>
        <div className="flex gap-4">
  <Link href="https://www.facebook.com/maxpoexhibitions" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20 border border-white/20">
    <Facebook className="h-5 w-5 text-white" />
    <span className="sr-only">Facebook</span>
  </Link>
  <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fmaxpoae" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20 border border-white/20">
    <Twitter className="h-5 w-5 text-white" />
    <span className="sr-only">Twitter</span>
  </Link>
  <Link href="https://www.instagram.com/maxpoexhibitions/" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20 border border-white/20">
    <Instagram className="h-5 w-5 text-white" />
    <span className="sr-only">Instagram</span>
  </Link>
  <Link href="#" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20 border border-white/20">
    <Linkedin className="h-5 w-5 text-white" />
    <span className="sr-only">LinkedIn</span>
  </Link>
</div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 transition-colors hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-gray-400 transition-colors hover:text-white">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">Dubai, UAE (Headquarters)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">India Office</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@maxpo.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-gray-400">Stay updated with our latest events and news.</p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-gray-100 bg-gray-800 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-white text-black hover:bg-gray-200">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Maxpo Exhibitions. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
