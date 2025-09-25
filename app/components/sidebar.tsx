import Link from "next/link";

export default async function Sidebar() {
    return (
        <div className="sidebar">
            <p className="mb1">CONTACT</p>
            <Link href="https://www.instagram.com/ezra.geo/" target="_" className="link"><p className="wordLink">Instagram</p></Link>
            <Link href="mailto:georgedfurr@gmail.com" target="_" className="link"><p className="wordLink">Email</p></Link>
            <div className="mt4">
                <p className="mb1">PROJECT</p>
               <Link href="/categories/painting" className="link"><p className="wordLink">Painting</p></Link>
               <Link href="/categories/drawing" className="link"><p className="wordLink">Drawing</p></Link>
               <Link href="/categories/black-white" className="link"><p className="wordLink">Black & White</p></Link>
            </div>
            <div className="mt4">
               <Link href="/updates" className="link"><p className="wordLink">Updates</p></Link>
            </div>
            
        </div>
    );
}