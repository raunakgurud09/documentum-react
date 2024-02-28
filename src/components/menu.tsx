import { DropdownMenuCheckboxes } from "./drop-down"

export default function Menu() {
  const val = false
  return (
    <>
      <ul className="hidden md:flex space-x-3 leading-snug font-medium">
        <a href="/#experience">
          <li className="opacity-60  hover:opacity-100 hover:text-white hover:cursor-pointer">Experience</li>
        </a>
        <a href="/#projects">
          <li className="opacity-60 hover:opacity-100 hover:text-white hover:cursor-pointer">Projects</li>
        </a>
        <a href="/blog">
          <li className="opacity-60  hover:opacity-100 hover:text-white hover:cursor-pointer">Blog</li>
        </a>
      </ul>
      <div className="flex md:hidden">
        <DropdownMenuCheckboxes />
      </div>
    </>
  )

}
