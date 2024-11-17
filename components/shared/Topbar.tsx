import Image from "next/image"

function Topbar() {
    return (
        <div className="py-12 px-24 bg-light-3">
            <Image src='/logo/logo.png'
                alt="Site Logo"
                width={200}
                height={50}
            />
        </div>
    )
}

export default Topbar