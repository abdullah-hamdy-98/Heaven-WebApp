
import Image from "next/image"

function Topbar() {
    return (
        <div className="py-12 px-24 bg-light-3 topbar">
            <Image src='/Logo/logo.png'
                alt="Logo"
                width={200}
                height={200}
            />
        </div>
    )
}

export default Topbar