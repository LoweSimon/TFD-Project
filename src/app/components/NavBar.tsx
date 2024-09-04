import prisma from "@/lib/db";
import Link from "../../../node_modules/next/link";

export default async function NavBar() {

    const descendants = await prisma.descendants.findMany({})

    return (
        <>
            <div className="navbar bg-base-100 px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow">
                            <li>
                            <details>
                            <summary>Descendants</summary>
                            <ul className="p-2">
                                    <li><Link href={`/descendants`}>All Descendants</Link></li>
                                {descendants.map((d) => (
                                    <>
                                        <li><Link href={`/descendants/${d.slug}`}>{d.descendant_name}</Link></li>
                                    </>
                                ))}
                                
                            </ul>
                            </details>
                        </li>
                        <li><Link href={`/modules`}>Modules</Link></li>
                        <li><Link href={`/builder`}>Builder</Link></li>
                        </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl" href="/">The First Descendant</a>
                    </div>
                    <div className="navbar-center hidden lg:flex w-1/2 justify-end">
                        <ul className="menu menu-horizontal px-1 text-lg">
                        <li>
                            <details>
                            <summary>Descendants</summary>
                            <ul className="p-2">
                                    <li><Link href={`/descendants`}>All Descendants</Link></li>
                                {descendants.map((d) => (
                                    <>
                                        <li><Link href={`/descendants/${d.slug}`}>{d.descendant_name}</Link></li>
                                    </>
                                ))}
                                
                            </ul>
                            </details>
                        </li>
                        <li><Link href={`/modules`}>Modules</Link></li>
                        <li><Link href={`/builder`}>Builder</Link></li>
                        </ul>
                    </div>
                </div>
        </>
    )
}