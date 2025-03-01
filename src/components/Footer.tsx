import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Little Branch Theater</h3>
            <p className="text-gray-400">
              Bringing fresh perspectives to the stage
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shows/upcoming" className="text-gray-400 hover:text-accent">
                  Upcoming Show
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-accent">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-gray-400 hover:text-accent">
                  Our Vision
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">
              Email: info@littlebranch.theater<br />
              Location: [Your City], [State]
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Little Branch Theater. All rights reserved.
        </div>
      </div>
    </footer>
  )
}