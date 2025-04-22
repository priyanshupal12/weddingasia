import React from 'react'
import { ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';


const Footer = () => {
    return (
        <>
            <footer className="bg-stone-800 text-stone-300 py-12">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-light mb-4 text-white">Contact Us</h4>
                            <p className="mb-2">123 Elegance Avenue</p>
                            <p className="mb-2">Fashion District, CA 90210</p>
                            <p className="mb-2">contact@yourbrand.com</p>
                            <p>+1 (800) 123-4567</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-light mb-4 text-white">Hours</h4>
                            <p className="mb-2">Monday - Friday: 10am - 7pm</p>
                            <p className="mb-2">Saturday: 10am - 6pm</p>
                            <p>Sunday: By Appointment Only</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-light mb-4 text-white">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-amber-500 transition-colors">
                                    <Instagram />
                                </a>
                                <a href="#" className="hover:text-amber-500 transition-colors">
                                    <Facebook />
                                </a>
                                <a href="#" className="hover:text-amber-500 transition-colors">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-700 mt-8 pt-8 text-center">
                        <p className="text-sm">© {new Date().getFullYear()} Jewellery World. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer