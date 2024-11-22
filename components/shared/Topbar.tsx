import Image from "next/image";

function Topbar() {
    return (
        <header className="bg-light-3 px-4 py-4 md:px-8 md:py-6 lg:px-28 lg:py-12 flex items-center">
            <div className="flex-1">
                <Image
                    src="/logo/logo.png"
                    alt="Site Logo"
                    width={200}
                    height={50}
                    className="h-auto max-h-[50px] md:max-h-[70px]"
                />
            </div>

        </header>
    );
}

export default Topbar;
