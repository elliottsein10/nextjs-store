import Link from 'next/link'

export const Header = () => {
    return (
        <header style={{ textAlign: "center" }}>
            <nav>
                <div>
                    <Link href="/">
                        <span style={{ margin: "0 10px" }}>Home</span>
                    </Link>
                    <Link href="/store">
                        <span style={{ margin: "0 10px" }}>Store</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
