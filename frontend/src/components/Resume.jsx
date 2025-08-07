export default function Resume() {
    return (
        <div className=" flex flex-col items-center justify-center p-4 bg-gray-50">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-400">My Resume</h1>

            {/* Resume Image */}
            <div className="w-full max-w-4xl px-4 mb-20">
                <img
                    src="/resumepic.png"
                    alt="Resume"
                    className="w-full border rounded-xl shadow-xl hover:blur-none blur-[1px] transition duration-300 ease-in-out"
                />
            </div>

            {/* Download Button */}
            <a
                href="/Resume.pdf"
                download
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
            >
                Download Resume
            </a>
        </div>
    );
}
