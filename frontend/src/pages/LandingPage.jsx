import { Link } from 'react-router-dom';
import { FileText, Zap, Download, Eye, Menu, X, FileUser } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
                <FileText className="h-8 w-8 primary-color" />
                <h1 className="text-2xl font-bold">
                  <span className="primary-color">CV</span>
                  <span className="secondary-color">Xpert</span>
                </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#templates" className="text-gray-700 hover:text-blue-600 transition">Templates</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <Link to="/dashboard">
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-color px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-color">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#templates" className="block text-gray-700 hover:text-blue-600 transition">Templates</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <Link to="/dashboard">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-secondary-color px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary-color">
                  Get Started
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Create Your Perfect Resume in
              <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"> Minutes</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Build professional resumes with our easy-to-use builder. Choose from expert-designed templates and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/templates">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary-color px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Build Resume Now
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  View My Resumes
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Templates
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-2 pt-4">
                  <div className="h-3 bg-gray-100 rounded"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="h-3 bg-gray-100 rounded"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose CVXpert?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a professional resume that stands out
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Zap size={32} color="#2563EB" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-gray-600">Create professional resumes in minutes, not hours</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <FileText size={32} color="#7C3AED" />
              </div>
              <h3 className="text-xl font-semibold">Expert Templates</h3>
              <p className="text-gray-600">ATS-friendly templates designed by professionals</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Eye size={32} color="#16A34A" />
              </div>
              <h3 className="text-xl font-semibold">Live Preview</h3>
              <p className="text-gray-600">See changes in real-time as you build</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Download size={32} color="#EA580C" />
              </div>
              <h3 className="text-xl font-semibold">Easy Export</h3>
              <p className="text-gray-600">Download in PDF or share with a link</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-stone-900">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your Resume?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join thousands of job seekers who landed their dream job with CVXpert
          </p>
          <Link to="/templates">
            <button className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-primary-color text-white hover:bg-gray-100">
              Start Building Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <FileText size={24} className="primary-color" />
              <h1 className="text-lg font-bold">
                  <span className="primary-color">CV</span>
                  <span className="secondary-color">Xpert</span>
              </h1>
            </div>
            <p className="text-gray-600 text-sm text-center">
              © 2026 CVXpert. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition">Terms</a>
              <a href="#" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}