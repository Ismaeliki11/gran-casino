import Navbar from "@/components/layout/Navbar";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="bg-black-primary min-h-screen text-crema pt-32 pb-24 md:pt-40 md:pb-32 px-6 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-invert prose-dorado prose-headings:text-dorado-primary prose-a:text-dorado-claro hover:prose-a:text-dorado-primary max-w-none">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
