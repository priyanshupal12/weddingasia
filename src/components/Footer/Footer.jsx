import React from 'react'
import { FaMeta, FaXTwitter, FaPhone, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaEnvelope, FaTelegramPlane, FaPinterestP, FaYoutube, FaSnapchatGhost } from "react-icons/fa";



const Footer = () => {

    return (
        <>
            <footer className="bg-stone-800 text-stone-300 py-12">
                {/* <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-light mb-4 text-white">Contact Us</h4>
                            <p className="">B-217-218, Ashoka Super Market Swami Vivekananda Rd, next to Patkar,</p>
                            <p className="mb-2">next to PATKAR VARDE COLLEGE, Piramal Nagar, Goregaon West, Mumbai, Maharashtra 400104</p>
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
                                <a href="#" className="hover:text-amber-500 transition-colors text-2xl">
                                    <BsInstagram />
                                </a>
                                <a href="#" className="hover:text-amber-500 transition-colors text-2xl">
                                    <FaMeta />
                                </a>
                                <a href="#" className="hover:text-amber-500 transition-colors text-2xl">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-700 mt-8 pt-8 text-center">
                        <p className="text-sm">© {new Date().getFullYear()} Jewellery World. All rights reserved.</p>
                    </div>
                </div> */}
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-3 gap-12 text-stone-100">
                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xl font-light mb-4 text-white tracking-wide">Contact Us</h4>
                            <address className="not-italic leading-relaxed text-stone-300 space-y-2 text-sm md:text-base">
                                <p>B-217-218, Ashoka Super Market</p>
                                <p>Swami Vivekananda Rd, next to Patkar College</p>
                                <p>Piramal Nagar, Goregaon West</p>
                                <p>Mumbai, Maharashtra 400104</p>

                                <div className="mt-4 flex items-center gap-2">
                                    <FaEnvelope className="text-amber-400 w-4 h-4" />
                                    <a
                                        href="jewelleryworldexhibitions@gmail.com"
                                        className="hover:underline text-amber-400"
                                    >
                                        jewelleryworldexhibitions@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-amber-400 w-4 h-4" />
                                    <span>+91 9323275057</span>
                                </div>
                            </address>
                        </div>

                        {/* Hours */}
                        <div>
                            <h4 className="text-xl font-light mb-4 text-white tracking-wide">Hours</h4>
                            <ul className="text-stone-300 space-y-2 text-md">
                                <li>Mon – Fri: 10am – 7pm</li>
                                <li>Saturday: 10am – 6pm</li>
                                <li>Sunday: <span className="italic text-stone-400">By Appointment Only</span></li>
                            </ul>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <h4 className="text-xl font-light mb-4 text-white tracking-wide">Follow Us</h4>
                            <div className="grid grid-cols-4 gap-x-1 gap-y-2 max-w-[12rem] text-2xl text-stone-300">
                                <a href="https://www.instagram.com/jewelleryworld_exhibitions/" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <BsInstagram />
                                </a>
                                <a href="facebook.com/JewelleryWorldExhibitions" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaMeta />
                                </a>
                                <a href="https://x.com/JWExbihitions" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaXTwitter />
                                </a>
                                <a href="https://t.me/JewelleryWorldExhibitons" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaTelegramPlane />
                                </a>
                                <a href="https://in.pinterest.com/jewelleryworldexhibitions/" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaPinterestP />
                                </a>
                                <a href="https://www.youtube.com/@JewelleryWorldExhibitions" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaYoutube />
                                </a>
                                <a href="https://www.linkedin.com/company/101981114/admin/feed/posts/?feedType=following" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://www.snapchat.com/add/jewellery_exhi" className="hover:text-amber-400 transition-transform hover:scale-110" target='_blank'>
                                    <FaSnapchatGhost />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-stone-700 mt-12 pt-6 text-center text-stone-500 text-md">
                        <p>© {new Date().getFullYear()} Jewellery World. All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;