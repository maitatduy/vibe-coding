interface AuthButtonProps {
    isAuthenticated: boolean;
    userAvatarUrl?: string;
    onClick: () => void;
}

export default function AuthButton({
    isAuthenticated,
    userAvatarUrl,
    onClick,
}: AuthButtonProps) {
    return (
        <button
            onClick={onClick}
            className="hidden md:flex items-center justify-center px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all"
        >
            {isAuthenticated ? "Tài khoản" : "Đăng nhập"}
        </button>
    );
}
