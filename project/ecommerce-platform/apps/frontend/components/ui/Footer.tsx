import Logo from "./Logo";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-gray-300 py-12 md:py-16 mt-auto border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="flex flex-col gap-4">
                    <Logo variant="light" />
                    <p className="text-sm leading-relaxed text-gray-400">
                        Nạp năng lượng tức thì cho các cú đêm coder. Giao hàng
                        siêu tốc trong 30 phút.
                    </p>
                    <div className="space-y-2 mt-2">
                        <div className="text-base font-medium text-white">
                            Hotline: 1900 1234
                        </div>
                        <div className="text-base font-medium text-white">
                            Email: support@techbite.vn
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                        CHÍNH SÁCH
                    </h4>
                    <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-orange-500 hover:translate-x-1 transition-all"
                    >
                        Điều khoản sử dụng
                    </a>
                    <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-orange-500 hover:translate-x-1 transition-all"
                    >
                        Chính sách bảo mật
                    </a>
                    <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-orange-500 hover:translate-x-1 transition-all"
                    >
                        Chính sách hoàn tiền
                    </a>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                        KẾT NỐI
                    </h4>
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
                © 2026 TechBite. Dành riêng cho anh em Dev thức đêm.
            </div>
        </footer>
    );
}
