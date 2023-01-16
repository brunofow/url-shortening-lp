import { useEffect, useState } from 'react'

interface Props {
  menuIcon: string
  menuNavigation: string
}

export function Menu({ menuIcon, menuNavigation }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      setIsOpen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="md:w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {menuIcon}
      </button>

      {isOpen && menuNavigation}
    </div>
  )
}
